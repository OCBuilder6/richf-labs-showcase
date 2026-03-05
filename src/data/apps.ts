export interface App {
  id: string;
  name: string;
  date: string;
  description: string;
  url: string;
  tags: string[];
  gradient: string;
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
