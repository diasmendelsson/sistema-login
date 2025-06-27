import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export function formatAmount(amount) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
}