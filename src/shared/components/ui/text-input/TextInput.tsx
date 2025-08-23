import clsx from "clsx";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary" | "error";
  active?: boolean;
}

export const TextInput = ({
  variant = "primary",
  active = false,
  className = "",
  type = "text",
  ...props
}: TextInputProps) => {
  const variantClasses = {
    primary: clsx(
      "border px-3 py-1.5 rounded-lg flex-1 text-sm focus:outline-none focus:ring-1 transition",
      active
        ? "border-gray-800 ring-gray-800"
        : "focus:ring-2 focus:ring-gray-800"
    ),
    secondary: clsx(
      "border px-3 py-1.5 rounded-lg flex-1 text-sm focus:outline-none transition",
      active
        ? "border-blue-600 ring-2 ring-blue-600"
        : "border-gray-300 focus:border-blue-400"
    ),
    error: clsx(
      "border px-3 py-1.5 rounded-lg flex-1 text-sm focus:outline-none focus:ring-1 transition",
      active
        ? "border-red-600 ring-1 ring-red-600"
        : "border-red-300 focus:ring-red-500"
    ),
  };

  return (
    <input
      type={type}
      {...props}
      className={clsx("cursor-text", variantClasses[variant], className)}
    />
  );
};
