import { useState, useCallback } from "react";
import { SideNavigation } from "./components/Navigation/SideNavigation";
import { PaEntry } from "./components/Chat/PaEntry";
import { TaskInput } from "./components/Flow/TaskInput";
import { FlowCanvas } from "./components/Flow/FlowCanvas";
import RunModal from "./components/Flow/RunModal";
import { NodeLibrary } from "./components/NodeLibrary";
import { submitFlowTask } from "./services/flowApi";
import { 
  Node, 
  Edge, 
  applyNodeChanges, 
  applyEdgeChanges, 
  NodeChange, 
  EdgeChange,
  addEdge,  // ✅ Add this import
  Connection  // ✅ Add this import
} from "@xyflow/react";

export default function Build() {
  const [taskDescription, setTaskDescription] = useState("");
  const [showNodeLibrary, setShowNodeLibrary] = useState(false);
  const [showRunModal, setShowRunModal] = useState(false);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  // Delete a node and any edges connected to it
  const handleDeleteNode = (id: string) => {
    setNodes((prev) => prev.filter((n) => n.id !== id));
    setEdges((prev) => prev.filter((e) => e.source !== id && e.target !== id));
  };

  // Proper React Flow change handlers
  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  // ✅ Fix: Use addEdge utility and useCallback
  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge(connection, eds));
    },
    []
  );

  // Convert current nodes/edges to API sequence format
  const buildSequenceFromFlow = () => {
    return nodes.map((node) => {
      const next = edges.filter((e) => e.source === node.id).map((e) => e.target);
      const prev = edges.filter((e) => e.target === node.id).map((e) => e.source);
      return { id: node.id, label: node.data.label, prev, next };
    });
  };

  const handleTaskSubmit = async () => {
    const payload = {
      user_prompt: taskDescription,
      sequence: buildSequenceFromFlow(),
    };

    try {
      const response = await submitFlowTask(payload);

      setTaskDescription("");
      setShowNodeLibrary(true);

      // Handle both wrapped and raw array responses
      let seq: any[] = [];
      if (Array.isArray(response)) {
        seq = response;
      } else if (Array.isArray(response.data?.sequence)) {
        seq = response.data.sequence;
      } else {
        seq = [];
      }

      if (seq.length === 0) return;

      // Map API sequence to React Flow nodes (ensure position exists)
      const newNodes: Node[] = seq.map((node, index) => ({
        id: node.id,
        type: "flowNode",
        data: { label: node.label, onDelete: (nid: string) => handleDeleteNode(nid) },
        position: node.position || { x: 100, y: index * 120 },
      }));

      // Map next connections to edges, only if target exists
      const nodeIds = newNodes.map((n) => n.id);
      const newEdges: Edge[] = [];
      seq.forEach((node) => {
        node.next?.forEach((nextId: string) => {
          if (nodeIds.includes(nextId)) {
            newEdges.push({
              id: `${node.id}-${nextId}`,
              source: node.id,
              target: nextId,
              animated: true,
            });
          }
        });
      });

      // Update state safely
      setNodes(newNodes);
      setEdges(newEdges);
    } catch (error) {
      console.error("Failed to submit task:", error);
    }
  };

  return (
    <div className="bg-white relative w-full h-screen overflow-hidden">
      <SideNavigation />

      <div className="absolute left-[134px] top-0 right-0 bottom-0 flex">
        {/* LEFT PANEL */}
        <div className="bg-white w-[486px] h-full border-r border-[#e7ebee] relative overflow-y-auto">
          <PaEntry />
          <div className="absolute left-[60px] top-[189px] w-[378px] text-black text-[14px]">
            I'm here to support you in completing your tasks…
          </div>

          <TaskInput
            value={taskDescription}
            onChange={setTaskDescription}
            onSubmit={handleTaskSubmit}
          />

          {showNodeLibrary && (
            <NodeLibrary
              onAddNode={(label: string) => {
                const id = `node-${nodes.length}`;
                const newNode: Node = {
                  id,
                  type: "flowNode",
                  data: { label, onDelete: (nid: string) => handleDeleteNode(nid) },
                  position: { x: 100, y: nodes.length * 120 },
                };
                setNodes((prev) => [...prev, newNode]);
              }}
            />
          )}
        </div>

        {/* RIGHT PANEL */}
        <FlowCanvas
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}  // ✅ Now using proper onConnect
          onRefresh={() => console.log("Refresh clicked")}
          onDone={() => {
            // Open the Run modal instead of logging
            setShowRunModal(true);
          }}
        />
        <RunModal
          open={showRunModal}
          onOpenChange={(open: boolean) => setShowRunModal(open)}
          onRun={(files: File[]) => {
            console.log("Run clicked with files:", files);
            // Add run logic here (upload/process files with current flow)
          }}
        />
      </div>
    </div>
  );
}