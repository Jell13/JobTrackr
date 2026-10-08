import { DragDropProvider } from "@dnd-kit/react";
import { stages } from "../lib/consts";
import Droppable from "./Droppable";
import type { DragAreaType } from "../lib/types";
import Draggable from "./Draggable";

const STAGE_ACCENT: Record<string, string> = {
  wishlist: "#64748B",
  applied: "#2563EB",
  interviewing: "#D97706",
  offer: "#059669",
  rejected: "#DC2626",
};
const DEFAULT_ACCENT = "#9CA3AF";

const DragArea = ({ applications, updateApplicationState, onSelectApplication }: DragAreaType) => {
  return (
    <DragDropProvider
      onDragEnd={(e) => {
        if (e.canceled) return;
        const targetStatus = e.operation.target?.id;
        const draggedId = e.operation.source?.id;
        if (typeof targetStatus === "string" && typeof draggedId === "number") {
          updateApplicationState(draggedId, targetStatus);
        }
      }}
    >
      <div className="overflow-x-auto pb-2">
        <div className="grid grid-cols-5 gap-5 min-w-[1180px]">
          {stages.map((stage) => {
            const accent = STAGE_ACCENT[stage.id] ?? DEFAULT_ACCENT;
            const stageApps = applications.filter((app) => app.status === stage.id);

            return (
              <Droppable
                key={stage.id}
                id={stage.id}
                label={stage.name}
                count={stageApps.length}
                accentColor={accent}
              >
                {stageApps.map((app) => (
                  <Draggable
                    key={app.id}
                    id={app.id}
                    accentColor={accent}
                    company={app.company}
                    onClick={() => onSelectApplication(app)}
                  >
                    <p className="font-semibold text-sm text-text-primary truncate">{app.role}</p>
                    <p className="text-sm text-text-secondary truncate">{app.company}</p>
                  </Draggable>
                ))}
              </Droppable>
            );
          })}
        </div>
      </div>
    </DragDropProvider>
  );
};

export default DragArea;