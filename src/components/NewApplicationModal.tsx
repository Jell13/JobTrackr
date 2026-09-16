import React, { useState } from "react";
import type { NewApplicationModalProps } from "../lib/types";
import { stages } from "../lib/consts";

const NewApplicationModal = ({ onClose, onSubmit }: NewApplicationModalProps) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [stageId, setStageId] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e : any) => {
    e.preventDefault();
    if (!company.trim() || !position.trim()) return;
    onSubmit({ company, position, stageId, description });
    onClose();
  }
  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-bg-surface rounded-xl p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold mb-4">New Application</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="company"
              className="text-sm font-medium text-text-secondary"
            >
              Company
            </label>
            <input
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="border border-border rounded-lg px-3 py-2"
              placeholder="e.g. Acme Corp"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="position"
              className="text-sm font-medium text-text-secondary"
            >
              Position
            </label>
            <input
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="border border-border rounded-lg px-3 py-2"
              placeholder="e.g. Frontend Developer"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="description"
              className="text-sm font-medium text-text-secondary"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-border rounded-lg px-3 py-2"
              placeholder="e.g. Requires this year of experience"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="stage"
              className="text-sm font-medium text-text-secondary"
            >
              Status
            </label>
            <select
              id="stage"
              value={stageId}
              onChange={(e) => setStageId(e.target.value)}
              className="border border-border rounded-lg px-3 py-2"
            >
              {stages  .map((stage) => (
                <option key={stage.id} value={stage.id}>
                  {stage.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-border"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-accent text-accent-tint"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewApplicationModal;
