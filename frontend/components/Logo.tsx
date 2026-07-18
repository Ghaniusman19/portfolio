export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <div
        style={{ width: size, height: size }}
        className="rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold"
      >
        UG
      </div>
      <span className="font-semibold">Usman Ghani</span>
    </div>
  );
}
