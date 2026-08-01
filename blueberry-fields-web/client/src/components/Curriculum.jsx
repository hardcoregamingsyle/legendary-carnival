import { useState } from 'react';
import { curriculumTracks } from '../data/schoolData.js';

export default function Curriculum() {
  const [activeId, setActiveId] = useState(curriculumTracks[0].id);
  const activeTrack = curriculumTracks.find((track) => track.id === activeId);

  return (
    <section id="curriculum" className="bg-blueberry text-ivory">
      <div className="section-shell">
        <p className="eyebrow">Curriculum architecture</p>
        <h2 className="mt-4 max-w-4xl font-display text-5xl font-bold">A living curriculum that turns knowledge into agency.</h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col gap-4">
            {curriculumTracks.map((track) => (
              <button key={track.id} onClick={() => setActiveId(track.id)} className={`rounded-3xl border p-5 text-left transition ${activeId === track.id ? 'border-gold bg-gold text-blueberry' : 'border-white/15 bg-white/5 hover:bg-white/10'}`}>
                <span className="text-sm font-black uppercase tracking-[0.25em]">{track.label}</span>
              </button>
            ))}
          </div>
          <article className="rounded-[2rem] border border-white/15 bg-white/10 p-8 backdrop-blur-xl">
            <h3 className="font-display text-4xl font-bold">{activeTrack.title}</h3>
            <p className="mt-5 text-lg leading-8 text-ivory/75">{activeTrack.body}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {activeTrack.highlights.map((highlight) => <div key={highlight} className="rounded-2xl bg-ivory/10 p-4 font-bold">{highlight}</div>)}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
