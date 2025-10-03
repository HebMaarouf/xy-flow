export type WorkflowAction = "Create" | "Review" | "Approve";

export interface WorkflowNodeData extends Record<string, unknown> {
  id: string;
  name: string;
  avatar?: string;
  action: WorkflowAction;
  status: string;
  date: string;
}