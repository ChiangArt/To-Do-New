import { X } from "lucide-react";
import { useState } from "react";
import { TextInput } from "../../../../shared/components/ui/text-input/TextInput";
import Button from "../../../../shared/components/ui/button/Button";



interface Props {
  tags: string[];
  onAdd: (tag: string) => void;
  onRemove: (tag: string) => void;
}

export default function TagsInput({ tags, onAdd, onRemove }: Props) {
  const [tagInput, setTagInput] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (tagInput.trim() && !tags.includes(tagInput.trim())) {
        onAdd(tagInput.trim());
        setTagInput("");
      }
    }
  };

  return (
    <div className="mb-4">
      <label className="font-medium text-sm mb-1 block">Etiquetas:</label>
      <div className="flex gap-2 mb-2">
        <TextInput
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Agrega una etiqueta..."
          variant="primary"
          active={!!tagInput}
        />
        <Button
          variant="primary"
          onClick={() => {
            if (tagInput.trim() && !tags.includes(tagInput.trim())) {
              onAdd(tagInput.trim());
              setTagInput("");
            }
          }}
        >
          AGREGAR
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full flex items-center gap-1 text-sm"
          >
            {t}
            <Button variant="tags" onClick={() => onRemove(t)}>
              <X size={14} />
            </Button>
          </span>
        ))}
      </div>
    </div>
  );
}
