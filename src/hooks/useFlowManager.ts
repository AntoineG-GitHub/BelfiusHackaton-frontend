/**
 * Flow Manager Hook
 * Manages all React Flow state and operations
 */

import { useState, useCallback, useEffect } from "react";
import {
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
} from "@xyflow/react";
import { fakeApiResponse, DEFAULT_FLOW_CONFIG } from "../constants/flowData";
import { FlowNode } from "../services/flowApi";

export const useFlowManager = () => {
  // State for nodes and edges in the flow diagram
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  /**
   * Handle node changes (position, selection, etc.)
   */
  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  /**
   * Handle edge changes (connection updates, deletions, etc.)
   */
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  /**
   * Handle new connections between nodes
   */
  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  /**
   * Computes the flow sequence by analyzing nodes and edges
   * Creates a graph structure with prev/next relationships
   * @returns Array of flow nodes with their connections
   */
  const computeSequence = useCallback((): FlowNode[] => {
    // Step 1: Create a map from node IDs to node objects
    const nodeMap: Record<string, FlowNode> = {};

    nodes.forEach((node) => {
      nodeMap[node.id] = {
        id: node.id,
        label: node.data.label,
        prev: [],
        next: [],
      };
    });

    // Step 2: Loop through edges to populate prev and next arrays
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
  }, [nodes, edges]);

  /**
   * Creates a flow diagram from a sequence of labels
   * Positions nodes vertically with automatic spacing
   * @param sequence - Array of node labels
   */
  const createFlowFromSequence = useCallback((sequence: string[]) => {
    const { nodeSpacing, initialX, initialY } = DEFAULT_FLOW_CONFIG;

    // Create nodes with vertical positioning
    const newNodes = sequence.map((label, i) => ({
      id: `node-${i}`,
      position: { x: initialX, y: initialY + i * nodeSpacing },
      data: { label },
    }));

    // Create edges connecting sequential nodes
    const newEdges = sequence.slice(1).map((_, i) => ({
      id: `edge-${i}`,
      source: `node-${i}`,
      target: `node-${i + 1}`,
    }));

    setNodes(newNodes);
    setEdges(newEdges);
  }, []);

  /**
   * Adds a new node to the flow diagram
   * Positions it randomly in a designated area
   * @param nodeType - The label/type of the node to add
   */
  const addNode = useCallback((nodeType: string) => {
    const id = `node-${Date.now()}`;

    const newNode = {
      id,
      position: {
        x: 600 + Math.random() * 200,
        y: 200 + Math.random() * 200,
      },
      data: { label: nodeType },
    };

    setNodes((prev) => [...prev, newNode]);
  }, []);

  /**
   * Initialize flow on mount with fake API data
   * In production, this would fetch from your actual backend
   */
  useEffect(() => {
    try {
      const json = JSON.parse(fakeApiResponse);
      createFlowFromSequence(json.sequence);
    } catch (err) {
      console.error("Invalid fake API JSON");
    }
  }, [createFlowFromSequence]);

  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    computeSequence,
    addNode,
  };
};