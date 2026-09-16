export interface DroppableType {
    id: any;
    children: any;
}

export type NewApplicationModalProps = {
    onClose: () => void;
    onSubmit: (data: {company: string; position: string; stageId: string, description: string}) => void
}

export type JobApplicationCard = {
    id: string;
    company: string;
    position: string;
    stageId: string;
    description: string;
}

export type BoardContext = {
  applications: JobApplicationCard[]
  updateApplicationStage: (id: string, stageId: string) => void
}

export type DragAreaType = {
    applications: JobApplicationCard[],
    updateApplicationState: (id: string, stageId: string) => void
}