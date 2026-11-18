import type { ReactNode } from "react"

interface ButtonProps {
  onClick: () => void
  children: ReactNode
  className?: string
}

/**
 * Pink outlined button with a fill-on-hover effect.
 * Text and padding scale with the nearest size container (cqw) so the button
 * keeps the same proportions relative to the image it sits on.
 */
function Button({ onClick, children, className = "" }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group relative z-10 cursor-pointer overflow-hidden rounded-xl
        px-[1em] py-[0.5em] text-[clamp(0.75rem,2.6cqw,1rem)]
        bg-white text-pink-600 shadow-md shadow-pink-600/15 inset-ring-2 inset-ring-pink-600
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
          absolute inset-0 -z-10 origin-left scale-x-0 bg-pink-600
          transition-transform duration-300 ease-out
          [@media(hover:hover)]:group-hover:scale-x-100
        "
      />
      {children}
    </button>
  )
}

export default Button
