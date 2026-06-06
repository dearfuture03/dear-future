```tsx
const students = [
  {
    name: "Ananya Sharma",
    avatar: "👧",
    classCity: "Class 12 • Delhi",
    tag: "Career Guidance",
    tagStyle: "bg-violet-100 text-violet-700",
    accent: "text-violet-600",
    button: "bg-violet-600",
    softBox: "bg-violet-50",
    dream: "Wants to become a psychologist",
    context: "Father runs a small shop",
    title: "Need help choosing the right college",
    desc: "I’m confused between BBA and Economics (Hons). Need guidance on which path will be better for my future.",
    lookingFor: "Career Guidance",
    status: "Responded in 1 day",
  },
  {
    name: "Rohan Kumar",
    avatar: "👦",
    classCity: "Class 11 • Patna",
    tag: "Skill Development",
    tagStyle: "bg-emerald-100 text-emerald-700",
    accent: "text-emerald-600",
    button: "bg-emerald-600",
    softBox: "bg-emerald-50",
    dream: "Wants to become a software engineer",
    context: "First-generation college student",
    title: "Need help improving English speaking",
    desc: "I want to improve my spoken English for interviews and presentations.",
    lookingFor: "English Speaking Mentor",
    status: "Urgent",
  },
  {
    name: "Sneha Yadav",
    avatar: "👩",
    classCity: "Class 12 • Lucknow",
    tag: "Scholarship Help",
    tagStyle: "bg-orange-100 text-orange-700",
    accent: "text-orange-600",
    button: "bg-orange-500",
    softBox: "bg-orange-50",
    dream: "Wants to pursue BA in Psychology",
    context: "Family income ₹8K per month",
    title: "Need scholarship for college admission",
    desc: "I have good marks but my family cannot afford college fees. Need help finding scholarships and guidance.",
    lookingFor: "Scholarship Support",
    status: "High Priority",
  },
];

export default function SupportAStudentPage() {
  return (
    <main className="min-h-screen bg-[#FBF7F0] px-4 py-4 text-slate-900">
      <div className="mx-auto max-w-md">

        {/* Header */}
        <header className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button className="text-3xl leading-none">‹</button>

            <h1 className="text-xl font-extrabold tracking-tight">
              Support Students
            </h1>
          </div>

          <button className="rounded-2xl bg-violet-600 px-4 py-3 text-sm font-bold text-white shadow-sm">
            + Add Need
          </button>
        </header>

        {/* Banner */}
        <section className="mt-5 overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-sm">
          <img
            src="/images/support-banner.jpg"
            alt="Support Students"
            className="w-full object-cover"
          />
        </section>

        {/* Filters */}
        <section className="mt-5 flex gap-3 overflow-x-auto pb-1">
          {["All", "Career", "College", "Scholarship", "Skills"].map(
            (item, index) => (
              <button
                key={item}
                className={`shrink-0 rounded-2xl px-5 py-3 text-sm font-bold ${
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

        {/* Count */}
        <section className="mt-5 flex items-center justify-between">
          <p className="text-lg font-extrabold">
            <span className="text-violet-600">3</span> students need support
          </p>

          <button className="text-sm font-bold text-slate-600">
            Sort: Latest⌄
          </button>
        </section>

        {/* Cards */}
        <section className="mt-4 space-y-4">
          {students.map((student) => (
            <article
              key={student.name}
              className="rounded-3xl border border-[#EADFCC] bg-white p-4 shadow-sm"
            >
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-4xl">
                    {student.avatar}
                  </div>

                  <div className="mt-2 rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-700">
                    ✓ Verified
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-extrabold leading-tight">
                        {student.name}
                      </h3>

                      <p className="text-sm font-semibold text-slate-500">
                        {student.classCity}
                      </p>
                    </div>

                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-extrabold ${student.tagStyle}`}
                    >
                      {student.tag}
                    </span>
                  </div>

                  <div className="mt-3 space-y-2 rounded-2xl border border-dashed border-violet-200 p-3 text-sm font-semibold text-slate-700">
                    <p>🎯 {student.dream}</p>
                    <p>🏠 {student.context}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-lg font-extrabold leading-tight">
                  {student.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {student.desc}{" "}
                  <span className={`font-extrabold ${student.accent}`}>
                    Read more
                  </span>
                </p>
              </div>

              <div className={`mt-4 rounded-2xl p-4 ${student.softBox}`}>
                <p className={`text-xs font-extrabold ${student.accent}`}>
                  Support Needed
                </p>

                <p className="mt-1 text-sm font-extrabold text-slate-900">
                  Looking for {student.lookingFor}
                </p>
              </div>

              <div className="mt-3 rounded-2xl bg-amber-50 px-4 py-3 text-sm font-bold text-amber-700">
                ⏱ {student.status}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <button className="rounded-2xl border border-slate-300 bg-white py-3 text-sm font-extrabold text-slate-700">
                  💬 Chat
                </button>

                <button
                  className={`rounded-2xl py-3 text-sm font-extrabold text-white ${student.button}`}
                >
                  🤝 I can support
                </button>
              </div>
            </article>
          ))}
        </section>

        {/* Verification */}
        <section className="mt-5 rounded-3xl bg-violet-50 p-4 text-sm font-semibold leading-6 text-slate-700">
          🛡️ All student profiles are verified by Dear Future team for safety
          and trust.
        </section>

        <div className="h-8" />
      </div>
    </main>
  );
}
```
