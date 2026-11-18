import Stage from "./Stage"

interface CabinetProps {
  onOpenDrawer: (drawerNumber: number) => void
}

// Clickable outline of each drawer, in % of the cabinet image.
const DRAWER_AREAS = [
  "polygon(9% 47%, 90% 48%, 85% 56%, 14% 56%)",
  "polygon(14% 55.5%, 85% 56%, 81% 62.5%, 19% 62%)",
  "polygon(19% 62%, 81% 62%, 76.5% 69%, 23% 69%)",
  "polygon(23% 69%, 77% 69%, 71% 77%, 28% 77%)",
]

function Cabinet({ onOpenDrawer }: CabinetProps) {
  return (
    <Stage image="/cabinet.webp" alt="Cabinet" width={1200} height={1600}>
      {DRAWER_AREAS.map((clipPath, i) => (
        <button
          key={clipPath}
          type="button"
          onClick={() => onOpenDrawer(i + 1)}
          className="absolute inset-0 cursor-pointer border-none bg-transparent hover:bg-white/20"
          style={{ clipPath }}
          aria-label={`Open drawer ${i + 1}`}
        />
      ))}
    </Stage>
  )
}

export default Cabinet
