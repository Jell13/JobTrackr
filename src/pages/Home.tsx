import React from "react";
import Reveal from "../components/Reveal";

const EMPLOYERS = [
  "Google LLC", "Amazon.com Services LLC", "Microsoft Corporation",
  "Meta Platforms Inc.", "Apple Inc.", "Deloitte Consulting LLP",
  "Tesla Inc.", "Cognizant Technology Solutions", "Infosys Limited",
  "Capgemini America Inc.",
];

const Home = () => {
  return (
    <div className="w-full font-sans text-[#1E1B2E] bg-[#F8F9FC] overflow-x-hidden">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* Hero */}
      <section className="relative px-6 md:px-16 pt-20 pb-16">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #E7E8F0 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            maskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />

        <div className="relative flex flex-wrap items-center gap-16">
          <Reveal className="flex-1 min-w-[300px] basis-[480px] flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 self-start bg-white border border-[#E5E7EB] rounded-full px-3.5 py-1.5 text-xs font-semibold text-accent shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Live U.S. Department of Labor filing data
            </span>

            <h1 className="font-heading text-[clamp(38px,5.2vw,64px)] leading-[1.08] font-bold tracking-tight">
              <span className="text-[#1E1B2E]">Track every application.</span>
              <br />
              <span className="text-accent">Know who actually sponsors.</span>
            </h1>

            <p className="text-[17px] leading-relaxed text-[#6B7280] max-w-[480px]">
              One board for every application, interview, and offer — paired
              with real H-1B sponsorship history pulled straight from federal
              filings, explained in plain English.
            </p>

            <div className="flex gap-3.5 flex-wrap mt-1">
              <button className="group relative overflow-hidden bg-accent text-white font-semibold text-base pl-6.5 pr-5 py-3.5 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(79,70,229,0.4)]">
                <span className="absolute inset-0 bg-[#4338CA] -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
                <span className="relative z-10 flex items-center gap-2">
                  Get started free
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </button>

              <button className="group relative overflow-hidden border border-[#E5E7EB] text-[#1E1B2E] text-base pl-6.5 pr-5 py-3.5 rounded-lg cursor-pointer transition-all duration-300 hover:border-accent hover:-translate-y-0.5">
                <span className="absolute inset-0 bg-[#EEF2FF] -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-accent">
                  See how it works
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </span>
              </button>
            </div>
          </Reveal>

          <Reveal delay={150} className="flex-1 min-w-[300px] basis-[420px] relative h-[340px]">
            {/* back card */}
            <div className="absolute top-6 left-6 right-10 bottom-0 bg-white border border-[#E7E8F0] rounded-[14px] rotate-[-6deg] opacity-60" />
            {/* front card */}
            <div className="absolute top-0 left-0 right-6 bottom-6 bg-white border border-[#E7E8F0] rounded-[14px] rotate-[1.5deg] p-6.5 shadow-[0_20px_45px_rgba(16,24,40,0.12)]">
              <div className="flex items-center gap-2 mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                <span className="text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold">Sponsorship insight</span>
              </div>
              <div className="text-lg font-bold">Google LLC</div>
              <div className="text-sm text-[#6B7280] mb-4">Software Engineer</div>
              <div className="grid grid-cols-2 gap-3.5 mb-4">
                <div className="bg-[#F1F2F6] rounded-lg px-3 py-2.5">
                  <div className="text-[10px] uppercase tracking-wide text-[#9CA3AF] mb-0.5">Filings this year</div>
                  <div className="text-base font-bold">7,383</div>
                </div>
                <div className="bg-[#F1F2F6] rounded-lg px-3 py-2.5">
                  <div className="text-[10px] uppercase tracking-wide text-[#9CA3AF] mb-0.5">Certification rate</div>
                  <div className="text-base font-bold">99.4%</div>
                </div>
              </div>
              <div className="text-[13.5px] leading-relaxed text-[#374151] pt-3.5 border-t border-[#E7E8F0]">
                Google has an extremely strong, consistent H-1B sponsorship
                record — thousands of filings certified at a near-perfect
                rate.
              </div>
            </div>
            {/* floating badge */}
            <div className="absolute -top-4 -right-3 bg-white rounded-full shadow-[0_8px_20px_rgba(16,24,40,0.15)] px-3.5 py-2 flex items-center gap-1.5 rotate-[-3deg] border border-[#E7E8F0]">
              <svg className="w-3.5 h-3.5 text-[#047857]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="text-xs font-bold text-[#1E1B2E]">Certified</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Marquee */}
      <Reveal className="py-8 border-y border-[#E7E8F0] bg-white">
        <p className="text-center text-xs uppercase tracking-wider text-[#9CA3AF] font-semibold mb-5">
          Sponsorship data available for 56,226 real employers, including
        </p>
        <div
          className="overflow-hidden"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex gap-10 w-max" style={{ animation: "marquee 28s linear infinite" }}>
            {[...EMPLOYERS, ...EMPLOYERS].map((name, i) => (
              <span key={i} className="text-[15px] font-semibold text-[#6B7280] whitespace-nowrap">
                {name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Stat band / why it matters */}
      <section className="relative overflow-hidden bg-[#241F45] px-6 md:px-16 py-24">
        <div className="absolute w-[420px] h-[420px] rounded-full bg-[#FFFFFF0D] blur-3xl -top-40 -right-40" />
        <div className="absolute w-[320px] h-[320px] rounded-full bg-[#FFFFFF0D] blur-3xl -left-32 bottom-0" />

        <Reveal className="relative max-w-[720px] mx-auto text-center flex flex-col gap-5">
          <h2 className="font-heading text-[clamp(28px,3.4vw,38px)] font-bold text-white leading-tight">
            Most job boards won't tell you the one thing that matters.
          </h2>
          <p className="text-base leading-[1.7] text-[#C7C2E8] max-w-[560px] mx-auto">
            If you need sponsorship, every application is a gamble. JobTrackr
            replaces the guessing with real federal filing records.
          </p>
        </Reveal>

        <Reveal delay={150} className="relative max-w-[760px] mx-auto mt-14 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#FFFFFF1F]">
          {[
            { n: "56,226", label: "Employers tracked" },
            { n: "426,952", label: "LCA filings analyzed" },
            { n: "100%", label: "Public DOL source data" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1.5 py-6 sm:py-0">
              <div className="font-heading text-4xl font-extrabold text-white">{stat.n}</div>
              <div className="text-[13px] text-[#9D97C4] uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Features — alternating editorial rows */}
      <section id="features" className="px-6 md:px-16 py-28 flex flex-col gap-28">
        <Reveal>
          <FeatureRow
            index="01"
            heading="Track every application"
            copy="A clear pipeline from first interest to signed offer — drag, drop, and never lose track of where you stand with any company."
            align="right"
            visual={<KanbanMock />}
            pills={["Wishlist", "Applied", "Interviewing", "Offer"]}
          />
        </Reveal>
        <Reveal>
          <FeatureRow
            index="02"
            heading="Real sponsorship data, not rumors"
            copy="Every number is pulled straight from U.S. Department of Labor H-1B disclosure filings — the same federal records employers are legally required to submit."
            align="left"
            visual={<DataMock />}
          />
        </Reveal>
        <Reveal>
          <FeatureRow
            index="03"
            heading="Explained in plain English"
            copy="No more squinting at spreadsheets. Each employer's history gets translated into a short, honest read of what it actually means for your application."
            align="right"
            visual={<ChatMock />}
          />
        </Reveal>
      </section>

      {/* How it works — connected timeline */}
      <section id="how-it-works" className="px-6 md:px-16 py-28 bg-white border-t border-b border-border">
        <Reveal>
          <h2 className="font-heading text-[clamp(28px,3.4vw,38px)] font-bold text-center mb-16">
            How it works
          </h2>
        </Reveal>

        <div className="relative max-w-160 mx-auto">
          <div className="absolute left-5.5 top-2 bottom-2 w-px bg-border" />
          <div className="flex flex-col gap-12">
            {[
              { n: "01", title: "Add a job you're applying to", body: "Drop in the company and role, same as any tracker." },
              { n: "02", title: "We match it against real filings", body: "That employer gets matched against public DOL H-1B sponsorship records." },
              { n: "03", title: "Get a clear explanation", body: "An honest, plain-English read of what the filing history actually means for you." },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 120} className="relative flex gap-6">
                <div className="relative z-10 w-11 h-11 shrink-0 rounded-full bg-accent text-white font-heading font-bold flex items-center justify-center">
                  {step.n}
                </div>
                <div className="pt-1.5">
                  <h3 className="font-heading text-[17px] font-bold mb-1.5">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section
        className="relative overflow-hidden px-6 md:px-16 py-28 text-center flex flex-col items-center gap-6"
        style={{ background: "radial-gradient(circle at 30% 20%, #352D64, #241F45 60%)" }}
      >
        <Reveal className="relative flex flex-col items-center gap-6">
          <h2 className="font-heading text-[clamp(26px,3.2vw,36px)] font-bold text-white max-w-130">
            Stop guessing. Start tracking smarter.
          </h2>
          <button className="group relative overflow-hidden bg-white text-accent font-bold text-base pl-7 pr-6 py-3.5 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(0,0,0,0.3)]">
            <span className="absolute inset-0 bg-[#EEF2FF] -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
            <span className="relative z-10 flex items-center gap-2">
              Get started free
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </button>
          <span className="text-[13px] text-[#9D97C4]">Free to get started — no setup required.</span>
        </Reveal>
      </section>

      <footer className="px-6 md:px-16 py-7 bg-white flex justify-between items-center flex-wrap gap-3 text-[13px] text-text-muted">
        <div>© JobTrackr</div>
        <div>Sponsorship data sourced from U.S. Department of Labor public LCA disclosure records.</div>
      </footer>
    </div>
  );
};

/* ---- local sub-components: alternating feature row + its small mockup visuals ---- */

type FeatureRowProps = {
  index: string;
  heading: string;
  copy: string;
  align: "left" | "right";
  visual: React.ReactNode;
  pills?: string[];
};

const FeatureRow = ({ index, heading, copy, align, visual, pills }: FeatureRowProps) => (
  <div className={`flex flex-wrap items-center gap-14 ${align === "left" ? "md:flex-row-reverse" : ""}`}>
    <div className="flex-1 min-w-70 basis-110 relative">
      <span className="absolute -top-10 -left-2 font-heading text-[110px] font-extrabold text-text-primary opacity-[0.05] select-none leading-none">
        {index}
      </span>
      <div className="relative flex flex-col gap-4">
        <h3 className="font-heading text-[26px] font-bold">{heading}</h3>
        <p className="text-[15.5px] leading-relaxed text-text-secondary max-w-105">{copy}</p>
        {pills && (
          <div className="flex gap-1.5 flex-wrap mt-1">
            {pills.map((p) => (
              <span key={p} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-bg-muted text-status-wishlist-text border border-border-strong">
                {p}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
    <div className="flex-1 min-w-70 basis-95">{visual}</div>
  </div>
);

const KanbanMock = () => (
  <div className="bg-white border border-border rounded-[14px] p-5 shadow-[0_8px_24px_rgba(16,24,40,0.06)] grid grid-cols-4 gap-3">
    {[
      { label: "Wishlist", color: "#475569", bg: "#F1F5F9" },
      { label: "Applied", color: "#1D4ED8", bg: "#EFF6FF" },
      { label: "Interviewing", color: "#B45309", bg: "#FFFBEB" },
      { label: "Offer", color: "#047857", bg: "#ECFDF5" },
    ].map((col) => (
      <div key={col.label} className="flex flex-col gap-2">
        <span className="text-[10px] font-bold uppercase" style={{ color: col.color }}>{col.label}</span>
        <div className="rounded-md h-10" style={{ background: col.bg }} />
        <div className="rounded-md h-10" style={{ background: col.bg, opacity: 0.6 }} />
      </div>
    ))}
  </div>
);

const DataMock = () => (
  <div className="bg-white border border-border rounded-[14px] p-6 shadow-[0_8px_24px_rgba(16,24,40,0.06)] flex flex-col gap-3">
    {["Amazon.com Services LLC", "Microsoft Corporation", "Meta Platforms Inc."].map((name) => (
      <div key={name} className="flex items-center justify-between border-b border-bg-muted pb-2.5 last:border-0 last:pb-0">
        <span className="text-sm font-semibold">{name}</span>
        <span className="text-xs font-bold text-[#047857] bg-[#ECFDF5] px-2 py-0.5 rounded-full">Certified</span>
      </div>
    ))}
  </div>
);

const ChatMock = () => (
  <div className="bg-white border border-border rounded-[14px] p-6 shadow-[0_8px_24px_rgba(16,24,40,0.06)]">
    <div className="flex items-center gap-2 mb-3">
      <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white text-[10px] font-bold">AI</span>
      <span className="text-xs font-semibold text-text-secondary">Sponsorship insight</span>
    </div>
    <p className="text-sm leading-relaxed text-[#374151]">
      "This employer has an extremely strong, consistent H-1B sponsorship
      record — thousands of filings certified at a near-perfect rate, most
      commonly for Software Engineer roles."
    </p>
  </div>
);

export default Home;