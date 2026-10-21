import { useState } from "react"
import Cabinet from "./components/Cabinet"
import Drawer from "./components/Drawer"
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  // null = cabinet is closed
  // 1 = drawer 1 is open
  // 2 = drawer 2 is open
  const [openDrawer, setOpenDrawer] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

      {/* Main container */}
      <div className="relative w-full max-w-150">

        {/* =========================
            CLOSED CABINET
            ========================= */}
        {openDrawer === null && (
          <Cabinet
            onOpenDrawer={setOpenDrawer}
          />
        )}

        {/* =========================
            OPEN DRAWER
            ========================= */}
        {openDrawer !== null && (
          <Drawer
            drawerNumber={openDrawer}
            onBack={() => setOpenDrawer(null)}
          />
        )}

      </div>
        <SpeedInsights />
    </div>
  )
}

export default App