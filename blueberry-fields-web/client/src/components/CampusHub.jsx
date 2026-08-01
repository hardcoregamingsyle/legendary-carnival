import { useState } from 'react';
import { campusFacilities } from '../data/schoolData.js';

export default function CampusHub({ facilities }) {
  const [activeFacility, setActiveFacility] = useState(null);
  const cards = campusFacilities.map((facility, index) => ({ ...facility, api: facilities?.[index] }));

  return (
    <section id="campus" className="section-shell">
      <p className="eyebrow">Campus hub</p>
      <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <h2 className="max-w-3xl font-display text-5xl font-bold">Facilities designed as launchpads for ambition.</h2>
        <p className="max-w-md text-blueberry/65">Tap each immersive card to reveal signature experiences, specialist mentorship, and award-winning infrastructure.</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((facility) => (
          <button key={facility.title} onClick={() => setActiveFacility(facility)} className="group glass-panel rounded-[2rem] p-7 text-left transition hover:-translate-y-2 hover:shadow-glow">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-violet">{facility.eyebrow}</span>
            <h3 className="mt-8 font-display text-3xl font-bold">{facility.title}</h3>
            <p className="mt-5 text-blueberry/65">{facility.description}</p>
            <div className="mt-8 rounded-full bg-leaf/10 px-4 py-2 text-sm font-bold text-leaf">{facility.metrics}</div>
          </button>
        ))}
      </div>
      {activeFacility && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-blueberry/70 p-5 backdrop-blur" onClick={() => setActiveFacility(null)}>
          <article className="max-w-2xl rounded-[2rem] bg-ivory p-8 shadow-glow" onClick={(event) => event.stopPropagation()}>
            <p className="eyebrow">Interactive campus view</p>
            <h3 className="mt-4 font-display text-4xl font-bold">{activeFacility.title}</h3>
            <p className="mt-4 text-lg text-blueberry/70">{activeFacility.api?.summary || activeFacility.description}</p>
            <ul className="mt-6 grid gap-3">
              {(activeFacility.api?.features || activeFacility.details).map((item) => <li key={item} className="rounded-2xl bg-white p-4 font-semibold">✦ {item}</li>)}
            </ul>
            <button onClick={() => setActiveFacility(null)} className="mt-8 rounded-full bg-blueberry px-6 py-3 font-bold text-ivory">Close</button>
          </article>
        </div>
      )}
    </section>
  );
}
