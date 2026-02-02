export default function Loading() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 pt-32">
      <div className="h-10 w-48 bg-zinc-800 animate-pulse rounded mb-10" />
      <div className="grid grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-32 bg-zinc-900/50 rounded-2xl animate-pulse" />
        ))}
      </div>
    </div>
  );
}