"use client"

// NEXT
import { useRouter } from 'next/navigation';
// REACT
import { useCallback, useEffect } from 'react';
// COMPONETNS
import { FormField } from '@/components/FormField';
import { Button, buttonVariants } from "@/components/Button";
// HOOKS
import { useSignIn } from '@/hooks/useSignin';
import { useAuth } from "@/hooks/useAuth";
// PACKAGES
import { useForm } from "react-hook-form";
// CONFIG
import { signinFormConfig } from "./config";
// UTILS
import { cn } from "@/utils/helpers";
// STYLES
import styles from "./styles.module.css";

// TYPES
interface SignInFormProps {
  email: string;
  password: string;
}

export const SignInForm = () => {
  // STATE && VARIABLES
  const router = useRouter();
  const { user } = useAuth();
  const { signin, error ,isLoading } = useSignIn();
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormProps>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    }
  });

  // EVENTS
  const onSubmit = useCallback(async ({email, password }: SignInFormProps) => {
    await signin(email, password);

    if (!error && !isLoading) {
      router.push('/dashboard');
    }
  }, []);

  // USE EFFECTS
  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${styles.container}`}>
      {signinFormConfig && signinFormConfig.map((input) => (
        <FormField
          key={input.id}
          name={input.name}
          type={input.type}
          register={register}
          validationSchema={input.validationSchema}
          placeholder={input.placeholder}
          error={errors[input.name as keyof SignInFormProps]?.message}
        />
      ))}

      <Button 
        className={cn(buttonVariants({ variant: "primary", size: "lg" }))} 
        type="submit" 
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Sign In'}
      </Button>
    </form> 
  );
}