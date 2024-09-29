"use client"

// REACT
import React from 'react';
// UTILS
import { cn } from '@/utils/helpers';
// TYPES
import { IFormField, ComponentTypeMap } from './types';
// STYLES
import styles from './styles.module.css';

export const ComponentType: ComponentTypeMap = {
  input: "input",
  textarea: "textarea",
}

export function FormField({
  name,
  label,
  componentType,
  register,
  validationSchema,
  type,
  placeholder,
  error,
  className,
  ...rest
}: IFormField) : JSX.Element {
  const Component = ComponentType[componentType as keyof ComponentTypeMap] || ComponentType.input;

  return (
    <div className={cn(`${styles.container}`, className)}>
      {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}

      <Component
        className={`${styles.field}`}
        type={type}
        id={name}
        placeholder={placeholder}
        {...register(name, validationSchema)}
        {...rest}
      />

      {error && (
        <span className={`${styles.danger}`}>{error}</span>
      )}
    </div>
  )
}