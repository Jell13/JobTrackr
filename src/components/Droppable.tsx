import { useDroppable } from "@dnd-kit/react";
import React from "react";
import type { DroppableType } from "../lib/types";

const Droppable = ({ id, children }: DroppableType) => {
  const { ref } = useDroppable({
    id,
  });
  return <div className="w-full bg-bg-muted h-96 overflow-y-auto px-5 py-4 rounded-xl" ref={ref}>{children}</div>;
};

export default Droppable;
