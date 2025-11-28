/**
 * Flow Data Constants
 * Contains default flow configurations and mock API responses
 */

// Mock API response - simulates backend data structure
// In production, this would come from your actual API
export const fakeApiResponse = `{
  "sequence": ["Start", "Process", "Finish"]
}`;

// Default flow configuration
export const DEFAULT_FLOW_CONFIG = {
  nodeSpacing: 120,
  initialX: 300,
  initialY: 0,
};