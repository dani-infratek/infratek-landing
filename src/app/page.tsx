/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ─── HEADER ─── */}
      <header className="sticky top-0 z-50 bg-[var(--color-cream)]/95 backdrop-blur-sm border-b border-[var(--color-cream-dark)]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <path
                d="M20 4L4 16V36H16V26H24V36H36V16L20 4Z"
                stroke="#D94F3D"
                strokeWidth="2.5"
                fill="none"
              />
              <path d="M14 20H26M20 14V26" stroke="#D94F3D" strokeWidth="2" />
            </svg>
            <span className="text-xl font-semibold tracking-wide text-[var(--color-charcoal)]">
              INFRATEK<span className="text-[var(--color-accent)]">.AI</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-charcoal-light)]">
            <a href="#how" className="hover:text-[var(--color-accent)] transition">
              How It Works
            </a>
            <a href="#projects" className="hover:text-[var(--color-accent)] transition">
              Projects
            </a>
            <a href="#vision" className="hover:text-[var(--color-accent)] transition">
              Vision
            </a>
            <a href="#pricing" className="hover:text-[var(--color-accent)] transition">
              Pricing
            </a>
            <a href="#team" className="hover:text-[var(--color-accent)] transition">
              Team
            </a>
          </nav>
          <a
            href="#waitlist"
            className="bg-[var(--color-accent)] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[var(--color-accent-dark)] transition"
          >
            Join Waitlist
          </a>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-charcoal-light)] mb-6">
          Beta launching 2026 · Early Access
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6 text-[var(--color-charcoal)]">
          Build Your Own Engineering Tools
          <br />
          <span className="text-[var(--color-accent)]">with AI</span>
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-charcoal-light)] max-w-2xl mx-auto mb-10 leading-relaxed">
          The platform where construction professionals create custom AI
          applications — from budget estimates to 3D models — without writing
          code. <em>Vibe Engineering is here.</em>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#waitlist"
            className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[var(--color-accent-dark)] transition shadow-lg shadow-[var(--color-accent)]/20"
          >
            Get Early Access →
          </a>
          <a
            href="#vision"
            className="border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] px-8 py-4 rounded-lg text-lg font-medium hover:bg-[var(--color-charcoal)] hover:text-white transition"
          >
            Read Our Master Plan
          </a>
        </div>
      </section>

      {/* ─── METRICS BAR ─── */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { metric: "15+", label: "Years in BIM/VDC" },
            { metric: "$2.5M", label: "Documented ROI" },
            { metric: "50+", label: "Professionals Trained" },
            { metric: "14", label: "Active Dashboards" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl md:text-4xl font-bold text-[var(--color-accent)]">
                {item.metric}
              </p>
              <p className="text-sm text-[var(--color-charcoal-light)] mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how" className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-charcoal-light)] mb-4">
          How It Works
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-[var(--color-charcoal)]">
          From Conversation to Custom Tool
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              step: "1",
              title: "Tell Us Your Problem",
              desc: "Start a conversation via WhatsApp or the platform. Describe your workflow, upload PDFs, share your project challenges. Our agents listen and learn.",
              icon: "💬",
            },
            {
              step: "2",
              title: "We Build Your Tool",
              desc: "Our AI agents design a custom application tailored to your specific needs — budget trackers, quantity takeoffs, schedule monitors, BIM processors.",
              icon: "⚡",
            },
            {
              step: "3",
              title: "It Works For You 24/7",
              desc: "Your tool monitors, processes, alerts, and reports. It learns your patterns, aligns with project objectives, and becomes more useful every day.",
              icon: "🚀",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="text-sm text-[var(--color-accent)] font-semibold mb-2">
                Step {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-charcoal)]">
                {item.title}
              </h3>
              <p className="text-[var(--color-charcoal-light)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projects" className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-charcoal-light)] mb-4">
            Built on INFRATEK
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[var(--color-charcoal)]">
            Real Tools, Real Projects
          </h2>
          <p className="text-[var(--color-charcoal-light)] mb-16 max-w-2xl">
            Every tool below was created on our platform. Each one solves a
            specific problem for a real company.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "WARI",
                tagline: "AI Employee for Construction",
                desc: "Autonomous agent that monitors projects 24/7. Reads drawings, tracks budgets, alerts risks, documents everything in La Plaza — the social feed for construction intelligence.",
                status: "In Development",
              },
              {
                name: "Jarvis / BIMSearch",
                tagline: "RFP Intelligence System",
                desc: "Scans government portals (SAM.gov, state procurement) for BIM/VDC opportunities. Qualifies leads, scores relevance, and delivers them to your pipeline.",
                status: "Live — Paid Client",
              },
              {
                name: "WAGI",
                tagline: "Construction Intelligence Platform",
                desc: "Web Assembly AI platform where project data flows between agents. Cost tracking, planning, scheduling — all connected through a common data environment.",
                status: "In Development",
              },
              {
                name: "Your Tool",
                tagline: "Built for your specific workflow",
                desc: "Quantity takeoffs? Schedule optimization? Document processing? Compliance checking? Tell us your problem and we'll build the solution on our platform.",
                status: "Join the Waitlist →",
              },
            ].map((project) => (
              <div
                key={project.name}
                className="rounded-xl border border-[var(--color-cream-dark)] p-8 hover:border-[var(--color-accent)]/30 transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-[var(--color-charcoal)]">
                    {project.name}
                  </h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      project.status.includes("Live")
                        ? "bg-green-100 text-green-700"
                        : project.status.includes("Join")
                        ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-[var(--color-accent)] text-sm font-medium mb-3">
                  {project.tagline}
                </p>
                <p className="text-[var(--color-charcoal-light)] leading-relaxed">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE VISION / MASTER PLAN ─── */}
      <section id="vision" className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-charcoal-light)] mb-4">
          Our Master Plan
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-[var(--color-charcoal)]">
          What We Believe
        </h2>

        <div className="space-y-6 text-[var(--color-charcoal)] leading-relaxed text-lg">
          <p>
            Before we tell you <em>how</em>, we need to tell you <em>why</em>.
          </p>

          <p>
            The construction industry is a $13 trillion global machine running
            on processes that haven't fundamentally changed in decades. The
            rework, the busted budgets, the blown schedules — these aren't
            unavoidable costs. They're data problems. And data problems are
            solvable.
          </p>

          <p>
            We believe that project managers and superintendents should be
            strategic leaders, not full-time firefighters. Your expertise should
            solve the unique challenges of a project — not get buried in
            spreadsheets and paperwork.
          </p>

          <h3 className="text-2xl font-semibold pt-8 text-[var(--color-charcoal)]">
            Stage 1: We Start Where It Hurts Most
          </h3>
          <p className="text-[var(--color-accent)] italic">
            "The Conductor's Hat"
          </p>
          <p>
            Each project needs ONE operator — a person who puts on the
            conductor's hat and learns to pilot the AI system. It's not about
            replacing humans. It's about giving every professional the power to
            build tools that were impossible before.
          </p>

          <h3 className="text-2xl font-semibold pt-8 text-[var(--color-charcoal)]">
            Stage 2: The Platform Opens
          </h3>
          <p>
            Like Replit democratized coding, INFRATEK democratizes engineering
            software. You don't need a development team. You need a conversation
            and a clear objective. Our agents handle the rest.
          </p>

          <h3 className="text-2xl font-semibold pt-8 text-[var(--color-charcoal)]">
            Stage 3: The Ecosystem
          </h3>
          <p>
            A marketplace of AI tools built by the industry, for the industry.
            The best quantity takeoff agent. The best schedule optimizer. The
            best compliance checker. All sharing data through a common
            environment, all improving together.
          </p>

          <h3 className="text-2xl font-semibold pt-8 text-[var(--color-charcoal)]">
            Stage 4: The Future (7-10 Years)
          </h3>
          <p>
            Every construction software company will sell agents, not
            applications. Autodesk, Procore, Trimble — they'll all become agent
            companies. INFRATEK is building this future <em>today</em>.
          </p>

          <div className="border-l-4 border-[var(--color-accent)] pl-6 py-2 mt-8">
            <p className="italic">
              "If you've ever watched a brilliant superintendent spend their day
              buried in paperwork instead of leading... if you've ever wondered
              why construction productivity has gone <em>backward</em> while
              every other industry has surged forward... if you believe this
              essential, civilization-building industry deserves better than the
              status quo — then let's build it together."
            </p>
          </div>

          <p className="font-semibold text-xl pt-4">Let's not waste it.</p>
        </div>
      </section>

      {/* ─── ECONOMICS ─── */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-[var(--color-charcoal)]">
            The Economics of AI Agents
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[var(--color-cream-dark)]">
                  <th className="py-4 pr-6 text-[var(--color-charcoal-light)] text-sm uppercase tracking-wider">
                    Metric
                  </th>
                  <th className="py-4 pr-6 text-[var(--color-charcoal-light)] text-sm uppercase tracking-wider">
                    Traditional
                  </th>
                  <th className="py-4 text-[var(--color-accent)] text-sm uppercase tracking-wider">
                    INFRATEK.AI
                  </th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-charcoal)]">
                {[
                  ["Time to Build a Tool", "3-6 Months", "Days"],
                  ["Cost Structure", "Dev Team ($150K+/yr)", "Platform Fee"],
                  ["Customization", "Generic SaaS", "Built for YOUR workflow"],
                  ["Scalability", "Hiring Bottleneck", "On Demand"],
                  ["Data Integration", "Manual / Siloed", "Automatic / Connected"],
                ].map(([metric, trad, infra]) => (
                  <tr
                    key={metric}
                    className="border-b border-[var(--color-cream-dark)]"
                  >
                    <td className="py-4 pr-6 font-medium">{metric}</td>
                    <td className="py-4 pr-6 text-[var(--color-charcoal-light)]">
                      {trad}
                    </td>
                    <td className="py-4 font-semibold text-[var(--color-accent)]">
                      {infra}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-charcoal-light)] mb-4 text-center">
          Early Access
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center text-[var(--color-charcoal)]">
          Be First In Line
        </h2>
        <p className="text-[var(--color-charcoal-light)] text-center mb-16 max-w-xl mx-auto">
          We're opening beta access in waves. Sign up to reserve your spot.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Waitlist */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-[var(--color-cream-dark)]">
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-charcoal-light)] mb-4">
              You're here
            </p>
            <h3 className="text-2xl font-semibold mb-1 text-[var(--color-charcoal)]">
              Waitlist
            </h3>
            <p className="text-3xl font-bold text-[var(--color-charcoal)] mb-2">
              Free
            </p>
            <p className="text-sm text-[var(--color-charcoal-light)] mb-6">
              7-day free trial upon access
            </p>
            <ul className="space-y-3 text-sm text-[var(--color-charcoal)]">
              {[
                "Position based on signup order and referrals",
                "Access opens in waves — 2026",
                "50 credits to explore the platform",
                "Share your referral link — each signup moves you up 5 spots",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Founding Member */}
          <div className="bg-white rounded-xl p-8 shadow-md border-2 border-[var(--color-accent)] relative">
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-accent)] font-semibold mb-4">
              50 spots only
            </p>
            <h3 className="text-2xl font-semibold mb-1 text-[var(--color-charcoal)]">
              Founding Member
            </h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-sm line-through text-[var(--color-charcoal-light)]">
                $199
              </span>
              <span className="text-3xl font-bold text-[var(--color-accent)]">
                $99
              </span>
            </div>
            <p className="text-sm text-[var(--color-charcoal-light)] mb-6">
              + LinkedIn repost of our demo
            </p>
            <ul className="space-y-3 text-sm text-[var(--color-charcoal)]">
              {[
                "Skip the waitlist — immediate beta access",
                "100 credits to build and test your tools",
                "Hands-on support from the founder",
                "50% off your subscription, permanently",
                "Direct input on what we build next",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#waitlist"
              className="block mt-8 bg-[var(--color-accent)] text-white text-center py-3 rounded-lg font-medium hover:bg-[var(--color-accent-dark)] transition"
            >
              Claim Your Spot — $99 →
            </a>
          </div>

          {/* Design Partner */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-[var(--color-cream-dark)]">
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-charcoal-light)] mb-4">
              5 partnerships only
            </p>
            <h3 className="text-2xl font-semibold mb-1 text-[var(--color-charcoal)]">
              Design Partner
            </h3>
            <p className="text-3xl font-bold text-[var(--color-charcoal)] mb-2">
              $1K/mo
            </p>
            <p className="text-sm text-[var(--color-charcoal-light)] mb-6">
              Custom engagement per user
            </p>
            <ul className="space-y-3 text-sm text-[var(--color-charcoal)]">
              {[
                "Custom workflow integration for your team",
                "Dedicated human operator (the founder)",
                "Unlimited credits during partnership",
                "Tools designed specifically for your projects",
                "50% off subscription for 24 months",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="mailto:sergio@infratek.ai?subject=Design%20Partner%20Inquiry"
              className="block mt-8 border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] text-center py-3 rounded-lg font-medium hover:bg-[var(--color-charcoal)] hover:text-white transition"
            >
              Book a Discovery Call →
            </a>
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section id="team" className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-charcoal-light)] mb-4">
            The Team
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-[var(--color-charcoal)]">
            Built by Someone Who's Been on the Jobsite
          </h2>

          <div className="text-left bg-[var(--color-cream)] rounded-xl p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-[var(--color-charcoal)]">
              Sergio Villanueva Meyer
            </h3>
            <p className="text-[var(--color-accent)] font-medium mb-6">
              Founder & CEO
            </p>
            <ul className="space-y-3 text-[var(--color-charcoal)]">
              {[
                "15+ years leading BIM/VDC implementation across LATAM and USA",
                "Stanford VDC Certificate · CPMAI · B.Arch + M.S. Construction Management (University of Florida)",
                "Built the FIRST BIM department in Peru (COSAPI) — $2.5M documented ROI, 50+ professionals trained",
                "Multi-agent AI systems architect — pioneering agentic infrastructure for AEC",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[var(--color-accent)] mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-[var(--color-cream-dark)] mt-8 pt-6">
              <p className="text-[var(--color-charcoal-light)] leading-relaxed">
                Sergio has lived the 3 AM spreadsheet panic. He's built BIM
                departments from zero, trained teams across continents, and
                documented millions in ROI. Now he's building the platform that
                puts that same power in everyone's hands — powered by AI agents
                that never sleep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COURSE TEASER ─── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-[var(--color-charcoal)] text-white rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent-light)] mb-3">
              Coming Soon
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Machine Learning for Construction
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              From a single neuron to prompt engineering. SVG, gradient descent,
              normalization, optimization — explained for construction
              professionals. Context engineering for the AEC industry.
            </p>
            <a
              href="#waitlist"
              className="inline-block bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[var(--color-accent-dark)] transition"
            >
              Get Notified →
            </a>
          </div>
          <div className="text-6xl md:text-8xl opacity-20">🧠</div>
        </div>
      </section>

      {/* ─── WAITLIST ─── */}
      <section
        id="waitlist"
        className="bg-white py-24"
      >
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[var(--color-charcoal)]">
            Join the Waitlist
          </h2>
          <p className="text-[var(--color-charcoal-light)] mb-8">
            We're opening access in waves. Sign up to reserve your spot.
            <br />
            Refer colleagues to move up — each referral jumps you 5 positions.
          </p>
          {/* Placeholder for GetWaitlist embed */}
          <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-cream-dark)]">
            <p className="text-[var(--color-charcoal-light)] text-sm mb-4">
              Waitlist widget loading...
            </p>
            <p className="text-xs text-[var(--color-charcoal-light)]">
              Powered by{" "}
              <a
                href="https://getwaitlist.com"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                getwaitlist.com
              </a>
            </p>
          </div>
          <p className="mt-6 text-sm text-[var(--color-charcoal-light)]">
            Need a custom integration for your team?{" "}
            <a
              href="mailto:sergio@infratek.ai"
              className="text-[var(--color-accent)] underline"
            >
              Book a Discovery Call
            </a>
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 px-6 text-center text-sm text-[var(--color-charcoal-light)]">
        <p>
          © 2026{" "}
          <a
            href="/"
            className="text-[var(--color-accent)] hover:underline"
          >
            INFRATEK LLC
          </a>
          . Designing agentic infrastructure for AEC.
        </p>
        <div className="flex justify-center gap-4 mt-3">
          <a
            href="https://linkedin.com/company/infratek"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--color-accent)] transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sergio@infratek.ai"
            className="hover:text-[var(--color-accent)] transition"
          >
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
