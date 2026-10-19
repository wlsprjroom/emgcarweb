interface CabinetProps {
  onOpenDrawer: (drawerNumber: number) => void
}

function Cabinet({ onOpenDrawer }: CabinetProps) {
  return (
    <div className="relative">

      {/* Cabinet image */}
      <img
        src="/cabinet.jpg"
        alt="Cabinet"
        className="w-full h-auto rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
      />

      {/* =========================
          DRAWER 1 CLICKABLE AREA
          ========================= */}
      <button
        onClick={() => onOpenDrawer(1)}
        className="
          absolute
          inset-0
          cursor-pointer
          bg-transparent
          border-none
          hover:bg-white/20
        "
        style={{
          clipPath: "polygon(9% 47%, 90% 48%, 85% 56%, 14% 56%)"
        }}
        aria-label="Open drawer 1"
      />

      {/* =========================
          DRAWER 2 CLICKABLE AREA
          ========================= */}
      <button
        onClick={() => onOpenDrawer(2)}
        className="
          absolute
          inset-0
          cursor-pointer
          bg-transparent
          border-none
          hover:bg-white/20
        "
        style={{
          clipPath: "polygon(14% 55.5%, 85% 56%, 81% 62.5%, 19% 62%)"
        }}
        aria-label="Open drawer 2"
      />
    {/* =========================
          DRAWER 3 CLICKABLE AREA
          ========================= */}
      <button
        onClick={() => onOpenDrawer(3)}
        className="
          absolute
          inset-0
          cursor-pointer
          bg-transparent
          border-none
          hover:bg-white/20
        "
        style={{
          clipPath: "polygon(19% 62%, 81% 62%, 76.5% 69%, 23% 69%)"
        }}
        aria-label="Open drawer 3"
      />
      {/* =========================
          DRAWER 4 CLICKABLE AREA
          ========================= */}
      <button
        onClick={() => onOpenDrawer(4)}
        className="
          absolute
          inset-0
          cursor-pointer
          bg-transparent
          border-none
          hover:bg-white/20
        "
        style={{
          clipPath: "polygon(23% 69%, 77% 69%, 71% 77%, 28% 77%)"
        }}
        aria-label="Open drawer 4"
      />
    </div>
  )
}

export default Cabinet