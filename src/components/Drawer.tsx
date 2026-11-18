import { useEffect, useState } from "react"
import Button from "./Button"
import ItemInfo from "./ItemInfo"
import ItemSlot from "./ItemSlot"
import Stage from "./Stage"
import { drawers } from "./Data/Items"
import type { DrawerItem } from "./Data/Items"

interface DrawerProps {
  drawerNumber: number
  onBack: () => void
}

function Drawer({ drawerNumber, onBack }: DrawerProps) {
  const drawer = drawers[drawerNumber]

  // Item whose detail modal is open
  const [selectedItem, setSelectedItem] = useState<DrawerItem | null>(null)
  // Item whose preview is shown on touch devices (first tap reveals, second opens)
  const [revealedItem, setRevealedItem] = useState<string | null>(null)

  // Tapping anywhere outside an item hides the revealed preview
  useEffect(() => {
    const hide = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("[data-item-slot]")) {
        setRevealedItem(null)
      }
    }
    document.addEventListener("click", hide)
    return () => document.removeEventListener("click", hide)
  }, [])

  return (
    <>
      <Stage
        image={drawer.image}
        alt={`Drawer ${drawerNumber} opened`}
        width={drawer.width}
        height={drawer.height}
      >
        {drawer.items.map((item) => (
          <ItemSlot
            key={item.image}
            item={item}
            isRevealed={revealedItem === item.image}
            onReveal={() => setRevealedItem(item.image)}
            onOpen={() => {
              setRevealedItem(null)
              setSelectedItem(item)
            }}
          />
        ))}

        <Button onClick={onBack} className="absolute top-[6%] left-[5%] z-20">
          ← Back
        </Button>
      </Stage>

      {selectedItem && (
        <ItemInfo item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  )
}

export default Drawer
