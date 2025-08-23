import clsx from "clsx";
import { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "primary" | "secondary" | "error" | "success";
  active?: boolean;
}

export const TextArea = ({
  variant = "primary",
  active = false,
  className = "",
  ...props
}: TextAreaProps) => {
  const variantClasses = {
   primary: clsx(
  "border px-3 py-1.5 rounded-lg flex-1 text-sm focus:outline-none focus:ring-1 transition",
  active
    ? "border-gray-800 ring-gray-800"
    : "focus:ring-2 focus:ring-gray-800"
),
    secondary: clsx(
      "w-full border px-3 py-2 rounded-lg text-sm focus:outline-none transition",
      active
        ? "border-blue-600 ring-2 ring-blue-600"
        : "border-gray-300 focus:border-blue-400"
    ),
    error: clsx(
      "w-full border px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-1 transition",
      active
        ? "border-red-600 ring-1 ring-red-600"
        : "border-red-300  focus:ring-red-500"
    ),
    success: clsx(
      "w-full border px-3 py-2 rounded-lg text-sm focus:outline-none transition",
      active
        ? "border-green-600 ring-2 ring-green-600"
        : "border-green-300 focus:ring-green-500"
    ),
  };

  return (
    <textarea {...props} className={clsx(variantClasses[variant], className)} />
  );
};
