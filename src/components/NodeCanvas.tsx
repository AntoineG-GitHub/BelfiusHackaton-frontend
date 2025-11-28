import { useState, useRef } from 'react';
import { CanvasNode } from './CanvasNode';

interface Node {
  id: string;
  type: string;
  x: number;
  y: number;
}

interface NodeCanvasProps {
  nodes: Node[];
  onNodeMove: (id: string, x: number, y: number) => void;
  onDeleteNode: (id: string) => void;
}

export function NodeCanvas({ nodes, onNodeMove, onDeleteNode }: NodeCanvasProps) {
  const [draggedNode, setDraggedNode] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent, nodeId: string) => {
    const node = nodes.find(n => n.id === nodeId);
    if (!node) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    setDraggedNode(nodeId);
    setDragOffset({
      x: e.clientX - rect.left - node.x,
      y: e.clientY - rect.top - node.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggedNode || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - dragOffset.x;
    const y = e.clientY - rect.top - dragOffset.y;

    onNodeMove(draggedNode, x, y);
  };

  const handleMouseUp = () => {
    setDraggedNode(null);
  };

  return (
    <div
      ref={canvasRef}
      className="absolute inset-0 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Connection Lines */}
      <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {nodes.map((node, index) => {
          if (index === 0) return null;
          const prevNode = nodes[index - 1];
          return (
            <line
              key={`line-${node.id}`}
              x1={prevNode.x + 58.5}
              y1={prevNode.y + 46}
              x2={node.x}
              y2={node.y + 46}
              stroke="#000000"
              strokeWidth="2"
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <CanvasNode
          key={node.id}
          id={node.id}
          label={node.type}
          x={node.x}
          y={node.y}
          onMouseDown={handleMouseDown}
          onDelete={() => onDeleteNode(node.id)}
        />
      ))}
    </div>
  );
}
