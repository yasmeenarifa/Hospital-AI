import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount)
}

// Generate a random UHID
export function generateUHID(): string {
  const prefix = "UHID-TN"
  const year = new Date().getFullYear()
  const randomNum = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0")
  return `${prefix}-${year}-${randomNum}`
}

// Generate a random bill ID
export function generateBillID(): string {
  const prefix = "BILL"
  const year = new Date().getFullYear()
  const randomNum = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0")
  return `${prefix}-${year}-${randomNum}`
}

// Generate a random report ID
export function generateReportID(): string {
  const prefix = "AI-REP"
  const randomNum = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0")
  return `${prefix}-${randomNum}`
}
