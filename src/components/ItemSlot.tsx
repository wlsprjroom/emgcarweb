
interface ItemSlotProps {
  image: string
  left: string
  top: string
  width: string
  height: string
  isRevealed: boolean
  onReveal: () => void
  onClick: () => void
}

function ItemSlot({
  image,
  left,
  top,
  width,
  height,
  isRevealed,
  onReveal,
  onClick
}: ItemSlotProps) {

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()

    const isTouchDevice = window.matchMedia("(hover: none)").matches

    if (isTouchDevice && !isRevealed) {
      onReveal()
    } else {
      onClick()
    }
  }

  return (
    <div
    data-item-slot
      className="absolute cursor-pointer group"
      style={{ left, top, width, height }}
      onClick={handleClick}
    >
      <div className="w-full h-full" />

      <div className="absolute inset-0 overflow-visible pointer-events-none">

        {/* Glow */}
        <div
          className={`
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            w-36 h-36 rounded-full
            bg-blue-400/70 blur-2xl
            transition-all duration-300 ease-out
            ${
              isRevealed
                ? "opacity-100 scale-100"
                : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
            }
          `}
        />

        {/* Image */}
        <img
          src={image}
          alt="Item"
          className={`
            absolute left-1/2 top-1/2
            max-w-50 max-h-50
            object-contain p-[2%]
            -translate-x-1/2 -translate-y-1/2
            transition-transform duration-300 ease-out
            ${
              isRevealed
                ? "scale-100"
                : "scale-0 group-hover:scale-100"
            }
          `}
        />

      </div>
    </div>
  )
}

export default ItemSlot
