import { NodeCard } from './NodeCard';
import componentsJson from '../../components_list.json'; // adjust path to your JSON file
import { useState } from 'react';

interface NodeLibraryProps {
  onAddNode: (nodeType: string) => void;
}

// Extract all components
const allComponents = [
  ...componentsJson.input_components,
  ...componentsJson.transformation_components,
  ...componentsJson.output_components,
];

export function NodeLibrary({ onAddNode }: NodeLibraryProps) {
  const [hoveredComponent, setHoveredComponent] = useState<any | null>(null);

  return (
    <div className="absolute left-[50px] top-[514px] w-[405px]">
      <div className="grid grid-cols-3 gap-[12px] relative">
        {allComponents.map((comp, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredComponent(comp)}
            onMouseLeave={() => setHoveredComponent(null)}
          >
            <NodeCard
              label={comp.name}
              onClick={() => onAddNode(comp.name)}
            />

            {/* Tooltip */}
            {hoveredComponent === comp && (
              <div className="absolute z-10 left-full ml-3 top-1/2 -translate-y-1/2 w-[220px] p-3 bg-white border border-gray-200 rounded-lg shadow-md text-sm text-gray-700">
                {comp.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
