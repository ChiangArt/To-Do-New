import { Priority } from "../Types";

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
  dueDate?: string;
  priority?: Priority;
  tags?: string[];
}
