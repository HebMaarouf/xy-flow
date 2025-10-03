import type { Edge, Node } from "@xyflow/react";
import type { WorkflowNodeData } from "../types/work-flow-data";
import type { WorkflowNodeAPI } from "../types/work-flow-model";

export function buildWorkflowGraph(
  data: WorkflowNodeAPI,
  parentId: string | null = null
): { nodes: Node<WorkflowNodeData>[]; edges: Edge[] } {
  const nodes: Node<WorkflowNodeData>[] = [];
  const edges: Edge[] = [];

  nodes.push({
    id: data.id,
    type: "workflowNode",
    position: { x: 0, y: 0 },
    data: { ...data },
  });

  if (parentId) {
    edges.push({
      id: `${parentId}-${data.id}`,
      source: parentId,
      target: data.id,
      animated: true,
      label: "forwarded",
    });
  }

  if (data.children) {
    for (const child of data.children) {
      const { nodes: cNodes, edges: cEdges } = buildWorkflowGraph(child, data.id);
      nodes.push(...cNodes);
      edges.push(...cEdges);
    }
  }

  return { nodes, edges };
}