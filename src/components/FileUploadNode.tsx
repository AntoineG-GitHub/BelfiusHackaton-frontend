import { Handle, Position } from "@xyflow/react";
import React from "react"; // ← ADD THIS

interface FileUploadNodeProps {
  data: {
    label: string;
    file: File | null;
    dataId: string;
    setFile: (file: File) => void;
  };
}

export function FileUploadNode({ data }: FileUploadNodeProps) {
   const [file, setFile] = React.useState<File | null>(null);
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      data.setFile(e.target.files[0]);
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      console.log(`File uploaded for node "${data.label}":`, e.target.files[0]);

      try {
        // Read the file as an ArrayBuffer and convert to base64 (browser-friendly)
        const arrayBuffer = await selectedFile.arrayBuffer();
        const bytes = new Uint8Array(arrayBuffer);

        // Convert Uint8Array to binary string in chunks to avoid call-stack/arg limits
        let binary = "";
        const chunkSize = 0x8000;
        for (let i = 0; i < bytes.length; i += chunkSize) {
          const chunk = bytes.subarray(i, i + chunkSize);
          binary += String.fromCharCode.apply(null, Array.prototype.slice.call(chunk));
        }

        const content_b64 = btoa(binary);
        console.log(`File content (base64) for node "${data.label}":`, data.dataId, content_b64);

        // Save the base64 string in sessionStorage
        sessionStorage.setItem(`${data.dataId}`, content_b64);
        console.log(`File content saved in sessionStorage for node "${data.label}"`);
      } catch (err) {
        console.error("Failed to read file content:", err);
      }
    }
  };

  return (
    <div className="bg-white border border-gray-300 p-3 rounded-lg shadow-sm w-[200px]">
      <p className="text-sm font-medium text-gray-700 mb-2 center-text">{data.label}</p>

      <div className="border-2 border-dashed border-gray-400 rounded p-2 text-center text-xs text-gray-500">
        <input 
          type="file" 
          onChange={handleFileChange} 
          className="w-full cursor-pointer full-border" 
        />
        {/* <p className="mt-1">{file ? file.name : "Drop a file here"}</p> */}
      </div>

      {/* Optional React Flow handles */}
      {/* <Handle type="target" position={Position.Top} /> */}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
