import { apps, getStats } from "@/data/apps";
import AppCard from "@/components/AppCard";
import StatsBar from "@/components/StatsBar";

export default function Home() {
  const stats = getStats();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Nav */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              RichF Labs
            </span>
            <span className="text-xs font-medium bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full border border-gray-200">
              beta
            </span>
          </div>
          <a
            href="https://github.com/OCBuilder6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            GitHub →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <p className="text-sm font-medium text-indigo-600 mb-3 tracking-wide uppercase">
            Building in public
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            One app a day,
            <br />
            every day.
          </h1>
          <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
            A new tool shipped daily — AI, Web3, DeFi, and whatever else seems
            worth building. No drafts. No waiting. Just ship.
          </p>
        </div>
      </section>

      {/* Stats */}
      <StatsBar stats={stats} />

      {/* App Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-gray-900">All Apps</h2>
          <span className="text-sm text-gray-400">{apps.length} shipped</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...apps].reverse().map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-8">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-gray-400">
            © {new Date().getFullYear()} RichF Labs
          </span>
          <span className="text-sm text-gray-400">
            Built fresh. Shipped daily.
          </span>
        </div>
      </footer>
    </main>
  );
}
