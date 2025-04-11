import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(path: string) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Encode the path to handle spaces and special characters
  const encodedPath = cleanPath.split('/').map(part => encodeURIComponent(part)).join('/');
  // For custom domain, we just need a leading slash
  return `/${encodedPath}`;
}
