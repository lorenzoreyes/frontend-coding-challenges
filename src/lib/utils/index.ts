import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, parse } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date?: string) =>
  date ? format(parse(date, "dd-MM-yyyy", new Date()), "MMMM d, yyyy") : null;
