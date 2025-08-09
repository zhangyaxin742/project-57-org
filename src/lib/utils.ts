import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatMonthYear = (iso?: string) =>
  iso ? new Date(iso).toLocaleString("en-US", { month: "short", year: "numeric" }) : "";
