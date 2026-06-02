const exposureItems = [
  ["💼", "Careers"],
  ["🎓", "Colleges"],
  ["💰", "Scholarships"],
  ["💻", "Skill Programs"],
  ["🏢", "Jobs & Internships"],
];

const skillItems = [
  ["🧩", "Build Skills"],
  ["📄", "Create Resumes"],
  ["🔍", "Find Opportunities"],
  ["✈️", "Apply Effectively"],
  ["🧭", "Navigate Systems"],
];

const exploreCards = [
  ["🎯", "Opportunities", "Find careers, colleges, scholarships, jobs, internships & programs.", "/opportunities", "bg-[#FFF7E6]"],
  ["👥", "Guidance", "Get help from mentors and volunteers.", "/guidance", "bg-[#F3EEFF]"],
  ["❤️", "Support a Student", "Mentors, sponsors & volunteers can support students.", "/support", "bg-[#FFF0F5]"],
  ["👨‍👩‍👧‍👦", "Groups", "Join groups, sessions and peer learning spaces.", "/groups", "bg-[#EEF7FF]"],
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fbf9ff] text-[#07114a] pb-20 md:pb-0">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-[#fbf9ff]/95 backdrop-blur border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-4 flex items-center justify-between">
          <a href="/" className="leading-tight">
            <div className="text-2xl md:text-3xl font-black tracking-tight">
              ✨ Dear Future
            </div>
            <div className="text-xs md:text-sm font-bold text-slate-500">
              Opportunities. Guidance. Growth.
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-bold">
            <a className="text-[#6C4CF5]" href="/">Home</a>
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
      <section className="max-w-7xl mx-auto px-5 md:px-10 pt-6 md:pt-12">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-none md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <div className="relative z-10 pt-5 pb-4 md:py-0">
            <h1 className="text-[46px] md:text-7xl font-black leading-[0.95] tracking-tight max-w-[360px] md:max-w-none">
              Talent is everywhere.
              <span className="block text-[#6C4CF5]">
                Opportunity isn&apos;t.
              </span>
            </h1>

            <p className="mt-5 max-w-md text-[16px] md:text-xl leading-relaxed text-slate-700 font-semibold">
              Dear Future helps underserved students discover opportunities and
              learn how to access them independently.
            </p>

            <div className="mt-6 flex flex-col gap-4 max-w-md">
              <a
                href="/opportunities"
                className="rounded-full bg-[#6C4CF5] px-6 py-4 text-white font-black shadow-xl flex justify-between items-center"
              >
                <span>🎯 Explore Opportunities</span>
                <span>→</span>
              </a>

              <a
                href="/guidance"
                className="rounded-full bg-white px-6 py-4 text-[#6C4CF5] font-black shadow-lg border border-slate-100 flex justify-between items-center"
              >
                <span>👥 Get Guidance</span>
                <span>→</span>
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  "/images/team/deeaa-luthra-headshot.jpg",
                  "/images/hero-students.jpg",
                  "/images/community-mentorship.jpg",
                  "/images/career-workshop.jpg",
                ].map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt="Dear Future community"
                    className="h-8 w-8 rounded-full object-cover border-2 border-white shadow"
                  />
                ))}
              </div>
              <p className="text-xs md:text-sm font-bold text-slate-700">
                Join 1,000+ students already exploring their future
              </p>
            </div>
          </div>

          <div className="relative mt-5 md:mt-0 h-[260px] md:h-[500px] rounded-[1.7rem] overflow-hidden shadow-sm">
            <img
              src="/images/hero-students.jpg"
              alt="Dear Future students"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-black mb-5">
          What We Do 💜
        </h2>

        <div className="grid lg:grid-cols-2 gap-5">
          <MissionCard
            color="green"
            icon="🌍"
            number="1. EXPOSURE"
            title="We show what’s possible."
            text="Helping students discover careers, colleges, scholarships, skills and more."
            items={exposureItems}
          />

          <MissionCard
            color="purple"
            icon="🚀"
            number="2. SKILL & DIRECTION"
            title="We teach how to reach it."
            text="Teaching students how to find, apply and access opportunities independently."
            items={skillItems}
          />
        </div>
      </section>

      {/* EXPLORE */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-6">
        <h2 className="text-2xl md:text-3xl font-black">
          Explore Dear Future
        </h2>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {exploreCards.map(([icon, title, text, href, bg]) => (
            <a
              key={title}
              href={href}
              className={`${bg} rounded-[1.5rem] p-5 shadow-sm border border-slate-100 flex items-center gap-4`}
            >
              <div className="h-14 w-14 shrink-0 rounded-full bg-white grid place-items-center text-3xl shadow-sm">
                {icon}
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-black">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 font-medium">
                  {text}
                </p>
              </div>

              <div className="text-2xl">›</div>
            </a>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-5 md:px-10 py-8">
        <h2 className="text-2xl md:text-3xl font-black">How It Works</h2>

        <div className="mt-6 flex flex-row items-start gap-3 overflow-x-auto pb-2 md:overflow-visible md:items-center">
          <Step icon="🔭" number="1" title="Discover" text="Explore opportunities and future pathways." />
          <Line />
          <Step icon="📖" number="2" title="Prepare" text="Build skills, profiles and confidence." />
          <Line />
          <Step icon="📈" number="3" title="Progress" text="Apply, connect, learn and move forward." />
        </div>
      </section>

      {/* COMMUNITY IMPACT */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-7">
        <div className="rounded-[2rem] bg-[#07114a] text-white p-6 md:p-8 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-black mb-6">
            A Community That Cares
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ImpactIcon icon="👥" number="25+" label="Mentors" />
            <ImpactIcon icon="❤️" number="50+" label="Volunteers" />
            <ImpactIcon icon="🏫" number="60+" label="Partner Schools & NGOs" />
            <ImpactIcon icon="⭐" number="1,200+" label="Students Impacted" />
          </div>
        </div>
      </section>

      {/* BUILT BY COMMUNITY */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-8">
        <div className="rounded-[2rem] bg-white p-6 md:p-10 shadow-sm border border-slate-100">
          <h2 className="text-3xl md:text-4xl font-black text-center">
            Built by a Community
          </h2>
          <p className="mt-3 text-center text-slate-600 font-medium">
            Dear Future is a community of people working together for students.
          </p>

          <div className="mt-8 grid md:grid-cols-4 gap-5">
            <div className="rounded-3xl bg-[#fbf9ff] p-5 flex gap-4 items-center">
              <img
                src="/images/team/deeaa-luthra-headshot.jpg"
                alt="Deeaa Luthra"
                className="h-20 w-20 rounded-full object-cover shrink-0"
              />
              <div>
                <p className="text-sm font-black text-emerald-600">
                  Founding Member
                </p>
                <h3 className="mt-1 text-lg font-black">Deeaa Luthra</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 font-medium">
                  Youth leader who helped launch Dear Future.
                </p>
              </div>
            </div>

            <Community icon="👥" title="25+ Mentors" text="Professionals, educators and entrepreneurs." />
            <Community icon="❤️" title="50+ Volunteers" text="Students and individuals supporting workshops and outreach." />
            <Community icon="🏫" title="Partner Schools & NGOs" text="Organizations helping us reach more students." />
          </div>
        </div>
      </section>

      {/* WORKSHOP */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center rounded-[2rem] bg-white p-5 md:p-8 shadow-sm border border-slate-100">
          <img
            src="/images/career-workshop.jpg"
            alt="Career guidance workshop"
            className="rounded-[1.5rem] w-full h-[260px] md:h-[420px] object-cover"
          />

          <div>
            <p className="text-sm font-black text-[#6C4CF5]">
              CAREER GUIDANCE WORKSHOPS
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-black leading-tight">
              Bringing exposure directly to students.
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed font-medium">
              Dear Future works with students from government schools,
              underserved communities, NGOs and youth groups to help them
              understand careers, skill paths, scholarships and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 md:px-10 py-10">
        <div className="rounded-[2.2rem] bg-[#07114a] text-white p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center shadow-2xl">
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
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-xs font-bold text-purple-700">
          💜 For Students. By Youth. With a Community.
        </div>

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

      {/* MOBILE BOTTOM NAV */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 md:hidden">
        <div className="grid grid-cols-5 text-xs font-bold text-center">
          <a href="/" className="py-3 text-[#6C4CF5]">🏠<br />Home</a>
          <a href="/opportunities" className="py-3">🎯<br />Opps</a>
          <a href="/guidance" className="py-3">🤝<br />Guide</a>
          <a href="/support" className="py-3">❤️<br />Support</a>
          <a href="/groups" className="py-3">👥<br />Groups</a>
        </div>
      </div>
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
  items: string[][];
}) {
  const theme =
    color === "green"
      ? "from-emerald-50 to-white text-emerald-600"
      : "from-purple-50 to-white text-[#6C4CF5]";

  return (
    <div className={`rounded-[2rem] bg-gradient-to-br ${theme} p-5 md:p-8 border border-slate-100 shadow-sm`}>
      <div className="flex gap-5 items-start">
        <div className="h-20 w-20 rounded-full bg-white grid place-items-center text-4xl shadow-sm shrink-0">
          {icon}
        </div>

        <div>
          <p className="font-black text-sm">{number}</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-black text-[#07114a]">
            {title}
          </h3>
          <p className="mt-3 text-slate-600 font-medium leading-relaxed">
            {text}
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-5 gap-2 overflow-x-auto md:overflow-visible">
        {items.map(([itemIcon, item]) => (
          <div
            key={item}
            className="bg-white rounded-2xl p-3 text-center shadow-sm min-w-[90px] md:min-w-0 flex flex-col items-center justify-center"
          >
            <div className="text-xl mb-2">{itemIcon}</div>
            <p className="text-[11px] font-black text-[#07114a]">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Step({
  icon,
  number,
  title,
  text,
}: {
  icon: string;
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="min-w-[140px] md:min-w-[220px] rounded-[1.5rem] bg-white p-4 shadow-sm border border-slate-100">
      <div className="relative h-14 w-14 rounded-full bg-purple-100 grid place-items-center text-2xl">
        {icon}
        <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-[#6C4CF5] text-white text-xs grid place-items-center font-black">
          {number}
        </span>
      </div>
      <h3 className="mt-3 font-black text-[#6C4CF5]">{title}</h3>
      <p className="mt-1 text-xs text-slate-600 font-medium">{text}</p>
    </div>
  );
}

function Line() {
  return (
    <div className="hidden md:block flex-1 border-t-2 border-dotted border-[#6C4CF5]" />
  );
}

function ImpactIcon({
  icon,
  number,
  label,
}: {
  icon: string;
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-16 w-16 rounded-full bg-white/10 grid place-items-center text-3xl">
        {icon}
      </div>
      <div>
        <div className="text-2xl md:text-3xl font-black">{number}</div>
        <div className="text-sm text-slate-300 font-bold">{label}</div>
      </div>
    </div>
  );
}

function Community({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl bg-[#fbf9ff] p-5 flex gap-4 items-center">
      <div className="h-20 w-20 rounded-full bg-white grid place-items-center text-4xl shadow-sm shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-black">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-600 font-medium">
          {text}
        </p>
      </div>
    </div>
  );
}