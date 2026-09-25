import { useDraggable } from "@dnd-kit/react";
import type { ReactNode } from "react";
import { useRef } from "react";

type DraggableProps = {
  id: number;
  children: ReactNode;
  onClick?: () => void;
};

const CLICK_THRESHOLD = 5; // pixels of movement allowed before it counts as a drag

const Draggable = ({ id, children, onClick }: DraggableProps) => {
  const { ref, isDragging } = useDraggable({ id });
  const downPos = useRef<{ x: number; y: number } | null>(null);
  const moved = useRef(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    downPos.current = { x: e.clientX, y: e.clientY };
    moved.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!downPos.current) return;
    const dx = e.clientX - downPos.current.x;
    const dy = e.clientY - downPos.current.y;
    if (Math.sqrt(dx * dx + dy * dy) > CLICK_THRESHOLD) {
      moved.current = true;
    }
  };

  const handlePointerUp = () => {
    if (!moved.current) {
      onClick?.();
    }
    downPos.current = null;
  };

  return (
    <div
      ref={ref}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className={`bg-bg-surface rounded-lg p-3 shadow-card cursor-grab ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Draggable;