import { useState, useEffect } from "react";
import { Task } from "../types/interface/TaskInterface";
import { Priority } from "../types/Types";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string, description?: string, priority?: Priority, dueDate?: string, tags?: string[]) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
      createdAt: new Date().toLocaleString(),
      priority,
      dueDate,
      tags,
    };
    setTasks([newTask, ...tasks]);
  };

  const updateTask = (id: string, title: string, description?: string, priority?: Priority, dueDate?: string, tags?: string[]) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, title, description, priority, dueDate, tags } : t))
    );
  };

  const toggleComplete = (id: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return {
    tasks,
    addTask,
    updateTask,
    toggleComplete,
    deleteTask,
    completedCount,
    setTasks,
  };
}
