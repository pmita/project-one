"use client"

// REACT
import { useCallback } from 'react';
// COMPONENTS
import { Button, buttonVariants } from "@/components/ui/Button"
// HOOKS
import { useForm } from "react-hook-form"
import { useDB } from "@/hooks/useDB"
// UTILS
import { cn } from "@/utils/helpers"
// TYPES
import { QUERY_STATUS } from '@/types/db';
import { IStatusForm } from './types';
// STYLES
import styles from './styles.module.css';

export const UpdateStatusForm = ({ id, status }: { id: string, status: string }) => {
  //STATE && VARIABLES
  const { updateDocument, isLoading, error } = useDB();
  const { register, handleSubmit, formState: { errors } } = useForm<IStatusForm>({
    defaultValues: {
      status
    }
  });

  // EVENTS
  const onSubmit = useCallback(async ({ status }: IStatusForm) => {
    await updateDocument(`queries/${id}`, { status });
  }, [status, id]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${styles.formContainer}`}>
      <select 
        className={`${styles.selectContainer}`}
        {...register('status', { required: true })}
      >
        <option value={QUERY_STATUS.INITIAL}>{QUERY_STATUS.INITIAL}</option>
        <option value={QUERY_STATUS.PROGRESSED}>{QUERY_STATUS.PROGRESSED}</option>
        <option value={QUERY_STATUS.COMPLETED}>{QUERY_STATUS.COMPLETED}</option>
      </select>

      {errors?.status?.message && (
        <span className={`${styles.errorText}`}>{errors.status.message}</span>
      )}

      {error && (
        <span className={`${styles.errorText}`}>{error}</span>
      )}

      <Button 
        className={cn(buttonVariants({ variant: 'primary', size: 'default' }), "flex-[1_1_20rem]")}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Updating...' : 'Update Status'}
      </Button>
    </form>
  )
}