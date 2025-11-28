/**
 * Flow Canvas Component
 * React Flow diagram canvas with controls
 */

import React from "react"; // ← ADD THIS
import {
  ReactFlow,
  Background,
  Controls,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  NodeTypes,
  Handle,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { FileUploadNode } from "./FileUploadNode";

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
  // Register custom node type
  const nodeTypes: NodeTypes = { fileUpload: FileUploadNode };

  return (
    <div className="bg-[#f1f0f0] flex-1 relative">
      {/* Top action buttons */}
      <div className="absolute right-[40px] top-[51px] flex gap-[8px] z-10">
        {onRefresh && (
          <button
            onClick={onRefresh}
            className="border border-[#dc0078] text-[#dc0078] px-[20px] py-[8px] rounded-[9999px] hover:bg-[#dc0078] hover:text-white transition-colors"
          >
            Download File
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
          fitView
          nodeTypes={nodeTypes} // register custom nodes
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

/**
 * FileUploadNode component
 * A custom React Flow node with an internal file upload system
 */
export function FileUploadNode({ data }: { data: { label: string } }) {
  const [file, setFile] = React.useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      console.log(`File uploaded for node "${data.label}":`, e.target.files[0]);
    }
  };

  return (
    <div className="bg-white border border-gray-300 p-3 rounded-lg shadow-sm w-[200px]">
      <p className="text-sm font-medium text-gray-700 mb-2 center-text">{data.label}</p>

      <div className="border-2 border-dashed border-gray-400 rounded p-2 text-center text-xs text-gray-500">
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full cursor-pointer full-border"
        />
        {/* <p className="mt-1">{file ? file.name : "Drop a file here"}</p> */}
      </div>

      {/* Handles */}
      {/* <Handle type="target" position={Position.Top} /> */}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
