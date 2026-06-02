const exploreCards = [
  {
    icon: "🎯",
    title: "Opportunities",
    text: "Find careers, colleges, scholarships, jobs, internships and programs.",
    href: "/opportunities",
  },
  {
    icon: "🤝",
    title: "Guidance",
    text: "Get help from mentors and volunteers. Ask questions, get direction.",
    href: "/guidance",
  },
  {
    icon: "❤️",
    title: "Support a Student",
    text: "Mentors, sponsors and volunteers can support students.",
    href: "/support",
  },
  {
    icon: "👥",
    title: "Groups",
    text: "Join community groups, sessions and peer learning spaces.",
    href: "/groups",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fbf9ff] text-[#081044]">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-[#fbf9ff]/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 flex items-center justify-between">
          <a href="/" className="leading-tight">
            <div className="text-2xl font-black tracking-tight">
              ✨ Dear Future
            </div>
            <div className="text-xs font-semibold text-slate-500">
              Opportunities. Guidance. Growth.
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-bold">
            <a className="text-amber-500" href="/">Home</a>
            <a href="/opportunities">Opportunities</a>
            <a href="/guidance">Guidance</a>
            <a href="/support">Support a Student</a>
            <a href="/groups">Groups</a>
            <a href="/about">About Us</a>
          </nav>

          <a
            href="/guidance"
            className="hidden md:block rounded-full bg-[#07114a] px-7 py-4 text-white font-bold shadow-lg"
          >
            Join Us
          </a>

          <button className="md:hidden text-3xl font-black">☰</button>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 pt-8 md:pt-14">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-xs font-bold text-purple-700">
              💜 For Students. By Youth. With a Community.
            </div>

            <h1 className="mt-7 text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              Talent is everywhere.
              <span className="block text-amber-400">
                Opportunity isn&apos;t.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-slate-700 font-medium">
              We show what&apos;s possible. We teach how to reach it.
            </p>

            <p className="mt-3 max-w-xl text-slate-600 leading-relaxed">
              Discover careers, colleges, scholarships, skill programs, jobs and
              internships. Learn how to access them independently.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/opportunities"
                className="rounded-full bg-[#07114a] px-7 py-4 text-white font-black shadow-xl text-center"
              >
                ⚙️ Explore Opportunities →
              </a>
              <a
                href="/guidance"
                className="rounded-full bg-white px-7 py-4 text-[#07114a] font-black shadow-lg border border-slate-100 text-center"
              >
                👥 Get Guidance →
              </a>
            </div>

            <div className="mt-7 flex items-center gap-4">
              <div className="flex -space-x-3">
                {["A", "D", "M", "S", "R"].map((x) => (
                  <div
                    key={x}
                    className="h-9 w-9 rounded-full bg-white border-2 border-white shadow grid place-items-center text-xs font-black"
                  >
                    {x}
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-slate-700">
                Join 1,000+ students already exploring their future
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] min-h-[360px] md:min-h-[460px] bg-gradient-to-br from-purple-100 via-white to-amber-100 shadow-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#ffffff_0%,transparent_35%)]" />
            <div className="relative h-full p-6 md:p-10 flex items-end">
              <div className="w-full rounded-[1.7rem] bg-white/80 backdrop-blur p-6 shadow-xl">
                <div className="text-7xl mb-5">🎓</div>
                <h3 className="text-3xl font-black">Students building futures</h3>
                <p className="mt-3 text-slate-600 font-medium">
                  Exposure, guidance, community and practical direction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-12">
        <h2 className="text-3xl font-black mb-6">What We Do 💜</h2>

        <div className="grid lg:grid-cols-2 gap-6">
          <MissionCard
            color="green"
            icon="🌍"
            number="1. EXPOSURE"
            title="Explore Future Pathways"
            text="Helping students discover careers, colleges, scholarships, skill programs and more."
            items={["Careers", "Colleges", "Scholarships", "Skill Programs", "Jobs & Internships"]}
          />

          <MissionCard
            color="purple"
            icon="🚀"
            number="2. SKILL & DIRECTION"
            title="Build Skills & Direction"
            text="Teaching students how to find, apply and access opportunities independently."
            items={["Build Skills", "Create Resumes", "Find Opportunities", "Apply Effectively", "Navigate Systems"]}
          />
        </div>
      </section>

      {/* EXPLORE */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-8">
        <h2 className="text-center text-3xl font-black">Explore Dear Future</h2>

        <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {exploreCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group rounded-[1.8rem] bg-white p-6 shadow-sm border border-slate-100 hover:-translate-y-1 transition"
            >
              <div className="h-14 w-14 rounded-full bg-purple-100 grid place-items-center text-3xl">
                {card.icon}
              </div>
              <h3 className="mt-5 text-xl font-black">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 font-medium">
                {card.text}
              </p>
              <div className="mt-5 text-2xl group-hover:translate-x-1 transition">
                →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-5 md:px-10 py-12">
        <h2 className="text-center text-3xl font-black">How It Works</h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Step icon="🔭" title="Discover" text="Explore opportunities and future pathways." />
          <Step icon="📖" title="Prepare" text="Build skills, profiles, documents and confidence." />
          <Step icon="📈" title="Progress" text="Apply, connect, learn and keep moving forward." />
        </div>
      </section>

      {/* IMPACT */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-8">
        <div className="rounded-[2rem] bg-[#07114a] text-white p-7 md:p-10 shadow-xl">
          <h2 className="text-2xl font-black mb-7">Our Impact and growing</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <Impact number="1,200+" label="Students Reached" />
            <Impact number="150+" label="Workshops Conducted" />
            <Impact number="60+" label="Schools & NGO Partners" />
            <Impact number="25+" label="Mentors Onboarded" />
            <Impact number="200+" label="Opportunities Shared" />
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-10">
        <div className="rounded-[2rem] bg-white p-7 md:p-10 shadow-sm border border-slate-100">
          <h2 className="text-center text-3xl font-black">Built by a Community</h2>
          <p className="mt-3 text-center text-slate-600 font-medium">
            Dear Future is a community of people working together for students.
          </p>

          <div className="mt-8 grid md:grid-cols-4 gap-6">
            <Community title="Founding Member" value="Deeaa Luthra" text="Youth leader who helped launch Dear Future after working with 1,200+ students." />
            <Community title="25+ Mentors" value="Professionals & educators" text="People who volunteer their time, knowledge and experience." />
            <Community title="50+ Volunteers" value="Students & individuals" text="People who support workshops, outreach, content and events." />
            <Community title="Partner Schools & NGOs" value="Growing network" text="Organizations helping us reach more students." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 md:px-10 py-10">
        <div className="rounded-[2.5rem] bg-[#07114a] text-white p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center shadow-2xl">
          <div className="text-6xl">🚀</div>
          <div>
            <h2 className="text-3xl font-black">
              We show what&apos;s possible.
              <br />
              We teach how to reach it.
            </h2>
          </div>
          <a
            href="/guidance"
            className="rounded-full bg-amber-400 text-[#07114a] px-8 py-4 font-black text-center"
          >
            Get Involved →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-5 md:px-10 py-10 border-t border-slate-100">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="text-2xl font-black">✨ Dear Future</div>
            <p className="text-sm text-slate-500 font-semibold">
              Opportunities. Guidance. Growth.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm font-bold">
            <a href="/">Home</a>
            <a href="/opportunities">Opportunities</a>
            <a href="/guidance">Guidance</a>
            <a href="/support">Support a Student</a>
            <a href="/groups">Groups</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function MissionCard({
  color,
  icon,
  number,
  title,
  text,
  items,
}: {
  color: "green" | "purple";
  icon: string;
  number: string;
  title: string;
  text: string;
  items: string[];
}) {
  const theme =
    color === "green"
      ? "from-emerald-50 to-white text-emerald-600"
      : "from-purple-50 to-white text-purple-600";

  return (
    <div className={`rounded-[2rem] bg-gradient-to-br ${theme} p-6 md:p-8 border border-slate-100 shadow-sm`}>
      <div className="flex gap-5 items-start">
        <div className="h-20 w-20 rounded-full bg-white grid place-items-center text-4xl shadow-sm">
          {icon}
        </div>

        <div>
          <p className="font-black text-sm">{number}</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-black text-[#081044]">
            {title}
          </h3>
          <p className="mt-3 text-slate-600 font-medium leading-relaxed">
            {text}
          </p>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-2 md:grid-cols-5 gap-3">
        {items.map((item) => (
          <div key={item} className="bg-white rounded-2xl p-4 text-center shadow-sm">
            <div className="text-2xl mb-2">•</div>
            <p className="text-xs font-black text-[#081044]">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Step({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="rounded-[1.7rem] bg-white p-6 text-center shadow-sm border border-slate-100">
      <div className="mx-auto h-16 w-16 rounded-full bg-purple-100 grid place-items-center text-3xl">
        {icon}
      </div>
      <h3 className="mt-4 font-black text-lg">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 font-medium">{text}</p>
    </div>
  );
}

function Impact({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-black">{number}</div>
      <div className="mt-2 text-sm text-slate-300 font-semibold">{label}</div>
    </div>
  );
}

function Community({
  title,
  value,
  text,
}: {
  title: string;
  value: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl bg-[#fbf9ff] p-5">
      <p className="text-sm font-black text-purple-600">{title}</p>
      <h3 className="mt-2 text-lg font-black">{value}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 font-medium">
        {text}
      </p>
    </div>
  );
}