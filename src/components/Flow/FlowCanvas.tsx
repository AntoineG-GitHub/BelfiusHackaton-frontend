/**
 * Flow Canvas Component
 * React Flow diagram canvas with controls
 */

import {
  ReactFlow,
  Background,
  Controls,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
} from "@xyflow/react";
import FlowNode from './FlowNode';
import "@xyflow/react/dist/style.css";

interface FlowCanvasProps {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  onRefresh?: () => void;
  onDone: () => void;
}

/**
 * Flow Canvas Component
 * Renders the React Flow diagram with interactive controls
 * @param nodes - Array of flow nodes
 * @param edges - Array of connections between nodes
 * @param onNodesChange - Callback for node changes
 * @param onEdgesChange - Callback for edge changes
 * @param onConnect - Callback for new connections
 * @param onRefresh - Optional callback for refresh button
 * @param onDone - Callback for done button
 */
export function FlowCanvas({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  onRefresh,
  onDone,
}: FlowCanvasProps) {
  return (
    <div className="bg-[#f1f0f0] flex-1 relative">
      {/* Top action buttons */}
      <div className="absolute right-[40px] top-[51px] flex gap-[8px] z-10">
        {onRefresh && (
          <button
            onClick={onRefresh}
            className="border border-[#dc0078] text-[#dc0078] px-[20px] py-[8px] rounded-[9999px] hover:bg-[#dc0078] hover:text-white transition-colors"
          >
            Refresh
          </button>
        )}
        <button
          onClick={onDone}
          className="bg-[#dc0078] text-white px-[20px] py-[8px] rounded-[9999px] hover:bg-[#c00068] transition-colors"
        >
          Done
        </button>
      </div>

      {/* React Flow Canvas */}
      <div className="w-full h-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={{ flowNode: FlowNode }}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}