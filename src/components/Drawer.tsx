import { useState } from "react";
import ItemSlot from "./ItemSlot";
import BackButton from "./BackButton";
// Adjust this path to match where items.ts is in your project:
//   items.ts inside components/data/  ->  "./data/items"
//   items.ts inside src/data/         ->  "../data/items"
import { drawers } from "./Data/Items";
import type { DrawerItem } from "./Data/Items";

interface DrawerProps {
  drawerNumber: number;
  onBack: () => void;
}

function Drawer({ drawerNumber, onBack }: DrawerProps) {
  // Store the whole item (name, description, image...), not just the image path
  const [selectedItem, setSelectedItem] = useState<DrawerItem | null>(null);

  // Find the correct drawer
  const drawer = drawers[drawerNumber];

  return (
    <div className="relative">
      {/* =========================
          DRAWER IMAGE
          ========================= */}
      <img
        src={drawer.image}
        alt={`Drawer ${drawerNumber} opened`}
        className="w-full h-auto rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
      />

      {/* =========================
          ITEMS
          ========================= */}
      {drawer.items.map((item) => (
        <ItemSlot
          key={item.image}
          image={item.image}
          left={item.left}
          top={item.top}
          width={item.width}
          height={item.height}
          onClick={() => setSelectedItem(item)}
        />
      ))}

      {/* =========================
          ITEM INFO MODAL
          ========================= */}
      {selectedItem && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/60 p-4 sm:p-6
          "
          //onClick={() => setSelectedItem(null)} // click the dark backdrop to close
        >
          <div
            className="
              flex w-full max-w-2xl
              max-h-[90vh]
              flex-col
              rounded-xl bg-white
              p-4 sm:p-6
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()} // clicking the card itself does not close
          >
            {/* Item content */}
            <div
              className="
                grid flex-1
                grid-cols-1 sm:grid-cols-2
                items-center
                gap-4 sm:gap-8
                overflow-auto
              "
            >
              {/* Information */}
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl font-bold">
                  {selectedItem.name}
                </h2>

                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  {selectedItem.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex min-h-0 items-center justify-center">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="
                    max-h-[50vh]
                    max-w-full
                    object-contain
                  "
                />
              </div>
            </div>

            {/* Close button */}
            <div className="mt-4 flex justify-center">
              <button
                className="
                  group relative z-0 overflow-hidden
                  cursor-pointer rounded-xl
                  bg-white px-4 py-2
                  text-pink-600
                  shadow-md shadow-pink-600/15
                  inset-ring-2 inset-ring-pink-600
                  transition-all duration-300
                  hover:text-white
                  hover:shadow-lg hover:shadow-pink-600/50
                "
                onClick={() => setSelectedItem(null)}
              >
                <span
                  className="
                    absolute inset-0 z-0
                    origin-left scale-x-0
                    bg-pink-600
                    transition-transform duration-300 ease-out
                    group-hover:scale-x-100
                  "
                />

                <span className="relative z-10">Close</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================
          BACK BUTTON
          ========================= */}
      <BackButton onClick={onBack} />
    </div>
  );
}

export default Drawer;
