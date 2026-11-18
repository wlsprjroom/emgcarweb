import { useState } from "react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import Cabinet from "./components/Cabinet"
import Drawer from "./components/Drawer"

function App() {
  // null = cabinet view, otherwise the number of the open drawer
  const [openDrawer, setOpenDrawer] = useState<number | null>(null)

  return (
    <main className="flex min-h-dvh items-center justify-center bg-gray-100 p-(--gutter)">
      {openDrawer === null ? (
        <Cabinet onOpenDrawer={setOpenDrawer} />
      ) : (
        <Drawer drawerNumber={openDrawer} onBack={() => setOpenDrawer(null)} />
      )}
      <SpeedInsights />
    </main>
  )
}

export default App
