interface Stats {
  totalApps: number;
  daysStreak: number;
  daysSinceStart: number;
  startDate: string;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function StatsBar({ stats }: { stats: Stats }) {
  const items = [
    { label: "Apps shipped", value: String(stats.totalApps) },
    { label: "Active days", value: String(stats.daysStreak) },
    { label: "Days running", value: String(stats.daysSinceStart) },
    { label: "Started", value: formatDate(stats.startDate) },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-5">
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {items.map(({ label, value }) => (
            <div key={label}>
              <dt className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">
                {label}
              </dt>
              <dd className="text-2xl font-bold text-gray-900">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
