/**
 * Build Component - Main Application
 * Orchestrates the flow builder interface
 */

import { useState } from "react";
import { SideNavigation } from "./components/Navigation/SideNavigation";
import { PaEntry } from "./components/Chat/PaEntry";
import { TaskInput } from "./components/Flow/TaskInput";
import { FlowCanvas } from "./components/Flow/FlowCanvas";
import { NodeLibrary } from "./components/NodeLibrary";
import { useFlowManager } from "./hooks/useFlowManager";
import { submitFlowTask } from "./services/flowApi";

/**
 * Main Build Component
 * Coordinates all UI sections and handles user interactions
 */
export default function Build() {
  // Task description state
  const [taskDescription, setTaskDescription] = useState("");

  // Flow management hook - handles all React Flow logic
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    computeSequence,
    addNode,
  } = useFlowManager();

  /**
   * Handles task submission
   * Computes current flow sequence and sends to backend
   */
  const handleTaskSubmit = async () => {
    // Get current flow structure
    const sequence = computeSequence();

    // Prepare payload for API
    const payload = {
      user_prompt: taskDescription,
      sequence: sequence,
    };

    try {
      // Submit to backend
      await submitFlowTask(payload);

      // Clear textarea after successful submission
      setTaskDescription("");
    } catch (error) {
      console.error("Failed to submit task:", error);
      // TODO: Show error message to user
    }
  };

  /**
   * Handles "Done" button click
   * Logs the final flow JSON structure
   */
  const handleDone = () => {
    const sequence = computeSequence();
    const jsonOutput = JSON.stringify(sequence, null, 2);
    console.log("Flow JSON:", jsonOutput);
    
    // TODO: Add logic to save or export the flow
  };

  /**
   * Handles "Refresh" button click
   * Can be used to reload or reset the flow
   */
  const handleRefresh = () => {
    console.log("Refresh clicked");
    // TODO: Implement refresh logic
  };

  return (
    <div className="bg-white relative w-full h-screen overflow-hidden">
      {/* Left side navigation menu */}
      <SideNavigation />

      {/* Main content area */}
      <div className="absolute left-[134px] top-0 right-0 bottom-0 flex">
        
        {/* LEFT PANEL - Task input and node library */}
        <div className="bg-white w-[486px] h-full border-r border-[#e7ebee] relative overflow-y-auto">
          {/* Welcome message with avatar */}
          <PaEntry />

          {/* Instruction text */}
          <div className="absolute left-[60px] top-[189px] w-[378px] text-black text-[14px]">
            I'm here to support you in completing your tasks…
          </div>

          {/* Task description input with send button */}
          <TaskInput
            value={taskDescription}
            onChange={setTaskDescription}
            onSubmit={handleTaskSubmit}
          />

          {/* Node Library - allows adding nodes to the flow */}
          <NodeLibrary onAddNode={addNode} />
        </div>

        {/* RIGHT PANEL - React Flow Canvas */}
        <FlowCanvas
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onRefresh={handleRefresh}
          onDone={handleDone}
        />
      </div>
    </div>
  );
}