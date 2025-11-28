import { NodeCard } from './NodeCard';
interface NodeLibraryProps {
  onAddNode: (nodeType: string) => void;
}

// Fake JSON response (replace with real API call later)
const fakeApiResponse = `{
  "nodeTypes": ["Summarize", "Export", "Name", "Summarize", "Translate", "Name", "Summarize", "Translate"]
}`;

const { nodeTypes } = JSON.parse(fakeApiResponse) as { nodeTypes: string[] };

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
