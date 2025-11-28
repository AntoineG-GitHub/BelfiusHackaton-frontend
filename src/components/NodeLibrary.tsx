import React, { useState } from "react";
import { NodeCard } from "./NodeCard";
import componentsJson from "../../components_list.json";

interface NodeLibraryProps {
  onAddNode: (nodeType: string) => void;
}

const allComponents = [
  ...componentsJson.input_components.map((c: any) => ({ ...c, kind: "input" })),
  ...componentsJson.transformation_components.map((c: any) => ({ ...c, kind: "transform" })),
  ...componentsJson.output_components.map((c: any) => ({ ...c, kind: "output" })),
];

export function NodeLibrary({ onAddNode }: NodeLibraryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="absolute left-[50px] top-[514px] w-[405px]">
      {/* increased gap for more breathing room */}
      <div className="grid grid-cols-3 gap-4">
        {allComponents.map((comp: any, idx: number) => (
          // small padding around each grid cell so the red glow doesn't visually touch adjacent cards
          <div
            key={`${comp.name}-${idx}`}
            className="relative p-1"
            //onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <NodeCard
              label={comp.name}
              onClick={() => onAddNode(comp.name)}
              variant={comp.kind}
              isOutlined={hoveredIndex === idx}
            />

            {hoveredIndex === idx && (
              <div
                role="tooltip"
                className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 z-20 w-[240px] rounded-lg bg-white border border-gray-200 shadow-md text-sm text-gray-700 p-3"
              >
                <div className="relative">
                  <div
                    className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-l border-t border-gray-200 rotate-45"
                    style={{ boxShadow: "0 1px 1px rgba(0,0,0,0.03)" }}
                  />
                  <div className="font-semibold text-gray-800 mb-1 truncate">{comp.name}</div>
                  <div className="text-xs text-gray-600 leading-tight">{comp.description}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
