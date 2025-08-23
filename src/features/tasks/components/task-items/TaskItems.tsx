import { Task } from "../../types/interface/TaskInterface";
import TaskItem from "./TaskItem";

interface TaskItemsProps {
  tasks: Task[];
  toggleComplete: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (task: Task) => void;
}

export default function TaskItems({
  tasks,
  toggleComplete,
  deleteTask,
  editTask,
}: TaskItemsProps) {
  if (tasks.length === 0) {
    return <p className="text-gray-400 text-center">No hay tareas.</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={() => toggleComplete(task.id)}
          deleteTask={() => deleteTask(task.id)}
          onEdit={() => editTask(task)}
        />
      ))}
    </div>
  );
}
