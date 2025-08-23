import { Check, Trash2, Edit3, CalendarHeart, BellRing } from "lucide-react";
import Button from "../../../../shared/components/ui/button/Button";
import { Task } from "../../types/interface/TaskInterface";
import { getPriorityLabel, getPriorityColor } from "../../helpers/priorityHelpers";
import TaskTags from "../task-tags/TaskTags";
import { useConfetti } from "../../hooks/useConfetti";

interface TaskItemProps {
  task: Task;
  toggleComplete: () => void;
  deleteTask: () => void;
  onEdit: () => void;
}

export default function TaskItem({ task, toggleComplete, deleteTask, onEdit }: TaskItemProps) {
  const { launchConfetti } = useConfetti();

  const handleToggleComplete = () => {
    toggleComplete();
    if (!task.completed) launchConfetti();
  };

  return (
    <div className="group relative flex sm:flex-row justify-between items-start sm:items-center bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200">
      <div className="flex items-start gap-3 flex-1 w-full">
        <div className="w-5">
          <Button variant="check" active={task.completed} onClick={handleToggleComplete}>
            <Check size={14} />
          </Button>
        </div>

        <div className="flex-1 w-full pr-24">
          <div className="flex sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex flex-col items-start gap-2 max-w-full">
              <p className={`${task.completed ? "line-through text-gray-400" : "text-gray-800"} font-semibold text-lg break-words whitespace-normal max-w-full`}>
                {task.title}
              </p>

              {task.priority && (
                <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getPriorityColor(task.priority)}`}>
                  {getPriorityLabel(task.priority)}
                </span>
              )}
            </div>
          </div>

          {task.description && (
            <p className="text-gray-500 text-sm mt-1 mb-4 break-words whitespace-normal max-w-full line-clamp-3">
              {task.description}
            </p>
          )}

          {task.tags && task.tags.length > 0 && <TaskTags tags={task.tags} />}

          <div className="flex justify-between flex-wrap gap-2">
            <p className="text-gray-400 text-xs mt-1 flex gap-2 break-words">
              <CalendarHeart size={16} /> Creado: {task.createdAt}
            </p>
            {task.dueDate && (
              <p className="text-gray-400 text-xs mt-1 sm:mt-0 flex gap-2 break-words">
                <BellRing size={16} /> {new Date(task.dueDate).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
      </div>

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
