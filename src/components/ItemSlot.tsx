import type { MouseEvent } from "react"
import type { DrawerItem } from "./Data/Items"

interface ItemSlotProps {
  item: DrawerItem
  isRevealed: boolean
  onReveal: () => void
  onOpen: () => void
}

/**
 * Invisible hotspot over an item in the drawer photo. Desktop: hover shows a
 * preview, click opens details. Touch: first tap shows the preview, second
 * tap opens details.
 *
 * Position is in % of the drawer image; preview and glow sizes are in `cqw`
 * so they scale with the drawer instead of staying a fixed pixel size.
 */
function ItemSlot({ item, isRevealed, onReveal, onOpen }: ItemSlotProps) {
  const { image, name, left, top, width, height } = item

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    const isTouch = window.matchMedia("(hover: none)").matches
    if (isTouch && !isRevealed) onReveal()
    else onOpen()
  }

  const shown = isRevealed
    ? "opacity-100 scale-100"
    : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"

  return (
    <div
      data-item-slot
      role="button"
      aria-label={name}
      className="group absolute cursor-pointer"
      style={{ left, top, width, height }}
      onClick={handleClick}
    >
      <div className="pointer-events-none absolute inset-0">
        {/* Glow */}
        <div
          className={`absolute top-1/2 left-1/2 size-[24cqw] -translate-1/2 rounded-full bg-blue-400/70 blur-2xl transition-all duration-300 ease-out ${shown}`}
        />
        {/* Preview */}
        <img
          src={image}
          alt=""
          className={`absolute top-1/2 left-1/2 max-h-[33cqw] max-w-[33cqw] -translate-1/2 object-contain p-[2%] transition-all duration-300 ease-out ${shown}`}
        />
      </div>
    </div>
  )
}

export default ItemSlot
