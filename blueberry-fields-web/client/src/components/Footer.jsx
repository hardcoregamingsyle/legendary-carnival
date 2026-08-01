export default function Footer({ onBookTour }) {
  return (
    <footer className="bg-blueberry text-ivory">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="eyebrow">Blueberry Fields High School</p>
          <h2 className="mt-4 font-display text-4xl font-bold">A Panchkula institution for brilliant, balanced futures.</h2>
          <button onClick={onBookTour} className="mt-8 rounded-full bg-gold px-7 py-4 font-extrabold text-blueberry">Start admissions journey</button>
        </div>
        <div>
          <h3 className="font-black">Campus</h3>
          <p className="mt-4 text-ivory/70">Sector 11, Panchkula, Haryana</p>
          <p className="mt-2 text-ivory/70">admissions@blueberryfields.edu</p>
          <p className="mt-2 text-ivory/70">+91 172 000 2040</p>
        </div>
        <div>
          <h3 className="font-black">Connect</h3>
          <div className="mt-4 flex flex-col gap-3 text-ivory/70">
            <a href="#curriculum">Curriculum</a>
            <a href="#student-life">Student Life</a>
            <a href="#campus">Campus Facilities</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-sm text-ivory/55">© 2026 Blueberry Fields High School. Designed for curious minds.</div>
    </footer>
  );
}
