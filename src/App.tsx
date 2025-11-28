import svgPaths from "./imports/svg-amvb8qcw3b";
import imgHiBelfiusLottieClose1 from "figma:asset/5ab5c2c91eb64ad8ad7c3d11891d48f6031ac882.png";

import { NodeLibrary } from "./components/NodeLibrary";

import { useState, useCallback, useEffect } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

/* ----------------------
   Icons + Navigation UI
-----------------------*/

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" viewBox="0 0 24 24">
        <path d={svgPaths.p6b89100} fill="#DC0078" />
      </svg>
    </div>
  );
}
function NavigationItemLeft() {
  return (
    <div className="box-border flex gap-[4px] h-[48px] items-center justify-center min-w-[48px] p-[8px] rounded-[9999px]">
      <Icon />
    </div>
  );
}
function Frame3() {
  return (
    <div className="flex items-start justify-between w-full">
      <NavigationItemLeft />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" viewBox="0 0 24 24">
        <path d={svgPaths.p399d5400} fill="#060809" />
      </svg>
    </div>
  );
}
function NavigationItemLeft1() {
  return (
    <div className="box-border flex gap-[4px] h-[28px] items-center justify-center min-w-[48px] p-[8px] rounded-[9999px]">
      <Icon1 />
    </div>
  );
}
function Frame() {
  return (
    <div className="flex flex-col items-center w-full">
      <NavigationItemLeft1 />
      <p className="font-['Belfius21:Bold'] text-[14px] text-[#101416]">New flow</p>
    </div>
  );
}

function Icon2() {
  return (
    <svg className="block size-full" viewBox="0 0 24 24">
      <path d={svgPaths.p19a51e00} fill="#060809" />
    </svg>
  );
}
function NavigationItemLeft2() {
  return (
    <div className="box-border flex gap-[4px] h-[48px] items-center justify-center min-w-[48px] p-[8px] rounded-[9999px] mb-[-10px]">
      <Icon2 />
    </div>
  );
}
function Frame1() {
  return (
    <div className="box-border flex flex-col items-center pb-[10px] w-full">
      <NavigationItemLeft2 />
      <p className="font-['Belfius21:Bold'] text-[14px] text-[#101416]">My flows</p>
    </div>
  );
}

function Icon3() {
  return (
    <svg className="block size-full" viewBox="0 0 24 24">
      <path d={svgPaths.p1b4b4080} fill="#060809" />
    </svg>
  );
}
function NavigationItemLeft3() {
  return (
    <div className="box-border flex gap-[4px] h-[48px] items-center justify-center min-w-[48px] p-[8px] rounded-[9999px] mb-[-10px]">
      <Icon3 />
    </div>
  );
}
function Frame2() {
  return (
    <div className="box-border flex flex-col items-center pb-[10px] w-full">
      <NavigationItemLeft3 />
      <p className="font-['Belfius21:Bold'] text-[14px] text-[#101416]">
        Flows library
      </p>
    </div>
  );
}

function MainNavigation() {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <Frame3 />
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}
function Segments() {
  return (
    <div className="flex flex-col gap-[12px] w-[110px]">
      <MainNavigation />
    </div>
  );
}
function SideNavigation() {
  return (
    <div className="absolute bg-white flex flex-col h-full px-[12px] py-[35px] border-r border-[#e7ebee]">
      <Segments />
    </div>
  );
}

function ChatAvatar() {
  return (
    <div className="flex rounded-full size-[56px]">
      <img src={imgHiBelfiusLottieClose1} className="size-full object-cover" />
    </div>
  );
}

function PaEntry() {
  return (
    <div className="absolute bg-white flex items-center gap-[15px] left-[170px] top-[35px] w-[364px] h-[112px]">
      <ChatAvatar />
      <div className="flex-1 text-[36px] font-['Belfius21:Regular'] leading-[44px]">
        Let{"'"}s create and make it happen
      </div>
    </div>
  );
}

/* ----------------------
   Fake API JSON → generates flow
-----------------------*/

const fakeApiResponse = `{
  "sequence": ["Start", "Process", "Finish"]
}`;

/* ----------------------
   React Flow Setup
-----------------------*/

export default function Build() {
  const [taskDescription, setTaskDescription] = useState("");

  const [nodes, setNodes] = useState<any[]>([]);
  const [edges, setEdges] = useState<any[]>([]);

  // ReactFlow callbacks
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const computeSequence = () => {
  // Step 1: Create a map from node IDs to node objects
  const nodeMap: Record<string, { id: string; label: string; prev: string[]; next: string[] }> = {};

  nodes.forEach((node) => {
    nodeMap[node.id] = {
      id: node.id,
      label: node.data.label,
      prev: [],
      next: [],
    };
  });

  // Step 2: Loop through edges to populate prev and next
  edges.forEach((edge) => {
    const { source, target } = edge;

    if (nodeMap[source] && nodeMap[target]) {
      // source node points to target
      nodeMap[source].next.push(target);
      // target node comes after source
      nodeMap[target].prev.push(source);
    }
  });

  // Step 3: Return as array
  return Object.values(nodeMap);
};

  const handleSubmit = () => {
    const sequence = computeSequence();
    const jsonOutput = JSON.stringify(sequence, null, 2);
  console.log("Flow JSON:", jsonOutput);
  };

  /* ----------------------
     Generate flow from fake API
  -----------------------*/
  const createFlowFromSequence = (sequence: string[]) => {
    const newNodes = sequence.map((label, i) => ({
      id: `node-${i}`,
      position: { x: 300, y: i * 120 },
      data: { label },
    }));

    const newEdges = sequence.slice(1).map((_, i) => ({
      id: `edge-${i}`,
      source: `node-${i}`,
      target: `node-${i + 1}`,
    }));

    setNodes(newNodes);
    setEdges(newEdges);
  };

  useEffect(() => {
    try {
      const json = JSON.parse(fakeApiResponse);
      createFlowFromSequence(json.sequence);
    } catch (err) {
      console.error("Invalid fake API JSON");
    }
  }, []);

  /* ----------------------
     Add node from NodeLibrary
  -----------------------*/
  const handleAddNode = (nodeType: string) => {
    const id = `node-${Date.now()}`;

    const newNode = {
      id,
      position: { x: 600 + Math.random() * 200, y: 200 + Math.random() * 200 },
      data: { label: nodeType },
    };

    setNodes((prev) => [...prev, newNode]);
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

          {/* Task input */}
          {/* Task input + Send button */}
          <div className="absolute left-[60px] top-[250px] w-[363px] flex items-start gap-[8px]">
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Describe your task."
              className="flex-1 bg-white border border-[#d6dce2] rounded-[24px] p-[16px] text-[14px]"
            />
            <button
              onClick={() => {
                // Prepare JSON payload
                const payload = {
                  description: taskDescription,
                  timestamp: new Date().toISOString(),
                };

                console.log("Sending JSON to backend:", payload);

                // Simulate API call
                fetch("https://example.com/api/tasks", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(payload),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log("API response:", data);
                  })
                  .catch((err) => console.error("API error:", err));
              }}
              className="bg-[#dc0078] text-white px-[16px] py-[12px] rounded-[24px]"
            >
              Send
            </button>
          </div>


          {/* Node Library */}
          <NodeLibrary onAddNode={handleAddNode} />
        </div>

        {/* RIGHT PANEL – React Flow Canvas */}
        <div className="bg-[#f1f0f0] flex-1 relative">
          {/* Top buttons */}
          <div className="absolute right-[40px] top-[51px] flex gap-[8px] z-10">
            <button className="border border-[#dc0078] text-[#dc0078] px-[20px] py-[8px] rounded-[9999px]">
              Refresh
            </button>
            <button className="bg-[#dc0078] text-white px-[20px] py-[8px] rounded-[9999px]" onClick={handleSubmit}>
              Done
            </button>
          </div>

          <div className="w-full h-full">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              fitView
            >
              <Background />
              <Controls />
            </ReactFlow>
          </div>
        </div>
      </div>
    </div>
  );
}
