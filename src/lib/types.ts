import type { ReactNode } from "react";

export type JobApplicationCard = {
  id: number;
  company: string;
  role: string;
  status: string;
  description: string;
  appliedDate: string;
};

export type NewApplicationModalProps = {
  onClose: () => void;
  onSubmit: (data: {
    company: string;
    role: string;
    status: string;
    description: string;
    appliedDate: string;
  }) => void;
};

export type BoardContext = {
  applications: JobApplicationCard[];
  updateApplicationStage: (id: number, status: string) => void;
  onSelectApplication: (app: JobApplicationCard) => void;
};

export type DragAreaType = {
  applications: JobApplicationCard[];
  updateApplicationState: (id: number, status: string) => void;
  onSelectApplication: (app: JobApplicationCard) => void;
};

export interface DroppableType {
  id: string;
  label: string;
  count: number;
  accentColor: string;
  children: ReactNode;
}

export type ApplicationDetailType = {
  application: JobApplicationCard;
  onClose: () => void;
}