
import { useState } from "react";

interface ItemSlotProps {
  image: string;
  left: string;
  top: string;
  width: string;
  height: string;
  onClick: () => void;
}

function ItemSlot({
  image,
  left,
  top,
  width,
  height,
  onClick,
}: ItemSlotProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  function handleClick() {
    if (!isRevealed) {
      setIsRevealed(true);
    } else {
      onClick();
    }
  }

  return (
    <div
      className="absolute cursor-pointer group"
      style={{ left, top, width, height }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Reveal item, then click again for information"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {/* Original clickable area */}
      <div className="w-full h-full" />

      {/* Visual layers */}
      <div className="absolute inset-0 overflow-visible pointer-events-none">
        {/* Blue glow */}
        <div
          className={`
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            w-36 h-36 rounded-full
            bg-blue-400/70 blur-2xl
            transition-[opacity,transform] duration-300 ease-out
            ${
              isRevealed
                ? "opacity-100 scale-100"
                : "opacity-0 scale-0"
            }
          `}
        />

        {/* Item image */}
        <img
          src={image}
          alt="Item"
          decoding="async"
          className={`
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            max-w-[12rem] max-h-[12rem]
            object-contain p-[2%]
            transition-transform duration-300 ease-out
            ${
              isRevealed
                ? "scale-100"
                : "scale-0"
            }
          `}
        />
      </div>
    </div>
  );
}

export default ItemSlot;
