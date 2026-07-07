export default function DoctorStatsGrid({
    items,
    accent = "primary",
  }: {
    items: { title: string; subtitle: string }[];
    accent?: "primary" | "gold";
  }) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.title}
            className={`rounded-2xl border p-5 text-center transition hover:-translate-y-1 hover:shadow-lg ${
              accent === "gold"
                ? "border-gold-200 bg-gradient-to-br from-white to-slate-50"
                : "border-slate-200 bg-gradient-to-br from-white to-slate-50"
            }`}
          >
            <h5
              className={`text-3xl font-bold ${
                accent === "gold" ? "text-gold-600" : "text-primary-600"
              }`}
            >
              {item.title}
            </h5>
  
            <p className="mt-2 text-sm font-medium text-slate-600">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    );
  }