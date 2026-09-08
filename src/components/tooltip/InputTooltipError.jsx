export function InputTooltipError({ message }) {
  if (!message) return null;
  return (
    <div className="absolute -top-2 right-0 -translate-y-full z-10">
      <div className="relative bg-orange text-white text-xs rounded-md px-3 py-1.5 whitespace-nowrap shadow-lg">
        {message}
        <div className="absolute left-4 -bottom-1 w-2 h-2 bg-orange rotate-45" />
      </div>
    </div>
  );
}
