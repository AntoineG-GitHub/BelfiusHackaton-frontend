import { NodeCard } from './NodeCard';
import componentsJson from '../../components_list.json'; // adjust path to your JSON file
import { useState } from 'react';

interface NodeLibraryProps {
  onAddNode: (nodeType: string) => void;
}

// Extract all component names from the JSON
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
              <div className="absolute z-10 left-full ml-2 top-0 w-[220px] p-2 bg-white border border-gray-300 rounded shadow-lg text-sm">
                <div className="font-semibold mb-1">{comp.name}</div>
                <div className="text-gray-600 mb-1">{comp.description}</div>
                <div className="text-xs font-semibold">Inputs:</div>
                <ul className="text-xs mb-1">
                  {comp.inputs?.properties
                    ? Object.keys(comp.inputs.properties).map((input) => (
                        <li key={input}>{input}</li>
                      ))
                    : <li>None</li>}
                </ul>
                <div className="text-xs font-semibold">Outputs:</div>
                <ul className="text-xs">
                  {comp.outputs?.properties
                    ? Object.keys(comp.outputs.properties).map((output) => (
                        <li key={output}>{output}</li>
                      ))
                    : <li>None</li>}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
