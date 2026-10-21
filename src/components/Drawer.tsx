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
            <div className="flex-1 overflow-auto ml-6 pr-4">

              {/* Image floats at the top-right */}
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="
                  float-right
                  w-2/5
                  max-h-[40vh]
                  object-contain
                "
              />

              {/* Text wraps around the image and continues underneath */}
              <h2 className="text-xl sm:text-2xl font-bold mt-6 ml-6">
                {selectedItem.name}
              </h2>

              <div className="mt-4 ml-6 space-y-3 text-base/6 text-gray-700 font-['Noto-Sans-TC']">
                {selectedItem.description.map((item, index) => (
                  <p key={index}>
                    <span className="font-bold text-cyan-600">
                      {item.label}：
                    </span>
                    <span className="font-normal text-gray-700">
                      {item.value}
                    </span>
                  </p>
                ))}
              </div>
              {/* Clears the float so later content starts below the image */}
              <div className="clear-both" />

            </div>

            {/* Close button */}
            <div className="mt-8 flex justify-center">
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
