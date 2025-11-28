import { X } from 'lucide-react';

interface CanvasNodeProps {
  id: string;
  label: string;
  x: number;
  y: number;
  onMouseDown: (e: React.MouseEvent, id: string) => void;
  onDelete: () => void;
}

export function CanvasNode({ id, label, x, y, onMouseDown, onDelete }: CanvasNodeProps) {
  return (
    <div
      className="absolute cursor-move group"
      style={{ 
        left: `${x}px`, 
        top: `${y}px`,
        zIndex: 2
      }}
      onMouseDown={(e) => onMouseDown(e, id)}
    >
      <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start justify-end max-h-[144px] min-h-[92px] px-0 py-[12px] relative rounded-[24px] shrink-0 w-[117px]">
        <div aria-hidden="true" className="absolute border border-[#d6dce2] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.04),4px_4px_8px_0px_rgba(0,0,0,0.02),2px_2px_2px_0px_rgba(0,0,0,0.04)]" />
        
        {/* Delete Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity z-10"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <X size={14} />
        </button>

        <div className="max-h-[80px] min-h-[28px] relative shrink-0 w-full">
          <div className="flex flex-row items-center max-h-inherit min-h-inherit overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex gap-[2px] items-center max-h-inherit min-h-inherit px-[16px] py-[2px] relative w-full">
              <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#41525d] text-[14px] tracking-[0.25px]">
                {label}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(255,255,255,0.08)]" />
      </div>
    </div>
  );
}
