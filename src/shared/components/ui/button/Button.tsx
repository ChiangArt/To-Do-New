import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?:
    | "primary"
    | "secondary"
    | "terciary"
    | "danger"
    | "filter"
    | "edit"
    | "delete"
    | "check"
    | "priority"
    | "success"
    | "tags"
    | "close"
    | "calendar"; 
  active?: boolean;
  priorityLevel?: "alto" | "medio" | "bajo";
  type?: string;
  isToday?: boolean;
};

export default function Button({
  variant = "primary",
  type = "button",
  className,
  active = false,
  isToday,
  priorityLevel,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: clsx(
      "px-2 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
    ),
    secondary: "text-blue-600 hover:text-blue-800",
    terciary: "text-red-600 hover:text-red-800",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success:
      "px-4 py-2 justify-center rounded-lg flex items-center w-full gap-2 bg-green-600 text-white hover:bg-green-700 transition-colors",
    close:
      "absolute top-3 right-3 text-gray-400 hover:bg-gray-700 hover:rounded-full  hover:text-white cursor-pointer",
    filter: clsx(
      "px-4 py-2 rounded-lg font-medium transition-colors ",
      active
        ? "bg-gray-800 text-white"
        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
    ),
    edit: "px-2 py-2 rounded-lg font-medium transition-colors p-2 text-blue-600 hover:text-blue-800 transition rounded-lg hover:bg-blue-50",
    tags: "text-red-500 hover:text-red-700",
    delete:
      "px-2 py-2 rounded-lg font-medium transition-colors p-2 text-red-600 hover:text-red-800 transition rounded-lg hover:bg-red-50",
    check: clsx(
      "w-6 h-6 border-2 rounded-full flex items-center justify-center transition",
      active ? "bg-green-500 border-green-500 text-white" : "border-gray-400"
    ),
    priority: clsx(
      "px-3 py-1.5 rounded-lg text-sm transition-all",
      priorityLevel === "alto" &&
        (active
          ? "bg-red-600 text-black shadow-md"
          : "bg-gray-100 text-gray-700 hover:bg-red-700"),
      priorityLevel === "medio" &&
        (active
          ? "bg-yellow-400 text-black shadow-md"
          : "bg-gray-100 text-gray-700 hover:bg-yellow-500"),
      priorityLevel === "bajo" &&
        (active
          ? "bg-green-400 text-black shadow-md"
          : "bg-gray-100 text-gray-700 hover:bg-green-500")
    ),
     calendar: clsx(
    "h-8 w-8 flex items-center justify-center rounded-full text-sm",
    active && "bg-gray-800 text-white",
    !active && isToday && "bg-blue-100 text-blue-600 font-semibold",
    !active && !isToday && "text-gray-700 hover:bg-gray-100"
  ),
  };

  return (
    <button
      type={type}
      {...props}
      className={`cursor-pointer ${variantClasses[variant]} ${className ?? ""}`}
    />
  );
}
