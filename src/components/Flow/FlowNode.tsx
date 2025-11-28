import React from 'react';
import { X } from 'lucide-react';
import { Handle, Position } from '@xyflow/react';

interface FlowNodeProps {
  id: string;
  data: {
    label: string;
    onDelete?: (id?: string) => void;
  };
}

export default function FlowNode({ id, data }: FlowNodeProps) {
  return (
    <div className="relative cursor-default group" style={{ minWidth: 120 }}>
      {/* Left target handle (vertically centered) */}
      <Handle
        type="target"
        position={Position.Left}
        style={{ top: '50%', transform: 'translateY(-50%)', width: 10, height: 10 }}
      />

      <div className="bg-white box-border flex flex-col gap-2 items-start justify-center px-4 py-3 rounded-lg shadow-sm border border-gray-200">
        <div className="text-sm text-[#41525d]">{data.label}</div>
      </div>

      {/* Right source handle (vertically centered) */}
      <Handle
        type="source"
        position={Position.Right}
        style={{ top: '50%', transform: 'translateY(-50%)', width: 10, height: 10 }}
      />

      {/* Delete button */}
      <button
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          data.onDelete && data.onDelete(id);
        }}
        onMouseDown={(e: React.MouseEvent) => e.stopPropagation()}
        className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity z-10"
        aria-label="Delete node"
      >
        <X size={14} />
      </button>
    </div>
  );
}
