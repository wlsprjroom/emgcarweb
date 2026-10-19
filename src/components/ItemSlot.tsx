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
    left: left,
    top: top,
    width: width,
    height: height,
  }}
  onClick={onClick}
>
  {/* Slot area */}
  <div className="w-full h-full" />

{/* Glow effect behind the image */}
<div
  className="
    absolute
    left-1/2
    top-1/2
    w-full
    h-full
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-blue-400/80
    blur-2xl
    opacity-0
    scale-75
    group-hover:opacity-100
    group-hover:scale-120
    transition-all
    duration-300
    ease-out
    pointer-events-none
  "
/>

  {/* Image */}
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
      scale-0
      group-hover:scale-100
      transition-transform
      duration-300
      ease-out
      pointer-events-none
    "
  />
</div>
  )
}

export default ItemSlot