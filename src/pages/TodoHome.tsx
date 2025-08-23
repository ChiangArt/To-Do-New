import { useState, useEffect } from "react";
import { Plus } from "lucide-react";

import {  Task } from "../features/tasks/types/interface/TaskInterface";
import Button from "../shared/components/ui/button/Button";
import Filters from "../shared/components/ui/filters/Filters";
import TaskFormModal from "../features/tasks/components/task-form/TaskForm";
import TaskItems from "../features/tasks/components/task-items/TaskItems";
import { Priority } from "../features/tasks/types/Types";


export default function TodoHome() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (
    title: string,
    description?: string,
    priority?: Priority,
    dueDate?: string,
    tags?: string[]
  ) => {
    const newTask: Task = {
      id: self.crypto.randomUUID(),
      title,
      description,
      completed: false,
      createdAt: new Date().toLocaleString(),
      priority,
      dueDate,
      tags,
    };
    setTasks([newTask, ...tasks]);
    setShowForm(false);
  };

  const updateTask = (
    id: string,
    title: string,
    description?: string,
    priority?: Priority,
    dueDate?: string,
    tags?: string[]
  ) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, title, description, priority, dueDate, tags } : t
      )
    );
    setEditingTask(null);
    setShowForm(false);
  };

  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const completedCount = tasks.filter((t) => t.completed).length;

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
        toggleComplete={(id) => toggleComplete(id)}
        deleteTask={(id) => deleteTask(id)}
        editTask={(task) => {
          setEditingTask(task);
          setShowForm(true);
        }}
      />
    </div>
  );
}
