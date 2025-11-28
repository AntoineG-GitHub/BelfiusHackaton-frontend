/**
 * Task Input Component
 * Text input area with send button for task descriptions
 */

interface TaskInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

/**
 * Task Input Component
 * Allows users to describe tasks and submit them
 * @param value - Current textarea value
 * @param onChange - Callback when text changes
 * @param onSubmit - Callback when send button is clicked
 */
export function TaskInput({ value, onChange, onSubmit }: TaskInputProps) {
  return (
    <div className="absolute left-[60px] top-[250px] w-[363px] flex items-start gap-[8px]">
      {/* Task description textarea */}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Describe your task."
        className="flex-1 bg-white border border-[#d6dce2] rounded-[24px] p-[16px] text-[14px]"
        rows={3}
      />
      
      {/* Send button */}
      <button
        onClick={onSubmit}
        className="bg-[#dc0078] text-white px-[16px] py-[12px] rounded-[24px] hover:bg-[#c00068] transition-colors"
        aria-label="Send task"
      >
        Send
      </button>
    </div>
  );
}