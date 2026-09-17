import React from "react";
import DragArea from "../components/DragArea";
import { useOutletContext } from "react-router-dom";
import type { BoardContext } from "../lib/types";

const Board = () => {

  const { applications, updateApplicationStage } =
    useOutletContext<BoardContext>();

  return (
    <section>
      <div className="flex flex-col px-8 py-6">
        <div>
          <h2 className="text-4xl">Pipeline</h2>
          <p className="text-lg">
            active applications · drag a card to change its stage
          </p>
        </div>
        <div>
          <DragArea
            applications={applications}
            updateApplicationState={updateApplicationStage}
          />
        </div>
      </div>
    </section>
  );
};

export default Board;
