"use client"

// COMPONENTS
import { InputField } from "@/components/InputField";
import { Button, buttonVariants } from "@/components/Button";
// HOOKS
// PACKAGES
import { type SubmitHandler, useForm } from "react-hook-form";
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
  const { addDocument, hasQueryBeenSent } = useFirestore();
  const { register, handleSubmit, formState: { errors }, reset} = useForm<IContactForm>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      mobile: '',
      location: '',
      additionalInfo: '',
    }
  })

  // EVENTS
  const onSubmit: SubmitHandler<IContactForm> = async ({ fullName, email, mobile, location, additionalInfo }: IContactForm) => {
    await addDocument(
      'queries', {
        fullName,
        email,
        mobile,
        location,
        additionalInfo
      }
    )

    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${styles.contactForm}`}>
      <h1 className={`${styles.header}`}>Get in touch!</h1>
      {contactFormConfig && contactFormConfig.map((input) => (
        <InputField
          key={input.id}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
          register={register}
          validationSchema={input.validationSchema}
          error={errors[input.name as keyof IContactForm]?.message}
        />
      ))}

      <Button type="submit" className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
        Submit
      </Button>

      {hasQueryBeenSent && <p className={`${styles.text}`}>Query has been sent!</p>}
    </form>
  )
}