"use client"

// REACT
import { useCallback } from "react";
// COMPONENTS
import { Button, buttonVariants } from "@/components/Button";
import { FormField } from "../FormField";
// HOOKS
import { useDB } from "@/hooks/useDB";
// PACKAGES
import { useForm } from "react-hook-form";
// TYPES
import { QUERY_STATUS } from "@/types/db";
import { IAddCommentForm } from "./types";
// UTILS
import { cn } from "@/utils/helpers";
// CONFIG
import { addCommentFormConfig } from "@/config/comment";
// STYLES
import styles from "./styles.module.css";


export const AddComment = ({ id, currentStatus }: { id: string, currentStatus: QUERY_STATUS }) => {
  // STATE && VARIABLES
  const { addDocument, isLoading, error } = useDB();
  const { register, reset, handleSubmit, formState: { errors } } = useForm<IAddCommentForm>({
    defaultValues: {
      comment: ''
    }
  });

  // EVENTS
  const onSubmit = useCallback(async ({ comment }: IAddCommentForm) => {
    const commentToAdd = {
      content: comment,
      status: currentStatus,
    }

    await addDocument(`queries/${id}/comments`, commentToAdd);

    reset();
  }, [addDocument, id]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${styles.formContainer}`}>
      {addCommentFormConfig && addCommentFormConfig.map((input) => (
        <FormField
          key={input.id}
          name={input.name}
          type={input.type}
          componentType={input.componentType}
          placeholder={input.placeholder}
          register={register}
          validationSchema={input.validationSchema}
          error={errors[input.name as keyof IAddCommentForm]?.message}
        />
      ))}

      {error && (
        <span className={`${styles.errorText}`}>{error}</span>
      )}

      <Button
        className={cn(buttonVariants({ variant: "primary", size: "sm" }))}
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? 'Adding...' : 'Add Comment'}
      </Button>
    </form>
  );
}