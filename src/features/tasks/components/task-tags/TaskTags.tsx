import { Tags } from "lucide-react";

interface TaskTagsProps {
  tags: string[];
}

export default function TaskTags({ tags }: TaskTagsProps) {
  return (
    <div className="text-gray-400 text-xs my-3 flex flex-wrap gap-1 max-w-full">
      <Tags size={16} className="shrink-0" />
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-gray-200 flex items-center gap-1 text-gray-800 px-2 py-0.5 rounded-full text-xs"
        >
          @{tag}
        </span>
      ))}
    </div>
  );
}
