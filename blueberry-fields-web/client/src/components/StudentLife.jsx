import { testimonials } from '../data/schoolData.js';

export default function StudentLife() {
  return (
    <section id="student-life" className="section-shell">
      <p className="eyebrow">Student life</p>
      <h2 className="mt-4 max-w-3xl font-display text-5xl font-bold">Joy, excellence, and belonging in every school day.</h2>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="glass-panel rounded-[2rem] p-7">
            <div className="text-5xl text-gold">“</div>
            <p className="mt-2 text-xl leading-8 text-blueberry/75">{testimonial.quote}</p>
            <div className="mt-8 border-t border-blueberry/10 pt-5">
              <p className="font-black">{testimonial.name}</p>
              <p className="text-sm text-blueberry/55">{testimonial.role}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 grid gap-4 rounded-[2rem] bg-leaf p-6 text-ivory sm:grid-cols-3">
        {['Hackathon finalists', 'Green campus stewards', 'Theatre festival winners'].map((milestone) => <div key={milestone} className="rounded-2xl bg-white/10 p-5 font-bold">{milestone}</div>)}
      </div>
    </section>
  );
}
