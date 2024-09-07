// PACKAGES
import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export function cn(...input: ClassValue[]) {
  return twMerge(clsx(input));
}

export const truncate = (str: string, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length)}...`;
};

export const formatDateFromMillis = (millis: number) => {
  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
  }).format(new Date(millis));
};

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
  }).format(date);
};