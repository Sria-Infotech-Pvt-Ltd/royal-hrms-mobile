export default function PhoneFrame({ src, alt, small = false }) {
  return (
    <div
      className={`overflow-hidden rounded-[24px] border-4 border-[#131a2a] bg-bg-1 shadow-[0_24px_60px_rgba(0,0,0,0.45)] ${
        small ? 'w-48 sm:w-56' : 'w-64 sm:w-72'
      }`}
    >
      <img src={src} alt={alt} className="w-full" loading="lazy" />
    </div>
  )
}
