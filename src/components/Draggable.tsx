import { useDraggable } from "@dnd-kit/react";
import type { ReactNode } from "react";
import { useRef } from "react";

type DraggableProps = {
  id: number;
  children: ReactNode;
  onClick?: () => void;
  accentColor?: string;
  company?: string;
};

const CLICK_THRESHOLD = 5;

// Static literal classnames only — Tailwind can't see classes built from
// a template string at runtime, so each combination has to be spelled out.
const AVATAR_CLASSES = [
  "bg-avatar-1-bg text-avatar-1-text",
  "bg-avatar-2-bg text-avatar-2-text",
  "bg-avatar-3-bg text-avatar-3-text",
  "bg-avatar-4-bg text-avatar-4-text",
  "bg-avatar-5-bg text-avatar-5-text",
  "bg-avatar-6-bg text-avatar-6-text",
];

const getAvatarClass = (name: string) => {
  const sum = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return AVATAR_CLASSES[sum % AVATAR_CLASSES.length];
};

const Draggable = ({ id, children, onClick, accentColor = "#9CA3AF", company = "" }: DraggableProps) => {
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

  const initial = company.trim().charAt(0).toUpperCase() || "?";

  return (
    <div
      ref={ref}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{ borderLeftColor: accentColor }}
      className={`kanban-card bg-bg-surface rounded-[10px] border-l-[3px] p-3.5 cursor-grab transition-shadow duration-150 ${
        isDragging ? "opacity-90 shadow-xl ring-2 ring-accent/20" : "shadow-card"
      }`}
    >
      <div className="flex items-start gap-2.5">
        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${getAvatarClass(company)}`}>
          {initial}
        </span>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Draggable;