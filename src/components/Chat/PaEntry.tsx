/**
 * PA Entry Component
 * Displays the chat avatar and welcome message
 */

import imgHiBelfiusLottieClose1 from "figma:asset/5ab5c2c91eb64ad8ad7c3d11891d48f6031ac882.png";

/**
 * Chat Avatar Component
 * Displays the assistant's avatar image
 */
function ChatAvatar() {
  return (
    <div className="flex rounded-full size-[56px]">
      <img 
        src={imgHiBelfiusLottieClose1} 
        className="size-full object-cover"
        alt="Chat Assistant Avatar"
      />
    </div>
  );
}

/**
 * PA Entry Component
 * Main welcome section with avatar and greeting message
 */
export function PaEntry() {
  return (
    <div className="absolute bg-white flex items-center gap-[15px] left-[170px] top-[35px] w-[364px] h-[112px]">
      <ChatAvatar />
      <div className="flex-1 text-[36px] font-['Belfius21:Regular'] leading-[44px]">
        PowerUp
      </div>
    </div>
  );
}