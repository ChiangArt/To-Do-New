import Button from "../../../../shared/components/ui/button/Button";
import { Priority } from "../../types/Types";




interface Props {
  priority: Priority;
  onChange: (p: Priority) => void;
}

const icons = { alto: "🔥", medio: "🙂", bajo: "😌" };

export default function PrioritySelector({ priority, onChange }: Props) {
  return (
    <div className="flex items-center gap-4 mb-3">
      <span className="font-medium text-sm">Prioridad:</span>
      {(["alto", "medio", "bajo"] as Priority[]).map((p) => (
        <Button
          key={p}
          variant="priority"
          priorityLevel={p}
          active={priority === p}
          onClick={() => onChange(p)}
        >
          {icons[p]} {p === "alto" ? "Alta" : p === "medio" ? "Media" : "Baja"}
        </Button>
      ))}
    </div>
  );
}
