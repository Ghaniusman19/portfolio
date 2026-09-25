export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <div
        style={{ width: size, height: size }}
        className="flex items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-500 font-bold text-white"
      >
        UG
      </div>
      <span className="font-semibold">Usman Ghani</span>
    </div>
  );
}
