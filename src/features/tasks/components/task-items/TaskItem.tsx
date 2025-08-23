import {
  Check,
  Trash2,
  Edit3,
  CalendarHeart,
  BellRing,
  Tags,
} from "lucide-react";
import confetti from "canvas-confetti";
import {  Task } from "../../types/interface/TaskInterface";
import Button from "../../../../shared/components/ui/button/Button";
import { Priority } from "../../types/Types";

interface TaskItemProps {
  task: Task;
  toggleComplete: () => void;
  deleteTask: () => void;
  onEdit: () => void;
}

const priorityColor: Record<Priority, string> = {
  alto: "bg-red-500 text-white",
  medio: "bg-yellow-400 text-black",
  bajo: "bg-green-400 text-black",
};

const priorityIcon: Record<Priority, string> = {
  alto: "🔥",
  medio: "🙂",
  bajo: "😌",
};

export default function TaskItem({
  task,
  toggleComplete,
  deleteTask,
  onEdit,
}: TaskItemProps) {
  const handleToggleComplete = () => {
    toggleComplete();

    if (!task.completed) {
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
      });
    }
  };

  return (
    <div className="group relative flex  sm:flex-row justify-between items-start sm:items-center bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200">
      <div className="flex items-start gap-3 flex-1 w-full">
        {/* Checkbox */}
        <div className="w-5">
          <Button
            variant="check"
            active={task.completed}
            onClick={handleToggleComplete}
          >
            <Check size={14} />
          </Button>
        </div>

        {/* Contenido */}
        <div className="flex-1 w-full pr-24">
          {/* Título + Prioridad */}
          <div className="flex sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex flex-col  items-start  gap-2 max-w-full">
              <p
                className={`${
                  task.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                } font-semibold text-lg break-words whitespace-normal max-w-full`}
              >
                {task.title}
              </p>

              {task.priority && (
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    priorityColor[task.priority]
                  }`}
                >
                  {priorityIcon[task.priority]}{" "}
                  {task.priority.charAt(0).toUpperCase() +
                    task.priority.slice(1)}
                </span>
              )}
            </div>
          </div>

          {/* Descripción */}
          {task.description && (
            <p className="text-gray-500 text-sm mt-1 mb-4 break-words whitespace-normal max-w-full line-clamp-3">
              {task.description}
            </p>
          )}

          {/* Tags */}
          {task.tags && task.tags.length > 0 && (
            <div className="text-gray-400 text-xs my-3 flex flex-wrap gap-1 max-w-full">
              <Tags size={16} className="shrink-0" />
              {task.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 flex items-center gap-1 text-gray-800 px-2 py-0.5 rounded-full text-xs"
                >
                  @{tag}
                </span>
              ))}
            </div>
          )}

          {/* Creado */}
          <div className="flex justify-between flex-wrap gap-2">
            <p className="text-gray-400 text-xs mt-1 flex gap-2 break-words">
              <CalendarHeart size={16} /> Creado: {task.createdAt}
            </p>
            {task.dueDate && (
              <p className="text-gray-400 text-xs mt-1 sm:mt-0 flex gap-2 break-words">
                <BellRing size={16} />{" "}
                {new Date(task.dueDate).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Botones acción en la esquina */}
      <div className="absolute top-2 right-2 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
        <Button variant="edit" onClick={onEdit}>
          <Edit3 size={16} />
        </Button>
        <Button variant="delete" onClick={deleteTask}>
          <Trash2 size={16} />
        </Button>
      </div>
    </div>
  );
}
