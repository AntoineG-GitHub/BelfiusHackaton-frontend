  import { useState, useCallback } from "react";
  import { SideNavigation } from "./components/Navigation/SideNavigation";
  import { PaEntry } from "./components/Chat/PaEntry";
  import { TaskInput } from "./components/Flow/TaskInput";
  import { FlowCanvas } from "./components/Flow/FlowCanvas";
  import { NodeLibrary } from "./components/NodeLibrary";
  import { submitFlowTask } from "./services/flowApi";
  import ResponseModal from "./components/Flow/ResponseModal";
  import { 
    Node, 
    Edge, 
    applyNodeChanges, 
    applyEdgeChanges, 
    NodeChange, 
    EdgeChange,
    addEdge,
    Connection
  } from "@xyflow/react";

  export default function Build() {
    const [taskDescription, setTaskDescription] = useState("");
    const [showNodeLibrary, setShowNodeLibrary] = useState(false);
    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);
    const [nodeFiles, setNodeFiles] = useState<{ [nodeId: string]: File }>({});
    const [runResponse, setRunResponse] = useState<any>(null);
    const [showResponseModal, setShowResponseModal] = useState(false);

    const onNodesChange = useCallback(
      (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
      []
    );

    const onEdgesChange = useCallback(
      (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
      []
    );

    const onConnect = useCallback(
      (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
      []
    );

    const buildSequenceFromFlow = () => {
      const components = nodes.map((node) => {
        const prevNodes = edges
          .filter((e) => e.target === node.id)
          .map((e) => e.source);

        return {
          node_id: node.id,
          component_name: node.data.label || "Node",
          description: node.data.description || "",
          params: node.data.params || {},
          input_ids: prevNodes.length === 0 ? null : prevNodes.length === 1 ? prevNodes[0] : prevNodes,
        };
      });

      return { components };
    };

    const handleTaskSubmit = async () => {
      const payload = {
        content_b64: btoa(taskDescription),
        flow: buildSequenceFromFlow(),
      };

      try {
        const response = await submitFlowTask(payload);
        setTaskDescription("");
        setShowNodeLibrary(true);

        const seq: any[] = Array.isArray(response.components) ? response.components : [];
        if (!seq.length) return console.warn("No components received from API");

        const newNodes: Node[] = seq.map((comp, index) => {
          const type = comp.component_name.toLowerCase().includes("input") ? "fileUpload" : "default";
          return {
            id: String(comp.node_id),
            type,
            data: { 
              label: comp.component_name,
              description: comp.description,
              params: comp.params,
              file: nodeFiles[String(comp.node_id)] || null,
              setFile: (file: File) =>
                setNodeFiles((prev) => ({ ...prev, [comp.node_id]: file }))
            },
            position: { x: 100, y: index * 120 },
          };
        });

        const nodeIds = newNodes.map((n) => n.id);
        const newEdges: Edge[] = [];
        seq.forEach((comp) => {
          if (!comp.input_ids) return;
          const inputs = Array.isArray(comp.input_ids) ? comp.input_ids : [comp.input_ids];
          inputs.forEach((inputId: string) => {
            if (nodeIds.includes(String(inputId))) {
              newEdges.push({ id: `${inputId}-${comp.node_id}`, source: String(inputId), target: String(comp.node_id), animated: false });
            }
          });
        });

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
          <div className="bg-white w-[486px] h-full border-r border-[#e7ebee] relative overflow-y-auto">
            <PaEntry />
            <div className="absolute left-[60px] top-[189px] w-[378px] text-black text-[14px]">
              I'm here to support you in completing your tasks…
            </div>

            <TaskInput value={taskDescription} onChange={setTaskDescription} onSubmit={handleTaskSubmit} />

            {showNodeLibrary && (
              <NodeLibrary
                onAddNode={(label: string) => {
                  const type = label.toLowerCase().includes("input") ? "fileUpload" : "default";
                  const newNode: Node = {
                    id: `node-${nodes.length}`,
                    type,
                    data: { label, file: null, setFile: (file: File) => setNodeFiles(prev => ({ ...prev, [`node-${nodes.length}`]: file })) },
                    position: { x: 100, y: nodes.length * 120 },
                  };
                  setNodes(prev => [...prev, newNode]);
                }}
              />
            )}
          </div>

          <FlowCanvas
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onRefresh={() => {
              const fileData = JSON.stringify({ nodes, edges }, null, 2);
              const blob = new Blob([fileData], { type: "application/json" });
              const url = URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.href = url;
              link.download = "flow-data.json";
              link.click();
              URL.revokeObjectURL(url);
            }}
            onDone={async () => {
              const sequence = buildSequenceFromFlow();
              console.log("Recomposed Flow Sequence:", sequence);

              try {
                const fileResponse = await fetch("../test.jpeg");
                const fileBuffer = await fileResponse.arrayBuffer();
                const uint8Array = new Uint8Array(fileBuffer);
                function bufferToBase64(buffer: ArrayBuffer) {
                  let binary = '';
                  const bytes = new Uint8Array(buffer);
                  const len = bytes.length;

                  for (let i = 0; i < len; i++) {
                    binary += String.fromCharCode(bytes[i]);
                  }

                  return btoa(binary);
                }

                const base64Data = bufferToBase64(fileBuffer);
                const firstNodeId = nodes.length > 0 ? nodes[0].id : "default_node";

                const payload = {
                  approved_by_user: true,
                  updated_sequence: sequence,
                  docs_to_use: [{ node_id: firstNodeId, data: base64Data }],
                };

                const res = await fetch("http://127.0.0.1:8000/api/run_flow", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(payload),
                });

                const data = await res.json();
                console.log("Second API response:", data);

                setRunResponse(data);
                setShowResponseModal(true);
              } catch (err) {
                console.error("Error calling second API:", err);
              }
            }}
          />

          {/* Response Modal */}
          {showResponseModal && <ResponseModal data={runResponse} onClose={() => setShowResponseModal(false)} />}
        </div>
      </div>
    );
  }
