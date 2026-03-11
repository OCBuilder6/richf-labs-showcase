export interface App {
  id: string;
  name: string;
  date: string;
  description: string;
  url: string;
  tags: string[];
  gradient: string;
  screenshot?: string;
}

export const apps: App[] = [
  {
    id: "defi-ai-scout",
    name: "DeFi AI Scout",
    date: "2026-03-05",
    description:
      "AI-powered DeFi protocol discovery. Fetches live data from DeFiLlama, scores every protocol by risk/momentum, explains them in plain English.",
    url: "https://2026-03-05-defi-ai-scout.vercel.app",
    tags: ["DeFi", "AI", "Web3"],
    gradient: "from-blue-600 via-cyan-500 to-teal-400",
    screenshot: "/screenshots/defi-ai-scout.png",
  },
  {
    id: "contract-scan-ai",
    name: "ContractScan AI",
    date: "2026-03-05",
    description:
      "AI-powered smart contract security analyzer. Paste any Solidity contract and get a risk score, vulnerability breakdown, and plain-English audit.",
    url: "https://2026-03-05-contract-scan-ai.vercel.app",
    tags: ["Security", "AI", "Web3", "Solidity"],
    gradient: "from-purple-600 via-violet-500 to-pink-500",
    screenshot: "/screenshots/contract-scan-ai.png",
  },
  {
    id: "agentguard",
    name: "AgentGuard",
    date: "2026-03-05",
    description:
      "Monitor, decode, and risk-score every transaction your AI agents make on-chain. Built for the era where AI executes on your behalf.",
    url: "https://2026-03-05-ai-agent-wallet-guard-v2.vercel.app",
    tags: ["AI Agents", "Web3", "Security", "Wallet"],
    gradient: "from-emerald-500 to-teal-400",
    screenshot: "/screenshots/agentguard.png",
  },
  {
    id: "chain-alpha",
    name: "Chain Alpha",
    date: "2026-03-06",
    description:
      "Live on-chain KOL verification. Tracks 2,800+ crypto influencers, scores their calls against real trade outcomes, and surfaces who actually delivers alpha.",
    url: "https://2026-03-06-chain-alpha.vercel.app",
    tags: ["KOL", "AI", "Web3", "Analytics"],
    gradient: "from-orange-500 via-red-500 to-pink-500",
    screenshot: "/screenshots/chain-alpha.png",
  },
  {
    id: "yield-atlas",
    name: "Yield Atlas",
    date: "2026-03-07",
    description:
      "Live DeFi yield intelligence across 19,000+ pools on 100+ chains. Risk-scores every opportunity by TVL, chain, and protocol safety.",
    url: "https://2026-03-07-yield-atlas.vercel.app",
    tags: ["DeFi", "Yield", "Web3", "Analytics"],
    gradient: "from-yellow-400 via-orange-500 to-red-500",
    screenshot: "/screenshots/yield-atlas.png",
  },
  {
    id: "agent-pulse",
    name: "Agent Pulse",
    date: "2026-03-08",
    description:
      "Live AI token momentum tracker. Pulls real-time data from CoinGecko, scores 50+ AI agent tokens by momentum (price + volume + ATH distance), and delivers GPT-4o-mini analysis on demand.",
    url: "https://2026-03-08-agent-pulse.vercel.app",
    tags: ["AI", "Web3", "DeFi", "Analytics"],
    gradient: "from-violet-600 via-purple-500 to-indigo-500",
    screenshot: "/screenshots/agent-pulse.png",
  },
  {
    id: "token-safety",
    name: "TokenSafe",
    date: "2026-03-09",
    description:
      "AI-powered token security scanner. Paste any ERC-20 or BSC contract address and get instant honeypot detection, rug pull risk scoring, tax analysis, and plain-English AI verdict.",
    url: "https://2026-03-09-token-safety.vercel.app",
    tags: ["Security", "AI", "Web3", "DeFi"],
    gradient: "from-red-500 via-rose-500 to-pink-500",
    screenshot: "/screenshots/token-safety.png",
  },
  {
    id: "gov-pulse",
    name: "GovPulse",
    date: "2026-03-10",
    description:
      "AI-powered DAO governance intelligence. Browse live proposals from Uniswap, Aave, Compound, and 500+ DAOs via Snapshot.org. Get instant AI summaries that explain what you're voting on in plain English.",
    url: "https://gov-pulse-rho.vercel.app",
    tags: ["DAO", "Governance", "AI", "Web3"],
    gradient: "from-indigo-600 via-violet-500 to-purple-500",
    screenshot: "/screenshots/gov-pulse.png",
  },
  {
    id: "change-radar",
    name: "ChangeRadar",
    date: "2026-03-11",
    description:
      "AI-powered changelog monitoring for dev teams. Tracks releases from Next.js, Stripe, OpenAI, Supabase, and more — classifying every update as Security, Breaking, Feature, or Minor before it hits production.",
    url: "https://2026-03-11-change-radar.vercel.app",
    repoUrl: "https://github.com/OCBuilder6/2026-03-11-change-radar",
    tags: ["DevOps", "AI", "Developer Tools", "SaaS"],
    gradient: "from-indigo-600 via-blue-500 to-cyan-500",
    screenshot: "/screenshots/change-radar.png",
  },
];

export function getStats() {
  const totalApps = apps.length;
  const dates = Array.from(new Set(apps.map((a) => a.date))).sort();
  const startDate = dates[0];
  const start = new Date(startDate);
  const now = new Date();
  const daysSinceStart =
    Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  const daysStreak = dates.length;

  return { totalApps, daysStreak, daysSinceStart, startDate };
}
