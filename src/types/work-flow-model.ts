import type { WorkflowAction } from "./work-flow-data";

export interface WorkflowNodeAPI {
  id: string;
  name: string;
  avatar?: string;
  action: WorkflowAction;
  status: string;
  date: string;
  children?: WorkflowNodeAPI[];
}