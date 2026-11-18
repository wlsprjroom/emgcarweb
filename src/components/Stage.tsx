import type { ReactNode } from "react"

interface StageProps {
  image: string
  alt: string
  /** Intrinsic pixel size of the image. */
  width: number
  height: number
  /** Overlays (buttons, hotspots…) positioned in % of the image. */
  children?: ReactNode
}

/**
 * Renders an image as large as possible while fitting entirely inside the
 * viewport (minus the page gutter), keeping its aspect ratio.
 *
 * The box is exactly the size of the image, so any child positioned with
 * percentages (or clip-path percentages) stays locked to the same spot on
 * the picture at every screen size. It is also a size container, so
 * children can scale with it using `cqw` units.
 */
function Stage({ image, alt, width, height, children }: StageProps) {
  const ratio = width / height

  return (
    <div
      className="@container relative overflow-visible rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
      style={{
        aspectRatio: `${width} / ${height}`,
        width: `min(100%, calc((100dvh - 2 * var(--gutter)) * ${ratio}))`,
      }}
    >
      <img
        src={image}
        alt={alt}
        width={width}
        height={height}
        className="absolute inset-0 block size-full rounded-lg"
      />
      {children}
    </div>
  )
}

export default Stage
