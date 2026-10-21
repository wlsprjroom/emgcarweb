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
  onClick
}: ItemSlotProps) {
  return (
    <div
  className="absolute cursor-pointer group"
  style={{
    left,
    top,
    width,
    height,
  }}
  onClick={onClick}
>
  {/* Original hover / click area — unchanged */}
  <div className="w-full h-full" />

  {/* Visual layers — can extend outside the slot */}
  <div className="absolute inset-0 overflow-visible pointer-events-none">

    {/* Glow layer */}
    <div
      className="
        absolute
        left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        w-36 h-36
        rounded-full
        bg-blue-400/70
        blur-2xl
        opacity-0
        scale-0
        group-hover:opacity-100
        group-hover:scale-100
        transition-all duration-300 ease-out
      "
    />

    {/* Image layer */}
    <img
      src={image}
      alt="Item"
      className="
        absolute
        left-1/2
        top-1/2
        max-w-50
        max-h-50
        object-contain
        p-[2%]
        -translate-x-1/2
        -translate-y-1/2
        opacity-0
        group-hover:opacity-100
        transition-transform
        duration-300
        ease-out
      "
    />
  </div>
</div>
  )
}

export default ItemSlot