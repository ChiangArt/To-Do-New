import { Priority } from "../types/Types";

export const getPriorityLabel = (priority?: Priority) => {
  if (!priority) return "";
  const labels: Record<Priority, string> = {
    alto: "🔥 Alto",
    medio: "🙂 Medio",
    bajo: "😌 Bajo",
  };
  return labels[priority];
};

export const getPriorityColor = (priority?: Priority) => {
  if (!priority) return "";
  const colors: Record<Priority, string> = {
    alto: "bg-red-500 text-white",
    medio: "bg-yellow-400 text-black",
    bajo: "bg-green-400 text-black",
  };
  return colors[priority];
};
