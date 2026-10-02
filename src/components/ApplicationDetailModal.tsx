import { useState } from "react";
import type { JobApplicationCard } from "../lib/types";

type ApplicationDetailModalProps = {
  application: JobApplicationCard;
  onClose: () => void;
  onDelete: (id: number) => void;
};

const ApplicationDetailModal = ({ application, onClose, onDelete }: ApplicationDetailModalProps) => {
  const [confirmingDelete, setConfirmingDelete] = useState(false);

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-bg-surface rounded-xl w-full max-w-md max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header: never scrolls, always visible */}
        <div className="flex items-start justify-between p-6 pb-4">
          <div>
            <h3 className="text-xl font-semibold">{application.company}</h3>
            <p className="text-sm text-text-secondary">{application.role}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-text-muted hover:text-text-secondary"
          >
            ✕
          </button>
        </div>

        {/* Body: this is the part that scrolls if content is too tall */}
        <div className="flex flex-col gap-5 px-6 overflow-y-auto">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-text-muted text-xs uppercase tracking-wide mb-1">Status</p>
              <p className="font-medium capitalize">{application.status}</p>
            </div>
            <div>
              <p className="text-text-muted text-xs uppercase tracking-wide mb-1">Applied</p>
              <p className="font-medium">{application.appliedDate}</p>
            </div>
          </div>

          {application.description && (
            <div>
              <p className="text-text-muted text-xs uppercase tracking-wide mb-1">Description</p>
              <p className="text-sm text-text-secondary whitespace-pre-line pb-5">
                {application.description}
              </p>
            </div>
          )}
        </div>

        {/* Footer: never scrolls, always visible */}
        <div className="p-6 pt-4 border-t border-border">
          {!confirmingDelete ? (
            <button
              type="button"
              onClick={() => setConfirmingDelete(true)}
              className="text-sm font-medium text-red-600 hover:text-red-700"
            >
              Delete application
            </button>
          ) : (
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm text-text-secondary">
                Delete your application to {application.company}?
              </p>
              <div className="flex gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setConfirmingDelete(false)}
                  className="px-3 py-1.5 rounded-lg border border-border text-sm"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => onDelete(application.id)}
                  className="px-3 py-1.5 rounded-lg bg-red-600 text-white text-sm font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetailModal;