import { NodeCard } from './NodeCard';
import componentsJson from '../../components_list.json'; // adjust path to your JSON file
interface NodeLibraryProps {
  onAddNode: (nodeType: string) => void;
}

// Extract all component names from the JSON
const allComponents = [
  ...componentsJson.input_components,
  ...componentsJson.transformation_components,
  ...componentsJson.output_components,
];

const nodeTypes = allComponents.map((comp: any) => comp.name);

export function NodeLibrary({ onAddNode }: NodeLibraryProps) {
  return (
    <div className="absolute left-[50px] top-[514px] w-[405px]">
      <div className="grid grid-cols-3 gap-[12px]">
        {nodeTypes.map((nodeType, index) => (
          <NodeCard
            key={index}
            label={nodeType}
            onClick={() => onAddNode(nodeType)}
          />
        ))}
      </div>
    </div>
  );
}
