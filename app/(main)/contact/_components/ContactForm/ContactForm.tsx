"use client"

// COMPONENTS
import { FormField } from "@/components/FormField";
import { Button, buttonVariants } from "@/components/Button";
// HOOKS
// PACKAGES
import { useForm } from "react-hook-form";
// CONFIG
import { contactFormConfig } from "./config";
// UTILS
import { cn } from "@/utils/helpers";
// TYPES
import { IContactForm } from "./types";
// STYLES
import styles from "./styles.module.css";


export const ContactForm = () => {
  // STATE & HOOKS
  const { register, formState: { errors }} = useForm<IContactForm>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      mobile: '',
      additionalInfo: '',
    }
  })

  return (
    <form className={`${styles.contactForm}`}>
      <h1 className={`${styles.header}`}>Get in touch!</h1>
      {contactFormConfig && contactFormConfig.map((input) => (
        <FormField
          key={input.id}
          name={input.name}
          type={input.type}
          componentType={input.componentType}
          placeholder={input.placeholder}
          register={register}
          validationSchema={input.validationSchema}
          error={errors[input.name as keyof IContactForm]?.message}
        />
      ))}

      <Button type="submit" className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
        Submit
      </Button>
    </form>
  )
}