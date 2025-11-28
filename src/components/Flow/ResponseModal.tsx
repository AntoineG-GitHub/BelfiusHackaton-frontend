import React from "react";

interface ResponseModalProps {
  data: any;
  onClose: () => void;
}

export default function ResponseModal({ data, onClose }: ResponseModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-outer">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-lg relative modal-inner">
        
        {/* Close cross button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl modal-button"
        >
          ×
        </button>

        <h2 className="text-lg font-bold mb-4">Flow API Response</h2>
        <pre className="text-sm max-h-96 overflow-auto modal-text">
          {(() => {
            try {
              const parsed = typeof data === "string" ? JSON.parse(data) : data;
              return String(parsed?.output ?? JSON.stringify(parsed, null, 2));
            } catch {
              return String(data);
            }
          })()}
        </pre>

        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
