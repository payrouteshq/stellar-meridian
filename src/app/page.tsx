import { Button } from "@/components/ui/button";
import { Code2, Shield, Package, Bot, Globe } from "lucide-react";

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
    >
      <line
        x1="100"
        y1="20"
        x2="100"
        y2="180"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="square"
      />
      <path
        d="M 100,30 A 70,70 0 0,0 100,170 A 45,70 0 0,1 100,30 Z"
        fill="currentColor"
      />
      <path
        d="M 100,30 A 70,70 0 0,1 100,170"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="square"
      />
    </svg>
  );
}

const primitives = [
  {
    icon: Code2,
    name: "TypeScript SDK",
    label: "@meridian/stellar-core",
    description:
      "issueAsset(), approveHolder(), freezeHolder(), clawbackTokens(), distributeTokens(), the full regulated asset lifecycle in clean TypeScript primitives",
    span: "sm:col-span-2",
  },
  {
    icon: Shield,
    name: "Soroban Contracts",
    label: "transfer restriction + distribution",
    description:
      "allowlist enforcement, lockup periods and proportional distributions, compiled Rust contracts ready to deploy on Stellar mainnet",
    span: "sm:col-span-2",
  },
  {
    icon: Package,
    name: "shadcn Registry",
    label: "npx shadcn add @meridian/...",
    description:
      "install asset management components the same way you install any UI component. you own the code permanently. no vendor lock-in.",
    span: "sm:col-span-2",
  },
  {
    icon: Bot,
    name: "MCP Server",
    label: "meridian-mcp",
    description:
      "AI agents can issue assets, approve investors and distribute returns autonomously. the first MCP server for regulated asset management on Stellar.",
    span: "sm:col-span-3",
  },
  {
    icon: Globe,
    name: "WordPress Plugin",
    label: "meridian for wordpress",
    description:
      "a reference implementation for non-technical operators. real estate syndicators, investment clubs and crowdfunding platforms on WordPress can issue tokens, manage investors and distribute returns, without writing code. same primitives. different surface.",
    span: "sm:col-span-3",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="flex items-center gap-2.5">
          <LogoMark className="h-5 w-auto text-foreground" />
          <span className="text-sm font-semibold tracking-[0.2em] uppercase">
            Meridian
          </span>
        </div>
        <nav className="flex items-center gap-1.5">
          <Button variant="ghost" size="sm" asChild>
            <a href="#">Docs</a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="https://github.com/payrouteshq/stellar-meridian">GitHub</a>
          </Button>
        </nav>
      </header>

      <section className="flex flex-col items-center text-center pt-44 pb-32 px-6">
        <div className="max-w-2xl w-full flex flex-col items-center">
          <LogoMark className="h-14 w-auto text-foreground mb-10" />

          <p className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground mb-5">
            The API is the UI.
          </p>

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] mb-5">
            The headless tokenization framework for Stellar
          </h1>

          <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-lg">
            composable primitives for issuing, managing and transferring
            regulated assets on Stellar. agent-ready. headless by default. any
            surface you want on top.
          </p>

          <div className="w-full max-w-sm mb-8">
            <div className="flex items-center gap-3 rounded-lg border border-border bg-muted px-4 py-3">
              <span className="text-muted-foreground text-sm font-mono select-none">
                $
              </span>
              <code className="text-sm font-mono text-foreground">
                npx shadcn add @meridian/asset-issuer
              </code>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button asChild>
              <a href="#">Read the docs</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/payrouteshq/stellar-meridian">
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground mb-2">
              Four primitives.
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">
              Everything you need. Nothing you don&apos;t.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-6 gap-px bg-border border border-border rounded-xl overflow-hidden">
            {primitives.map(
              ({ icon: Icon, name, label, description, span }) => (
                <div
                  key={name}
                  className={`bg-background p-8 flex flex-col gap-5 ${span}`}
                >
                  <Icon
                    className="size-4 text-muted-foreground"
                    strokeWidth={1.5}
                  />
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-sm font-semibold">{name}</h3>
                    <p className="text-xs font-mono text-muted-foreground">
                      {label}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-5 w-auto text-foreground" />
              <span className="text-sm font-semibold tracking-[0.2em] uppercase">
                Meridian
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              built for the Stellar ecosystem
            </p>
          </div>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Docs
            </a>
            <a
              href="https://github.com/payrouteshq/stellar-meridian"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              SCF
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
