import { Task } from "../../../../features/tasks/types/interface/TaskInterface";
import Button from "../button/Button";


interface TodoFiltersProps {
  filter: "all" | "active" | "completed";
  setFilter: (filter: "all" | "active" | "completed") => void;
  tasks: Task[];
}

export default function Filters({
  filter,
  setFilter,
  tasks,
}: TodoFiltersProps) {
  
  type FilterKey = "all" | "active" | "completed";

  const filters: { key: FilterKey; label: string; count: number }[] = [
    { key: "all", label: "Todos", count: tasks.length },
    {
      key: "active",
      label: "Activos",
      count: tasks.filter((t) => !t.completed).length,
    },
    {
      key: "completed",
      label: "Completados",
      count: tasks.filter((t) => t.completed).length,
    },
  ];

  return (
    <div className="flex justify-center gap-2 mb-4 flex-wrap">
      {filters.map((f) => (
        <Button
          key={f.key}
          variant="filter"
          active={filter === f.key}
          onClick={() => setFilter(f.key)}
        >
          {f.label} ({f.count})
        </Button>
      ))}
    </div>
  );
}
