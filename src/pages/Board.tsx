import React from "react";
import DragArea from "../components/DragArea";
import { useOutletContext } from "react-router-dom";
import type { BoardContext } from "../lib/types";

const Board = () => {
  const { applications, updateApplicationStage, onSelectApplication } =
    useOutletContext<BoardContext>();

  return (
    <section className="bg-bg-page min-h-full">
      <div className="flex flex-col gap-1 px-8 py-7">
        <h2 className="font-heading text-3xl font-bold text-text-primary">Pipeline</h2>
        <p className="text-text-secondary">
          {applications.length} active application{applications.length === 1 ? "" : "s"} · drag a card to change its stage
        </p>
      </div>
      <div className="px-8 pb-8">
        <DragArea
          applications={applications}
          updateApplicationState={updateApplicationStage}
          onSelectApplication={onSelectApplication}
        />
      </div>
    </section>
  );
};

export default Board;