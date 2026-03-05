import { App } from "@/data/apps";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Deterministic pastel background per gradient string
const thumbnailStyles: Record<string, { bg: string; text: string }> = {
  "from-blue-600 via-cyan-500 to-teal-400": {
    bg: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    text: "#ffffff",
  },
  "from-purple-600 via-violet-500 to-pink-500": {
    bg: "linear-gradient(135deg, #7c3aed, #ec4899)",
    text: "#ffffff",
  },
};

const fallbackStyle = {
  bg: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  text: "#ffffff",
};

export default function AppCard({ app }: { app: App }) {
  const thumbStyle = thumbnailStyles[app.gradient] ?? fallbackStyle;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden">
      {/* Thumbnail */}
      {app.screenshot ? (
        <img
          src={app.screenshot}
          alt={app.name}
          className="w-full h-48 object-cover object-top flex-shrink-0"
        />
      ) : (
        <div
          className="h-48 flex items-center justify-center flex-shrink-0"
          style={{ background: thumbStyle.bg }}
        >
          <span
            className="text-3xl font-bold tracking-widest select-none"
            style={{ color: thumbStyle.text, opacity: 0.9 }}
          >
            {getInitials(app.name)}
          </span>
        </div>
      )}

      {/* Body */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Name + date */}
        <div>
          <h3 className="text-base font-semibold text-gray-900 leading-snug">
            {app.name}
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">{formatDate(app.date)}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 flex-1">
          {app.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {app.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-gray-900 text-white text-sm font-medium px-4 py-2 hover:bg-gray-700 transition-colors duration-150"
        >
          Launch App
          <span aria-hidden>→</span>
        </a>
      </div>
    </div>
  );
}
