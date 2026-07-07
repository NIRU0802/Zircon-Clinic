import { FiCheck } from "react-icons/fi";

export default function DoctorExpertiseGrid({
  items,
  accent = "primary",
}: {
  items: string[];
  accent?: "primary" | "gold";
}) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item) => (
        <div
        key={item}
        className={`flex min-h-[56px] items-center gap-3 rounded-xl border px-4 py-3 transition ${
          accent === "gold"
            ? "border-slate-200 bg-slate-50 hover:bg-gold-50 hover:border-gold-300"
            : "border-slate-200 bg-slate-50 hover:bg-primary-50 hover:border-primary-300"
        }`}
      >
        <div
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
            accent === "gold" ? "bg-gold-500" : "bg-primary-500"
          }`}
        >
          <FiCheck className="text-white" />
        </div>
      
        <span className="text-sm font-semibold text-slate-700 line-clamp-1">
          {item}
        </span>
      </div>
      ))}
    </div>
  );
}