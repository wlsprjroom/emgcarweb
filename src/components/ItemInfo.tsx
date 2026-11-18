import Button from "./Button"
import type { DrawerItem } from "./Data/Items"

interface ItemInfoProps {
  item: DrawerItem
  onClose: () => void
}

/** Full-screen modal with an item's details. */
function ItemInfo({ item, onClose }: ItemInfoProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="item-info-title"
        className="flex h-[60vh] max-h-[90vh] w-full max-w-2xl flex-col rounded-xl bg-white p-4 shadow-2xl sm:p-6"
      >
        <div className="flex-1 overflow-auto">
          {/* Image floats top-right; text wraps around and continues below */}
          <img
            src={item.image}
            alt={item.name}
            className="float-right mt-6 max-h-[40vh] w-2/5 object-contain"
          />

          <h2 id="item-info-title" className="mt-6 ml-6 text-xl font-bold sm:text-2xl">
            {item.name}
          </h2>

          <div className="mx-6 mt-4 space-y-3 font-['Noto-Sans-TC'] text-base/6 text-gray-700">
            {item.description.map(({ label, value }) => (
              <p key={label}>
                <span className="font-bold text-cyan-600">{label}：</span>
                {value}
              </p>
            ))}
          </div>

          <div className="clear-both" />
        </div>

        <div className="mt-6 flex justify-center">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  )
}

export default ItemInfo
