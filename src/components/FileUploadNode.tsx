import { Handle, Position } from "@xyflow/react";

interface FileUploadNodeProps {
  data: {
    label: string;
    file: File | null;
    setFile: (file: File) => void;
  };
}

export function FileUploadNode({ data }: FileUploadNodeProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      data.setFile(e.target.files[0]);
      console.log(`File uploaded for node "${data.label}":`, e.target.files[0]);
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
