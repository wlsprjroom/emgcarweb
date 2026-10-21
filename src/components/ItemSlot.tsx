
interface ItemSlotProps {
  image: string
  left: string
  top: string
  width: string
  height: string
  onClick: () => void
}

function ItemSlot({
  image,
  left,
  top,
  width,
  height,
  onClick,
}: ItemSlotProps) {
  return (
    <div
      className="absolute cursor-pointer group"
      style={{ left, top, width, height }}
      onClick={onClick}
    >
      {/* Keep the original clickable area */}
      <div className="w-full h-full" />

      {/* Visual layers do not intercept clicks */}
      <div className="absolute inset-0 overflow-visible pointer-events-none">
        {/* Glow */}
        <div
          className="
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            w-36 h-36 rounded-full
            bg-blue-400/60 blur-xl
            opacity-0 scale-90
            group-hover:opacity-100
            group-hover:scale-100
            transition-[opacity,transform]
            duration-200 ease-out
          "
        />

        {/* Item image */}
        <img
          src={image}
          alt="Item"
          decoding="async"
          className="
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            max-w-[12rem] max-h-[12rem]
            w-auto h-auto object-contain
            p-[2%]
            scale-0 group-hover:scale-100
            transition-transform duration-200 ease-out
          "
        />
      </div>
    </div>
  )
}

export default ItemSlot
