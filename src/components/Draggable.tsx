import { useDraggable } from "@dnd-kit/react";
import type { ReactNode } from "react";

type DraggableProps = {
  id: string;
  children: ReactNode;
};

const Draggable = ({ id, children }: DraggableProps) => {
  const { ref, isDragging } = useDraggable({ id });

  return (
    <div
      ref={ref}
      className={`bg-bg-surface rounded-lg p-3 shadow-card cursor-grab ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Draggable;