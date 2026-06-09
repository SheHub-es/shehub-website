import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Absolute URL (open in new tab, rel noopener, etc.). */
export function isHttpUrl(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://")
}
