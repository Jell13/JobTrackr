import { DragDropProvider } from "@dnd-kit/react";
import { stages } from "../lib/consts";
import Droppable from "./Droppable";
import type { DragAreaType } from "../lib/types";
import Draggable from "./Draggable";

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
      <div className="py-6">
        <div className="grid grid-cols-5 gap-5">
          {stages.map((stage) => (
            <Droppable key={stage.id} id={stage.id}>
              <p className="font-medium mb-3">{stage.name}</p>
              <div className="flex flex-col gap-3">
                {applications
                  .filter((app) => app.status === stage.id)
                  .map((app) => (
                    <Draggable key={app.id} id={app.id} onClick={() => onSelectApplication(app)}>
                      <p className="font-medium">{app.role}</p>
                      <p className="text-sm text-text-secondary">{app.company}</p>
                    </Draggable>
                  ))}
              </div>
            </Droppable>
          ))}
        </div>
      </div>
    </DragDropProvider>
  );
};

export default DragArea;