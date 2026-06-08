import { Button } from "@/components/ui/button";
import { Code2, Shield, Package, Bot, Globe } from "lucide-react";

function PayroutesLogo({ className }: { className?: string }) {
  return (
    <svg
      width="414"
      height="414"
      viewBox="0 0 414 414"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Payroutes"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M211.622 188.301C225.3 261.901 248.491 332.961 282.897 398.721C297.216 393.061 310.754 385.841 323.31 377.301C275.967 321.321 238.738 257.141 215.287 187.401C215.146 187.001 214.726 186.781 214.305 186.901C213.644 187.101 212.944 187.261 212.263 187.381C211.822 187.461 211.542 187.881 211.622 188.301Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M224.639 181.541C224.098 181.981 223.538 182.421 222.957 182.821C222.596 183.081 222.496 183.561 222.757 183.921C263.05 242.461 310.253 295.421 364.706 340.061C373.918 329.201 382.029 317.401 388.858 304.801C327.877 273.561 272.283 232.241 225.721 181.621C225.44 181.301 224.96 181.281 224.639 181.561V181.541Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M95.4871 221.741C125.567 208.061 154.846 192.381 183.264 174.961C189.813 170.941 196.321 166.841 202.79 162.621V69.9606H227.182C240.741 69.9606 252.216 80.5606 252.636 94.1006C253.057 108.161 241.722 119.741 227.723 119.741L210.901 119.641V162.621C217.369 166.821 223.878 170.941 230.447 174.961C286.361 209.221 345.68 236.781 407.823 255.581C411.788 239.341 413.811 222.361 413.671 204.881C412.77 90.9006 320.487 -0.279357 206.335 0.00064315C92.1827 0.280643 0 92.6606 0 206.561C0 223.441 2.02269 239.861 5.86781 255.581C36.4485 246.341 66.3483 234.981 95.4871 221.721V221.741Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M198.404 187.401C174.953 257.141 137.723 321.301 90.3803 377.301C102.937 385.861 116.475 393.081 130.794 398.741C150.02 361.981 165.761 323.581 178.277 283.981C188.151 252.761 196.041 220.781 202.069 188.341C202.149 187.901 201.869 187.501 201.428 187.421C200.727 187.281 200.046 187.121 199.365 186.941C198.965 186.821 198.524 187.041 198.404 187.441V187.401Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M190.714 182.801C190.133 182.401 189.572 181.981 189.052 181.521C188.731 181.241 188.251 181.281 187.95 181.581C141.388 232.201 85.8143 273.521 24.813 304.761C31.6421 317.361 39.7529 329.181 48.9652 340.041C103.418 295.381 150.621 242.421 190.914 183.901C191.155 183.541 191.074 183.041 190.714 182.801Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M206.054 328.481C201.729 356.761 195.34 384.761 187.029 412.201C193.538 412.821 200.146 413.141 206.835 413.141C213.524 413.141 220.113 412.821 226.622 412.201C218.331 384.761 211.942 356.761 207.596 328.481C207.456 327.581 206.175 327.581 206.034 328.481H206.054Z"
        fill="currentColor"
      />
    </svg>
  );
}

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
          <a href="https://payroutes.sh" className="flex items-center">
            <PayroutesLogo className="h-5 w-auto text-foreground" />
          </a>
          <span className="text-border select-none px-0.5">/</span>
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
            <a
              href="https://payroutes.sh"
              className="flex items-center gap-1.5 mt-1 group"
            >
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                by
              </span>
              <PayroutesLogo className="h-3.5 w-auto text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                Payroutes
              </span>
            </a>
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
