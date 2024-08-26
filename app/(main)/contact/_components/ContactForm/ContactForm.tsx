"use client"

// REACT
import { useState, useCallback } from "react";
// COMPONENTS
import { FormField } from "@/components/FormField";
import { Button, buttonVariants } from "@/components/Button";
// PACKAGES
import { SubmitHandler, useForm } from "react-hook-form";
// HOOKS
import { useDB } from "@/hooks/useDB";
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
  const { isLoading, hasQueryBeenSent, addDocument } = useDB();
  const { register, handleSubmit, reset, formState: { errors }} = useForm<IContactForm>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      mobile: '',
      additionalInfo: '',
    }
  })

  // EVENT HANDLERS
  const onSubmit: SubmitHandler<IContactForm> = useCallback(async ({ fullName, email, mobile, additionalInfo }) => {
    await addDocument(
      'queries', {
        fullName,
        email,
        mobile,
        additionalInfo
      }
    )

    reset();
  }, [isLoading, hasQueryBeenSent]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${styles.contactForm}`}>
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

      <Button type="submit" disabled={isLoading} className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
        {isLoading ? 'Loading...' : 'Submit'}
      </Button>

      {hasQueryBeenSent && <p className={`${styles.promptText}`}>Query has been sent!</p>}
    </form>
  )
}
