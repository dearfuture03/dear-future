export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F3FF] p-6">
      <section className="max-w-5xl mx-auto">
        <p className="text-sm font-semibold text-purple-700">
          Dear Future
        </p>

        <h1 className="mt-4 text-4xl md:text-6xl font-bold text-slate-900">
          Talent is everywhere.
          <br />
          <span className="text-purple-700">
            Opportunity isn't.
          </span>
        </h1>

        <p className="mt-6 text-lg text-slate-600 max-w-2xl">
          We help underserved students discover what’s possible and learn how to reach it.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="rounded-full bg-slate-900 px-6 py-4 text-white font-semibold">
            Explore Opportunities
          </button>

          <button className="rounded-full bg-white px-6 py-4 text-slate-900 font-semibold border">
            Get Guidance
          </button>
        </div>
      </section>
    </main>
  );
}