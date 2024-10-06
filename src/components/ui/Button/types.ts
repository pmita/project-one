import React from 'react';
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./buttonVariants";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}