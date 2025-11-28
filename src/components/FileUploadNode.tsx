import { Handle, Position } from "@xyflow/react";
import { useState } from "react";

interface FileUploadNodeProps {
  data: {
    label: string;
  };
}

export function FileUploadNode({ data }: FileUploadNodeProps) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      console.log(`File uploaded for node "${data.label}":`, e.target.files[0]);
    }
  };

  return (
    <div className="bg-white border border-gray-300 p-3 rounded-lg shadow-sm w-[200px]">
      <p className="text-sm font-medium text-gray-700 mb-2">{data.label}</p>

      <div className="border-2 border-dashed border-gray-400 rounded p-2 text-center text-xs text-gray-500">
        <input type="file" onChange={handleFileChange} className="w-full cursor-pointer" />
        <p className="mt-1">{file ? file.name : "Drop a file here"}</p>
      </div>

      {/* Optional React Flow handles */}
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}
