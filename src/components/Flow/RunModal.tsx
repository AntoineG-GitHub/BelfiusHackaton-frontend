import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";

interface RunModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRun?: (files: File[]) => void;
}

export function RunModal({ open, onOpenChange, onRun }: RunModalProps) {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer?.files?.length) {
      setFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleSelectFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFiles(Array.from(e.target.files));
  };

  const handleRun = () => {
    if (onRun) onRun(files);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Full-screen modal */}
      <DialogContent
        className="
          w-screen h-screen max-w-none
          flex flex-col items-center justify-center
          bg-white p-10 rounded-none
        "
      >
        <DialogHeader className="mb-6 text-center space-y-2">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Run Flow
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-[15px]">
            Upload any files your automation needs. Drag & drop or click to browse.
          </DialogDescription>
        </DialogHeader>

        {/* Center Container */}
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-6">

          {/* DROP AREA */}
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => fileInputRef.current?.click()}
            className="
              w-full min-h-[260px] flex flex-col items-center justify-center 
              border-2 border-dashed border-gray-300 bg-gray-50
              hover:bg-gray-100 transition-all
              rounded-xl p-8 cursor-pointer text-center
            "
          >
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleSelectFiles}
              multiple
            />

            <p className="text-gray-800 font-medium text-[15px]">
              Drag & drop files here
            </p>
            <p className="text-gray-500 text-sm mt-1">or click to select</p>

            {/* Selected files */}
            {files.length > 0 && (
              <div className="mt-6 w-full text-left">
                <p className="text-xs text-gray-500 mb-2">Selected files:</p>
                <ul className="text-sm bg-white border rounded-lg p-4 space-y-1 max-h-40 overflow-auto">
                  {files.map((f) => (
                    <li key={f.name + f.size} className="text-gray-700">
                      • {f.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 justify-center mt-4">

            {/* Cancel */}
            <DialogClose asChild>
              <button className="border border-gray-300 px-6 py-3 rounded-[24px] text-gray-700 hover:bg-gray-100 transition">
                Cancel
              </button>
            </DialogClose>

            {/* Run Button - EXACT same style as Send */}
            <button
              onClick={handleRun}
              className="
                bg-[#dc0078] text-white 
                px-[24px] py-[12px] rounded-[24px]
                hover:bg-[#c00068] transition-colors
                text-[15px]
              "
            >
              Run Flow
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default RunModal;
