import { APP_CONFIG } from "@/lib/config";
import { profile, portfolioProjects } from "@/data/proposal";
import { ProjectCard } from "@/components/proposal/project-card";
import { SkillsGrid } from "@/components/proposal/skills-grid";

export default function ProposalPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <div className="max-w-4xl mx-auto px-5 py-8 space-y-10">

        {/* ── Section 1: Hero — dark panel ── */}
        <section
          className="relative rounded-2xl overflow-hidden"
          style={{ background: "oklch(0.08 0.015 var(--primary-h, 285))" }}
        >
          {/* Radial violet glow from top */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.55 0.22 285 / 0.20), transparent 70%)",
            }}
          />

          <div className="relative z-10 px-7 pt-8 pb-0">
            {/* "Built this demo for Swave Elevate" badge — mandatory */}
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/10 px-3 py-1.5 rounded-full mb-6">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              <span className="text-xs font-mono tracking-widest uppercase text-white/60">
                Built this demo for {APP_CONFIG.projectName}
              </span>
            </div>

            {/* Muted role prefix */}
            <p className="font-mono text-xs tracking-widest uppercase text-white/40 mb-3">
              UI / UX Polish · React → SwiftUI
            </p>

            {/* Name headline */}
            <h1 className="text-5xl md:text-6xl tracking-tight leading-none mb-4">
              <span className="font-light text-white/70">Hi, I&apos;m</span>{" "}
              <span
                className="font-black"
                style={{
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {profile.name}
              </span>
            </h1>

            {/* Tailored value prop */}
            <p className="text-base md:text-lg text-white/65 max-w-2xl leading-relaxed mb-8">
              {profile.tagline}
            </p>
          </div>

          {/* Stats shelf */}
          <div
            className="relative z-10 border-t px-7 py-5"
            style={{
              borderColor: "oklch(1 0 0 / 0.08)",
              background: "oklch(1 0 0 / 0.04)",
            }}
          >
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "24+", label: "Projects Shipped" },
                { value: "< 48hr", label: "Demo Turnaround" },
                { value: "15+", label: "Industries" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-bold"
                    style={{
                      background: "var(--gradient-primary)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/50 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 2: Proof of Work ── */}
        <section className="space-y-4">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            Proof of Work
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Relevant Projects
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tech={project.tech}
                relevance={project.relevance}
                outcome={project.outcome}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>
        </section>

        {/* ── Section 3: How I Work ── */}
        <section className="space-y-4">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            Process
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            How I Work
          </h2>

          <div className="grid gap-3 sm:grid-cols-2">
            {profile.approach.map((step, i) => (
              <div
                key={step.title}
                className="glass-surface p-5 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-xs tracking-widest uppercase"
                    style={{ color: "oklch(0.55 0.22 285 / 0.8)" }}
                  >
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  {[
                    "Day 1",
                    "Days 2–3",
                    "Days 4–10",
                    "Final Day",
                  ][i] && (
                    <span className="font-mono text-xs text-muted-foreground/60">
                      {["Day 1", "Days 2–3", "Days 4–10", "Final Day"][i]}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 4: Skills Grid ── */}
        <section className="space-y-4">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            Tech Stack
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            What I Build With
          </h2>
          <SkillsGrid categories={profile.skillCategories} />
        </section>

        {/* ── Section 5: CTA — dark panel ── */}
        <section
          className="relative rounded-2xl overflow-hidden text-center"
          style={{ background: "oklch(0.08 0.015 var(--primary-h, 285))" }}
        >
          {/* Bottom glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 100%, oklch(0.72 0.20 320 / 0.18), transparent 70%)",
            }}
          />

          <div className="relative z-10 px-8 py-12 space-y-4">
            {/* Pulsing availability indicator */}
            <div className="flex items-center justify-center gap-2">
              <span className="relative inline-flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: "var(--success)" }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ background: "var(--success)" }}
                />
              </span>
              <span
                className="text-sm"
                style={{
                  color: "color-mix(in oklch, var(--success) 80%, white)",
                }}
              >
                Currently available for new projects
              </span>
            </div>

            {/* Headline — tailored to Swave */}
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Your prototype is already good.
              <br />
              <span
                style={{
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Let&apos;s make it feel premium.
              </span>
            </h2>

            {/* Body — specific to Swave */}
            <p className="text-white/65 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
              The demo in Tab 1 is my take on Swave Elevate with glassmorphism
              surfaces and spring-physics interactions. The real polish pass
              would start from your actual screens — and deliver SwiftUI-ready
              specs alongside the React implementation.
            </p>

            {/* Binary CTA */}
            <p className="text-white/50 text-sm pt-1">
              10-minute call or I can send a 2-screen before/after — your pick.
            </p>

            {/* Primary action — text, not a dead-end button */}
            <p
              className="text-lg font-semibold pt-1"
              style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Reply on Upwork to start
            </p>

            {/* Back link to demo */}
            <a
              href="/"
              className="inline-flex items-center gap-1 text-sm text-white/40 hover:text-white/60 transition-colors"
              style={{ transitionDuration: "var(--dur-fast)" }}
            >
              Back to the demo
            </a>

            {/* Signature */}
            <p
              className="pt-4 text-sm text-white/30 border-t"
              style={{ borderColor: "oklch(1 0 0 / 0.08)" }}
            >
              -- Humam
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
