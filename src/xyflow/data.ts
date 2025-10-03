import type { WorkflowNodeAPI } from "../types/work-flow-model";

export const workflowData: WorkflowNodeAPI = {
  id: "1",
  name: "Alice Johnson",
  avatar: "https://i.pravatar.cc/100?img=5",
  action: "Create",
  status: "Document created",
  date: "2025-10-03",
  children: [
    {
      id: "2",
      name: "Bob Smith",
      avatar: "https://i.pravatar.cc/100?img=6",
      action: "Review",
      status: "Reviewed with comments",
      date: "2025-10-04",
      children: [
        {
          id: "3",
          name: "Charlie Davis",
          avatar: "https://i.pravatar.cc/100?img=7",
          action: "Approve",
          status: "Approved",
          date: "2025-10-05",
        },
        {
          id: "4",
          name: "Dana Lee",
          avatar: "https://i.pravatar.cc/100?img=8",
          action: "Approve",
          status: "Final approval granted",
          date: "2025-10-05",
        },
      ],
    },
  ],
};