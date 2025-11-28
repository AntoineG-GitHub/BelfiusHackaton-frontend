/**
 * Flow API Service
 * Handles all API communication for flow operations
 */

// Type definition for the flow node structure sent to backend
export interface FlowNode {
  id: string;
  label: string;
  prev: string[];
  next: string[];
}

// Payload structure sent to the backend
export interface FlowPayload {
  user_prompt: string;
  sequence: FlowNode[];
}

// API response structure (adjust based on your actual API)
export interface FlowApiResponse {
  success: boolean;
  data?: any;
  message?: string;
}

/**
 * Submits a flow task to the backend
 * @param payload - Contains user prompt and flow sequence
 * @returns Promise with API response
 */
export const submitFlowTask = async (
  payload: FlowPayload
): Promise<FlowApiResponse> => {
  try {
    console.log("Sending JSON to backend:", payload);

    const response = await fetch("https://example.com/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("API response:", data);

    return data;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
};