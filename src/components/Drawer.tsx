import { useState, useEffect } from "react";
import ItemSlot from "./ItemSlot";
import Button from "./Button";
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
  const [revealedItem, setRevealedItem] = useState<string | null>(null);

  // Find the correct drawer
  const drawer = drawers[drawerNumber];
  useEffect(() => {
  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    // Ignore clicks inside an item slot
    if (target.closest("[data-item-slot]")) return;

    // Hide the revealed item
    setRevealedItem(null);
  };

  document.addEventListener("click", handleOutsideClick);

  return () => {
    document.removeEventListener("click", handleOutsideClick);
  };
}, []);
  return (
    <div className="relative">
      {/* BACK BUTTON */}
  <Button
    onClick={onBack}
    className="
      absolute z-20
      top-20 left-14
      sm:top-16 sm:left-10
      md:top-14 md:left-8
    "
  >
    ← Back
  </Button>
      {/* =========================
          DRAWER IMAGE
          ========================= */}
      <img
        src={drawer.image}
        alt={`Drawer ${drawerNumber} opened`}
        className="block w-full h-auto rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
      />

      {/* =========================
          ITEMS
          ========================= */}
      <div className="absolute inset-0">
  {drawer.items.map((item) => (
    <ItemSlot
      key={item.image}
      image={item.image}
      left={item.left}
      top={item.top}
      width={item.width}
      height={item.height}
      isRevealed={revealedItem === item.image}
      onReveal={() => setRevealedItem(item.image)}
      onClick={() => {
        setRevealedItem(null);
        setSelectedItem(item);
      }}
    />
  ))}
</div>

      {/* =========================
          ITEM INFO MODAL
          ========================= */}
      {selectedItem && (
        <div
          className=" fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6 "
          //onClick={() => setSelectedItem(null)} // click the dark backdrop to close
        >
          <div
            className=" flex w-full max-w-2xl max-h-[90vh] h-[60vh] flex-col rounded-xl bg-white p-4 sm:p-6 shadow-2xl "
          >
            {/* Item content */}
            <div className="flex-1 overflow-auto">

              {/* Image floats at the top-right */}
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="
                  float-right w-2/5 max-h-[40vh] object-contain mt-6
                "
              />

              {/* Text wraps around the image and continues underneath */}
              <h2 className="text-xl sm:text-2xl font-bold mt-6 ml-6">
                {selectedItem.name}
              </h2>

              <div className="mt-4 ml-6 mr-6 space-y-3 text-base/6 text-gray-700 font-['Noto-Sans-TC']">
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
<div className="my-6 flex w-full justify-center">
  <Button onClick={() => setSelectedItem(null)}>
    Close
  </Button>
</div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Drawer;
