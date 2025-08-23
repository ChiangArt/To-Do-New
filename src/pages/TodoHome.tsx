import { useState } from "react";
import { Plus } from "lucide-react";
import Button from "../shared/components/ui/button/Button";
import Filters from "../shared/components/ui/filters/Filters";
import TaskFormModal from "../features/tasks/components/task-form/TaskForm";
import TaskItems from "../features/tasks/components/task-items/TaskItems";
import { useTasks } from "../features/tasks/hooks/useTasks";
import { Task } from "../features/tasks/types/interface/TaskInterface";

export default function TodoHome() {
  const {
    tasks,
    addTask,
    updateTask,
    toggleComplete,
    deleteTask,
    completedCount,
  } = useTasks();
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Todo List</h1>
        <p className="text-gray-600">Organiza tu vida, una tarea a tiempo</p>
      </div>

      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-gray-700">Progreso</h2>
          <span className="text-gray-700 font-medium">
            {completedCount}/{tasks.length} completadas
          </span>
        </div>
        <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
          <div
            className="bg-green-500 h-3 transition-all duration-500"
            style={{
              width: `${
                tasks.length ? (completedCount / tasks.length) * 100 : 0
              }%`,
            }}
          ></div>
        </div>
      </div>

      <div className="flex justify-center mb-4">
        <Button
          onClick={() => {
            setShowForm(!showForm);
            setEditingTask(null);
          }}
        >
          <Plus size={20} /> Agregar Tarea
        </Button>
      </div>

      {showForm && (
        <TaskFormModal
          show={showForm}
          onClose={() => setShowForm(false)}
          addTask={addTask}
          updateTask={updateTask}
          editingTask={editingTask}
        />
      )}

      <Filters filter={filter} setFilter={setFilter} tasks={tasks} />

      <TaskItems
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={(task) => {
          setEditingTask(task);
          setShowForm(true);
        }}
      />
    </div>
  );
}
