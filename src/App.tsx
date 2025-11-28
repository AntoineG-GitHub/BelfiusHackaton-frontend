import { useState } from 'react';
import svgPaths from "./imports/svg-amvb8qcw3b";
import imgHiBelfiusLottieClose1 from "figma:asset/5ab5c2c91eb64ad8ad7c3d11891d48f6031ac882.png";
import { NodeCanvas } from "./components/NodeCanvas";
import { NodeLibrary } from "./components/NodeLibrary";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path d={svgPaths.p6b89100} fill="var(--fill-0, #DC0078)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavigationItemLeft() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center justify-center min-w-[48px] p-[8px] relative rounded-[9999px] shrink-0" data-name="navigation.itemLeft">
      <Icon />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <NavigationItemLeft />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path d={svgPaths.p399d5400} fill="var(--fill-0, #060809)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavigationItemLeft1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[28px] items-center justify-center min-w-[48px] p-[8px] relative rounded-[9999px] shrink-0" data-name="navigation.itemLeft">
      <Icon1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <NavigationItemLeft1 />
      <p className="font-['Belfius21:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#101416] text-[14px] text-nowrap whitespace-pre">New flow</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path d={svgPaths.p19a51e00} fill="var(--fill-0, #060809)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavigationItemLeft2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center justify-center mb-[-10px] min-w-[48px] p-[8px] relative rounded-[9999px] shrink-0" data-name="navigation.itemLeft">
      <Icon2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pb-[10px] pt-0 px-0 relative shrink-0 w-full">
      <NavigationItemLeft2 />
      <p className="font-['Belfius21:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#101416] text-[14px] text-nowrap whitespace-pre">My flows</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path d={svgPaths.p1b4b4080} fill="var(--fill-0, #060809)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavigationItemLeft3() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center justify-center mb-[-10px] min-w-[48px] p-[8px] relative rounded-[9999px] shrink-0" data-name="navigation.itemLeft">
      <Icon3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pb-[10px] pt-0 px-0 relative shrink-0 w-full">
      <NavigationItemLeft3 />
      <p className="font-['Belfius21:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#101416] text-[14px] text-nowrap whitespace-pre">Flows library</p>
    </div>
  );
}

function MainNavigation() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Main navigation">
      <Frame3 />
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Segments() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[110px]" data-name="Segments">
      <MainNavigation />
    </div>
  );
}

function SideNavigation() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-full items-start left-0 min-h-[178px] px-[12px] py-[35px] top-0 z-10" data-name="Side navigation">
      <div aria-hidden="true" className="absolute border-[#e7ebee] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Segments />
    </div>
  );
}

function ChatAvatar() {
  return (
    <div className="content-stretch flex items-start relative rounded-[9999px] shrink-0 size-[56px]" data-name="Chat Avatar">
      <div className="relative shrink-0 size-[56px]" data-name="HI belfius LOTTIE - CLOSE+ 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHiBelfiusLottieClose1} />
      </div>
    </div>
  );
}

function PaEntry() {
  return (
    <div className="absolute bg-white content-stretch flex items-center gap-[15px] left-[170px] top-[35px] w-[364px] h-[112px]" data-name="PA entry">
      <ChatAvatar />
      <div className="flex-1 flex items-center font-['Belfius21:Regular',sans-serif] h-full not-italic text-[36px] text-black">
        <p className="m-0 leading-[44px]">Let's create and make it happen</p>
      </div>
    </div>
  );
}

// Fake JSON response (replace with real API call later)
const fakeApiResponse = `{
  "sequence": ["node1", "node2", "node3"]
}`;

export default function Build() {
  const [canvasNodes, setCanvasNodes] = useState<Array<{ id: string; type: string; x: number; y: number }>>(
    JSON.parse(fakeApiResponse).sequence.map((type: string, index: number) => ({
      id: (index + 1).toString(),
      type,
      x: 700 + index * 100, // Adjust x position to avoid overlap
      y: 300 + Math.random() * 200
    }))
  );

  const [taskDescription, setTaskDescription] = useState('');

  const handleAddNode = (nodeType: string) => {
    const newNode = {
      id: Date.now().toString(),
      type: nodeType,
      x: 700 + Math.random() * 300,
      y: 300 + Math.random() * 200
    };
    setCanvasNodes([...canvasNodes, newNode]);
  };

  const handleNodeMove = (id: string, x: number, y: number) => {
    setCanvasNodes(canvasNodes.map(node => 
      node.id === id ? { ...node, x, y } : node
    ));
  };

  const handleDeleteNode = (id: string) => {
    setCanvasNodes(canvasNodes.filter(node => node.id !== id));
  };

  return (
    <div className="bg-white relative w-full h-screen overflow-hidden" data-name="build">
      <SideNavigation />
      
      {/* Main Content Area */}
      <div className="absolute left-[134px] top-0 right-0 bottom-0 flex">
        {/* Left Panel - Node Library */}
        <div className="bg-white w-[486px] h-full overflow-y-auto border-r border-[#e7ebee]">
          <PaEntry />
          
          <div className="absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[76px] justify-center leading-[0] left-[60px] not-italic text-[14px] text-black top-[189px] tracking-[0.25px] translate-y-[-50%] w-[378px]">
            <p className="leading-[20px]">{`I'm here to support you in completing your tasks and ideas. Simply use the input or drag & drop to get started.`}</p>
          </div>

          {/* Task Description Input */}
          <div className="absolute left-[60px] top-[250px] w-[363px]">
            <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[144px] items-start max-h-[144px] min-h-[92px] px-0 py-[12px] relative rounded-[24px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute border border-[#d6dce2] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.04),4px_4px_8px_0px_rgba(0,0,0,0.02),2px_2px_2px_0px_rgba(0,0,0,0.04)]" />
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Describe your task."
                className="w-full h-full px-[16px] py-[2px] bg-transparent resize-none outline-none font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#41525d] text-[14px] tracking-[0.25px]"
              />
            </div>
          </div>

          {/* Tab Labels */}
          <div className="absolute flex gap-[68px] left-[60px] top-[435px] translate-y-[-50%]">
            <div className="flex flex-col font-['Belfius21:Bold',sans-serif] justify-center">
              <p className="leading-[20px] text-[16px]">Actions</p>
            </div>
          </div>

          {/* Divider Line */}
          <div className="absolute left-[60px] top-[450px] w-[361px] h-[1px] bg-black" />
          <div className="absolute left-[120px] top-[452px] w-[79px] h-[3px] bg-black" />

          {/* Node Library */}
          <NodeLibrary onAddNode={handleAddNode} />
        </div>

        {/* Right Panel - Canvas */}
        <div className="bg-[#f1f0f0] flex-1 relative">
          {/* Top Buttons */}
          <div className="absolute right-[40px] top-[51px] flex gap-[8px]">
            <button className="bg-[rgba(255,255,255,0)] box-border px-[20px] py-[8px] rounded-[9999px] border border-[#dc0078]">
              <p className="font-['Belfius21:Bold',sans-serif] leading-[20px] text-[#dc0078] text-[16px] whitespace-pre">Refresh</p>
            </button>
            <button className="bg-[#dc0078] px-[20px] py-[8px] rounded-[9999px]">
              <p className="font-['Belfius21:Bold',sans-serif] leading-[20px] text-white text-[16px] whitespace-pre">Done</p>
            </button>
          </div>

          {/* Canvas Area */}
          <NodeCanvas 
            nodes={canvasNodes} 
            onNodeMove={handleNodeMove}
            onDeleteNode={handleDeleteNode}
          />
        </div>
      </div>
    </div>
  );
}
