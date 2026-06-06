const mentors = [
  {
    name: "Neha Sharma",
    photo: "/images/mentors/neha.jpg",
    role: "Product Manager",
    company: "Google",
    city: "Bengaluru",
    badge: "Career Guide",
    badgeColor: "bg-amber-100 text-amber-700",
    support: ["Career Guidance", "Interview Prep", "Resume Review"],
    extra: "+2 more",
    students: 12,
    sessions: 5,
    referrals: 2,
  },
  {
    name: "Rahul Mehta",
    photo: "/images/mentors/rahul.jpg",
    role: "Software Engineer",
    company: "Microsoft",
    city: "Hyderabad",
    badge: "Tech Mentor",
    badgeColor: "bg-emerald-100 text-emerald-700",
    support: ["Career Guidance", "Coding Help", "Interview Prep"],
    extra: "+1 more",
    students: 18,
    sessions: 5,
    referrals: 3,
  },
  {
    name: "Priya Iyer",
    photo: "/images/mentors/priya.jpg",
    role: "Career Coach",
    company: "Ex-BCG Consultant",
    city: "Mumbai",
    badge: "College Mentor",
    badgeColor: "bg-orange-100 text-orange-700",
    support: ["Career Guidance", "College Selection", "Interview Prep"],
    extra: "+2 more",
    students: 15,
    sessions: 4,
    referrals: 1,
  },
  {
    name: "Amit Verma",
    photo: "/images/mentors/amit.jpg",
    role: "Founder",
    company: "Startup Mentor",
    city: "Delhi",
    badge: "Founder Mentor",
    badgeColor: "bg-blue-100 text-blue-700",
    support: ["Startup Guidance", "Portfolio Review", "Personal Branding"],
    extra: "+3 more",
    students: 9,
    sessions: 3,
    referrals: 2,
  },
];

function MentorCard({ mentor }: { mentor: (typeof mentors)[0] }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="flex gap-3">
        <img
          src={mentor.photo}
          alt={mentor.name}
          className="h-24 w-24 rounded-2xl object-cover bg-slate-100"
        />

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-lg font-extrabold text-slate-950">
                {mentor.name}
              </h3>
              <p className="text-sm font-semibold text-slate-600">
                {mentor.role}
              </p>
              <p className="text-sm font-semibold text-slate-500">
                {mentor.company} • {mentor.city}
              </p>
            </div>

            <span className="text-2xl">›</span>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-extrabold text-emerald-700">
              ✓ Verified Mentor
            </span>
            <span
              className={`rounded-full px-2.5 py-1 text-[11px] font-extrabold ${mentor.badgeColor}`}
            >
              {mentor.badge}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-xs font-bold text-slate-500">Can help with:</p>

        <div className="mt-2 flex flex-wrap gap-2">
          {mentor.support.map((item) => (
            <span
              key={item}
              className="rounded-full bg-violet-50 px-3 py-1 text-[11px] font-extrabold text-violet-700"
            >
              {item}
            </span>
          ))}

          <span className="rounded-full px-2 py-1 text-[11px] font-extrabold text-violet-700">
            {mentor.extra}
          </span>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 border-t border-slate-100 pt-3 text-center">
        <div>
          <p className="text-base font-extrabold">{mentor.students}</p>
          <p className="text-[11px] font-semibold text-slate-500">
            Students Guided
          </p>
        </div>

        <div className="border-x border-slate-100">
          <p className="text-base font-extrabold">{mentor.sessions}</p>
          <p className="text-[11px] font-semibold text-slate-500">
            Sessions Hosted
          </p>
        </div>

        <div>
          <p className="text-base font-extrabold">{mentor.referrals}</p>
          <p className="text-[11px] font-semibold text-slate-500">
            Referrals
          </p>
        </div>
      </div>
    </article>
  );
}

export default function MentorsPage() {
  return (
    <main className="min-h-screen bg-[#FBF7F0] px-4 py-4 text-slate-900">
      <div className="mx-auto max-w-md">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold">Mentor Profiles</h1>
            <p className="text-xs font-semibold text-slate-500">
              Learn from. Connect with. Grow together.
            </p>
          </div>

          <button className="rounded-full bg-white p-3 text-xl shadow-sm">
            🔍
          </button>
        </header>

        <section className="mt-4 overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-sm">
          <img
            src="/images/mentor-banner.jpg"
            alt="Be a Mentor"
            className="w-full object-cover"
          />
        </section>

        <section className="mt-4 flex gap-3 overflow-x-auto pb-1">
          {["All Mentors", "Career", "College", "Skills", "Location"].map(
            (item, index) => (
              <button
                key={item}
                className={`shrink-0 rounded-2xl px-4 py-2.5 text-sm font-bold ${
                  index === 0
                    ? "bg-violet-600 text-white"
                    : "border border-slate-200 bg-white text-slate-700"
                }`}
              >
                {item}
              </button>
            )
          )}
        </section>

        <section className="mt-4 space-y-3">
          {mentors.slice(0, 3).map((mentor) => (
            <MentorCard key={mentor.name} mentor={mentor} />
          ))}
        </section>

        <section className="mt-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="grid grid-cols-4 gap-2 text-center">
            {[
              ["👥", "42", "Mentors Active"],
              ["🎓", "180", "Students Guided"],
              ["📅", "36", "Sessions"],
              ["💼", "12", "Internships"],
            ].map(([icon, number, label]) => (
              <div key={label}>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-violet-50 text-xl">
                  {icon}
                </div>
                <p className="mt-2 text-xl font-extrabold">{number}</p>
                <p className="text-[11px] font-semibold text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-4 space-y-3">
          {mentors.slice(3).map((mentor) => (
            <MentorCard key={mentor.name} mentor={mentor} />
          ))}
        </section>

        <section className="mt-5 rounded-3xl bg-violet-600 p-5 text-white">
          <h2 className="text-xl font-extrabold">
            You don’t need to be famous.
            <br />
            You just need to be useful.
          </h2>

          <p className="mt-2 text-sm font-medium text-violet-100">
            Give 30 minutes. Answer one question. Open one door.
          </p>

          <button className="mt-4 w-full rounded-2xl bg-white py-3 text-sm font-extrabold text-violet-700">
            Start Mentoring →
          </button>
        </section>

        <div className="h-8" />
      </div>
    </main>
  );
}