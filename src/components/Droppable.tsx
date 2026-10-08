import { useDroppable } from "@dnd-kit/react";
import type { DroppableType } from "../lib/types";

const Droppable = ({ id, label, count, accentColor, children }: DroppableType) => {
  const { ref } = useDroppable({ id });

  return (
    <div
      ref={ref}
      className="w-full bg-bg-muted rounded-xl overflow-hidden flex flex-col h-[calc(100vh-240px)] min-h-[420px]"
    >
      <div className="h-[3px] w-full" style={{ backgroundColor: accentColor }} />
      <div className="flex items-center justify-between px-4 pt-3.5 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: accentColor }} />
          <p className="font-semibold text-sm text-text-primary">{label}</p>
        </div>
        <span className="text-xs font-semibold text-text-secondary bg-bg-surface px-2 py-0.5 rounded-full border border-border">
          {count}
        </span>
      </div>
      <div className="flex-1 overflow-y-auto px-3.5 pb-4">
        <div className="flex flex-col gap-2.5">{children}</div>
      </div>
    </div>
  );
};

export default Droppable;