export default function Hero({ schoolInfo, onBookTour }) {
  const stats = schoolInfo?.stats || [
    { label: 'Student-to-teacher ratio', value: '9:1' },
    { label: 'Global awards', value: '42+' },
    { label: 'Signature clubs', value: '34' }
  ];

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-aurora text-ivory">
      <div className="absolute inset-0 opacity-40 [background:linear-gradient(120deg,transparent,rgba(255,255,255,.32),transparent)] animate-pulse" />
      <div className="section-shell relative flex min-h-screen items-center pt-32">
        <div className="max-w-4xl">
          <p className="eyebrow">Panchkula's future-forward school</p>
          <h1 className="mt-6 font-display text-6xl font-extrabold leading-[0.95] sm:text-7xl lg:text-8xl">
            Cultivating Curious Minds, Shaping Future Leaders
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-ivory/80">
            A cinematic learning ecosystem where STEAM invention, expressive arts, elite sport, and compassionate leadership grow together.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button onClick={onBookTour} className="rounded-full bg-gold px-8 py-4 font-extrabold text-blueberry transition hover:-translate-y-1 hover:bg-ivory">
              Reserve a Private Tour
            </button>
            <a href="#campus" className="rounded-full border border-ivory/45 px-8 py-4 text-center font-extrabold text-ivory transition hover:bg-white/10">
              Explore Campus
            </a>
          </div>
          <div className="mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
            {stats.slice(0, 3).map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">
                <div className="text-3xl font-black text-gold">{stat.value}</div>
                <div className="mt-2 text-sm text-ivory/75">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
