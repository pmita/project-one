"use client"

// UTILS
import { cn } from '@/utils/helpers';
// TYPES
import { IFormField } from './types';
// STYLES
import styles from './styles.module.css';

export function InputField({
  name,
  label,
  register,
  validationSchema,
  type,
  placeholder,
  error,
  className,
  ...rest
}: IFormField) : JSX.Element {
  return (
    <div className={cn(`${styles.field}`, className)}>
      {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}

      <input
        className={`${styles.input}`}
        id={name}
        placeholder={placeholder}
        type={type}
        {...register(name, validationSchema)}
        {...rest}
      />

      {error && (
        <span className={`${styles.danger}`}>{error}</span>
      )}
    </div>
  )
}