export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F4FF] text-slate-900">
      <nav className="sticky top-0 z-50 bg-[#F8F4FF]/90 backdrop-blur border-b border-purple-100">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="font-black text-xl">Dear Future</div>
          <div className="hidden md:flex gap-6 text-sm font-semibold">
            <a href="/">Home</a>
            <a href="/guidance">Get Guidance</a>
            <a href="/support">Support a Student</a>
            <a href="/groups">Groups</a>
          </div>
          <a className="rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-bold" href="/guidance">
            Start
          </a>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-5 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-block rounded-full bg-purple-100 text-purple-700 px-4 py-2 text-sm font-bold">
            For underserved students
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
            Talent is everywhere.
            <span className="block text-purple-700">Opportunity isn&apos;t.</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Dear Future helps students discover what&apos;s possible and learn how to reach it.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="/guidance" className="text-center rounded-full bg-slate-900 text-white px-7 py-4 font-bold">
              Get Guidance
            </a>
            <a href="/support" className="text-center rounded-full bg-white border border-purple-200 px-7 py-4 font-bold">
              Support a Student
            </a>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] p-5 shadow-xl">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-purple-200 to-yellow-100 p-6 min-h-[360px] flex flex-col justify-between">
            <div className="bg-white rounded-2xl p-4 shadow">
              <p className="font-bold">We show what&apos;s possible.</p>
              <p className="text-sm text-slate-600 mt-1">Careers, colleges, skill paths, jobs and scholarships.</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow">
              <p className="font-bold">We teach how to reach it.</p>
              <p className="text-sm text-slate-600 mt-1">Skills, applications, resumes, confidence and direction.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-10">
        <h2 className="text-3xl md:text-4xl font-black">What Dear Future does</h2>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="text-4xl">🌍</div>
            <h3 className="mt-4 text-2xl font-black">Exposure</h3>
            <p className="mt-3 text-slate-600">
              Helping students understand what careers, colleges, scholarships, skill programs and jobs exist.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="text-4xl">🚀</div>
            <h3 className="mt-4 text-2xl font-black">Skill & Direction</h3>
            <p className="mt-3 text-slate-600">
              Teaching students how to find opportunities, apply, build skills and navigate systems independently.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-10">
        <h2 className="text-3xl md:text-4xl font-black">Explore Dear Future</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {[
            ["🎯", "Opportunities", "Careers, scholarships and programs"],
            ["🤝", "Get Guidance", "Mentors and volunteers"],
            ["❤️", "Support a Student", "Help someone move forward"],
            ["👥", "Groups", "Learn with a community"],
          ].map((item) => (
            <div key={item[1]} className="bg-white rounded-3xl p-5 shadow-sm">
              <div className="text-3xl">{item[0]}</div>
              <h3 className="mt-3 font-black text-lg">{item[1]}</h3>
              <p className="mt-2 text-sm text-slate-600">{item[2]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-12">
        <div className="rounded-[2rem] bg-slate-900 text-white p-8 md:p-12">
          <h2 className="text-3xl md:text-5xl font-black">
            Built by a community.
          </h2>
          <p className="mt-4 text-slate-300 max-w-3xl">
            Dear Future was started by founding member Deeaa Luthra and is being built with mentors, volunteers, educators, schools, NGOs and supporters.
          </p>
        </div>
      </section>
    </main>
  );
}