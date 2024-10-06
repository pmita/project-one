"use client"

// REACT
import { useCallback } from "react";
// COMPONENTS
import { Button, buttonVariants } from "@/src/components/ui/Button";
import { FormField } from "@/src/components/Forms/components/FormField";
// HOOKS
import { useDB } from "@/src/hooks/useDB";
// PACKAGES
import { useForm } from "react-hook-form";
// TYPES
import { QUERY_STATUS } from "@/src/types/db";
import { IAddCommentForm } from "./types";
// UTILS
import { cn } from "@/src/utils/helpers";
// CONFIG
import { addCommentFormConfig } from "@/src/config/comment";
// STYLES
import styles from "./styles.module.css";

export const AddComment = ({
  id,
  currentStatus,
}: { id: string, currentStatus: QUERY_STATUS }) => {
  const { addDocument, isLoading, error } = useDB();
  const { register, reset, handleSubmit, formState: { errors } } = useForm<IAddCommentForm>({
    defaultValues: {
      comment: ''
    }
  });

  const onSubmit = useCallback(async ({ comment }: IAddCommentForm) => {
    const commentToAdd = {
      content: comment,
      status: currentStatus,
    };

    try {
      await addDocument(`queries/${id}/comments`, commentToAdd);

      reset();
    } catch (err) {
      console.error('Failed to add comment:', err);
    }
  }, [addDocument, id, currentStatus, reset]);

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
};
