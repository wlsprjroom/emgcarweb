
interface BackButtonProps {
  onClick: () => void
}

function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
    onClick={onClick}
    className="
      group overflow-hidden z-10 absolute top-[4%] left-[6%]
      px-4 py-2 sm:px-4 sm:py-2 rounded-xl cursor-pointer
      bg-white text-pink-600 shadow-md inset-ring-2 shadow-pink-600/15 
      inset-ring-pink-600 transition-all duration-300 ease-out 
      hover:text-white hover:shadow-lg hover:shadow-pink-600/50
    "
  >
    {/* The left-to-right sliding background */}
    <span 
      className="
        absolute inset-0 -z-10 bg-pink-600 
        scale-x-0 origin-left 
        transition-transform duration-300 ease-out 
        group-hover:scale-x-100
      " 
    />
  
    {/* Button Label */}
      ← Back
    </button>
  )
}

export default BackButton