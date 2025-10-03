// App.tsx
import type { Connection, NodeTypes } from "@xyflow/react";
import {
  addEdge,
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { buildWorkflowGraph } from "./buildGraph";
import { getLayoutedElements } from "./dagreHelper";
import { workflowData } from "./data";
import { WorkflowNode } from "./node";


export default function XYFlowApp() {
  const { nodes: initialNodes, edges: initialEdges } = buildWorkflowGraph(workflowData);
  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(initialNodes, initialEdges);

  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  const nodeTypes: NodeTypes = { workflowNode: WorkflowNode };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={(params: Connection) => setEdges((eds) => addEdge(params, eds))}
        fitView
      >
        {/* Professional MiniMap */}
        <MiniMap
          nodeStrokeColor={(node) =>
            node.data.action === "Create"
              ? "#FF9800"
              : node.data.action === "Review"
                ? "#2196F3"
                : "#4CAF50"
          }
          nodeColor={(node) =>
            node.data.action === "Create"
              ? "#FFB74D"
              : node.data.action === "Review"
                ? "#64B5F6"
                : "#81C784"
          }
          maskColor="rgba(0,0,0,0.2)" // subtle dark mask so MiniMap nodes pop
        />
        <Controls />

        <Background gap={16} color="#f5f5f5" />
      </ReactFlow>
    </div>
  );
}
