// REACT
import React from "react";
// TYPES
import { UseFormRegister } from "react-hook-form";

export interface IFormField {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  componentType?: string;
  register: UseFormRegister<any>;
  validationSchema?: {
    required?: string;
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
  }
  error?: string; 
  className?: string;
}

export type ComponentTypeMap = Record<string, React.ElementType>;
