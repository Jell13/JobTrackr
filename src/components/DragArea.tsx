import { DragDropProvider } from "@dnd-kit/react";
import React from "react";
import { stages } from "../lib/consts";
import Droppable from "./Droppable";
import type { DragAreaType } from "../lib/types";
import Draggable from "./Draggable";
 
const DragArea = ({applications, updateApplicationState} : DragAreaType) => {
  return (
    <DragDropProvider 
    onDragEnd={(e) => {
      if (e.canceled) return;
        const targetStageId = e.operation.target?.id;
        const draggedId = e.operation.source?.id;
        if (typeof targetStageId === "string" && typeof draggedId === "string") {
          updateApplicationState(draggedId, targetStageId);
        }
    }}>
      <div className="p-6">
        <div className="grid grid-cols-5 gap-5">
          {stages.map((stage) => (
            <Droppable key={stage.id} id={stage.id}>
              <p className="font-medium mb-3">{stage.name}</p>
              <div className="flex flex-col gap-3">
                {applications
                  .filter((app) => app.stageId === stage.id)
                  .map((app) => (
                    <Draggable key={app.id} id={app.id}>
                      <p className="font-medium">{app.position}</p>
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
