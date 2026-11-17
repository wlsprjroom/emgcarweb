
import React from "react";

interface BackButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

function BackButton({
  onClick,
  children,
  className = "",
}: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        group relative overflow-hidden z-10
       px-2 py-1 text-xs
sm:px-3 sm:py-2 sm:text-sm
md:px-4 md:py-2 md:text-base
rounded-xl cursor-pointer
        bg-white text-pink-600 shadow-md inset-ring-2
        shadow-pink-600/15 inset-ring-pink-600
        transition-all duration-300 ease-out

        [@media(hover:hover)]:hover:text-white
        [@media(hover:hover)]:hover:shadow-lg
        [@media(hover:hover)]:hover:shadow-pink-600/50

        [@media(hover:none)]:active:scale-120
        [@media(hover:none)]:active:bg-pink-600
        [@media(hover:none)]:active:text-white

        ${className}
      `}
    >
      <span
        className="
          absolute inset-0 -z-10 bg-pink-600
          scale-x-0 origin-left
          transition-transform duration-300 ease-out
          [@media(hover:hover)]:group-hover:scale-x-100
        "
      />

      {children}
    </button>
  );
}

export default BackButton;
