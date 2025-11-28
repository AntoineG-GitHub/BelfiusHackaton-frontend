import React, { useState } from "react";

type Variant = "input" | "transform" | "output" | "default";

interface NodeCardProps {
  label: string;
  onClick: () => void;
  variant?: Variant;
  isOutlined?: boolean;
  className?: string;
}

export function NodeCard({
  label,
  onClick,
  variant = "default",
  isOutlined = false,
  className = "",
}: NodeCardProps) {
  const [localHover, setLocalHover] = useState(false);
  const showRed = isOutlined || localHover;

  const variantMap: Record<Variant, { accent: string; text: string }> = {
    input: { accent: "bg-emerald-400", text: "text-emerald-800" },
    transform: { accent: "bg-sky-400", text: "text-sky-800" },
    output: { accent: "bg-rose-400", text: "text-rose-800" },
    default: { accent: "bg-gray-300", text: "text-gray-800" },
  };
  const v = variantMap[variant];

  const borderRadius = "14px";

  // box-shadow ring (curved) used instead of outline so radius is respected
  const redStyle: React.CSSProperties = {
    border: "2px solid transparent",
    boxShadow: "0 8px 30px rgba(220,0,120,0.12), 0 0 0 2px rgba(220,0,120,1)",
    borderRadius,
    overflow: "hidden",
  };

  const baseStyle: React.CSSProperties = {
    borderRadius,
    overflow: "hidden",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      onMouseEnter={() => setLocalHover(true)}
      onMouseLeave={() => setLocalHover(false)}
      onFocus={() => setLocalHover(true)}
      onBlur={() => setLocalHover(false)}
      style={showRed ? { ...baseStyle, ...redStyle } : baseStyle}
      className={`relative w-full min-h-[92px] max-h-[144px] bg-white flex items-center justify-center px-4 py-3 cursor-pointer transition-transform duration-200 ease-out border border-[#e6eaee] ${className}`}
    >
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${v.accent}`} />
      <div className={`absolute left-3 top-3 w-2 h-2 ${v.accent} rounded-full shadow-sm`} />
      <div className="w-full px-2 text-center">
        <p className={`text-[14px] leading-[20px] font-medium ${v.text} truncate`}>{label}</p>
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius,
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      />
    </button>
  );
}
