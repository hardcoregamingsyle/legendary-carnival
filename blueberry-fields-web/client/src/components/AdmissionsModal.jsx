import { useState } from 'react';

const initialForm = {
  guardianName: '', studentName: '', email: '', phone: '', grade: '', interest: 'campus-tour', visitDate: '', consent: false
};

export default function AdmissionsModal({ isOpen, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your inquiry...' });
    setErrors({});

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const payload = await response.json();
      if (!response.ok) {
        setErrors(payload.errors || {});
        setStatus({ type: 'error', message: payload.message || 'Please review the form.' });
        return;
      }
      setStatus({ type: 'success', message: payload.message });
      setForm(initialForm);
    } catch {
      setStatus({ type: 'error', message: 'The admissions desk is temporarily unreachable. Please try again.' });
    }
  };

  return (
    <div id="admissions" className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-blueberry/75 p-4 backdrop-blur" onMouseDown={onClose}>
      <form onSubmit={handleSubmit} onMouseDown={(event) => event.stopPropagation()} className="my-10 w-full max-w-3xl rounded-[2rem] bg-ivory p-7 shadow-glow">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">Admissions concierge</p>
            <h2 className="mt-3 font-display text-4xl font-bold">Book a tour or receive the prospectus.</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full bg-blueberry px-4 py-2 font-bold text-ivory">×</button>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {[
            ['guardianName', 'Guardian name'], ['studentName', 'Student name'], ['email', 'Email'], ['phone', 'Phone']
          ].map(([field, label]) => (
            <label key={field} className="font-bold">{label}
              <input className="mt-2 w-full rounded-2xl border border-blueberry/15 bg-white px-4 py-3 font-normal outline-none focus:border-violet" value={form[field]} onChange={(event) => updateField(field, event.target.value)} />
              {errors[field] && <span className="mt-1 block text-sm text-red-600">{errors[field]}</span>}
            </label>
          ))}
          <label className="font-bold">Entry grade
            <select className="mt-2 w-full rounded-2xl border border-blueberry/15 bg-white px-4 py-3 font-normal" value={form.grade} onChange={(event) => updateField('grade', event.target.value)}>
              <option value="">Select grade</option>
              {['Nursery', 'Grade I', 'Grade VI', 'Grade IX', 'Grade XI'].map((grade) => <option key={grade}>{grade}</option>)}
            </select>
            {errors.grade && <span className="mt-1 block text-sm text-red-600">{errors.grade}</span>}
          </label>
          <label className="font-bold">Inquiry type
            <select className="mt-2 w-full rounded-2xl border border-blueberry/15 bg-white px-4 py-3 font-normal" value={form.interest} onChange={(event) => updateField('interest', event.target.value)}>
              <option value="campus-tour">Campus tour</option>
              <option value="prospectus">Download prospectus</option>
            </select>
          </label>
          <label className="font-bold sm:col-span-2">Preferred tour date
            <input type="date" className="mt-2 w-full rounded-2xl border border-blueberry/15 bg-white px-4 py-3 font-normal" value={form.visitDate} onChange={(event) => updateField('visitDate', event.target.value)} />
            {errors.visitDate && <span className="mt-1 block text-sm text-red-600">{errors.visitDate}</span>}
          </label>
        </div>
        <label className="mt-6 flex gap-3 text-sm font-semibold text-blueberry/70">
          <input type="checkbox" checked={form.consent} onChange={(event) => updateField('consent', event.target.checked)} />
          I consent to Blueberry Fields High School contacting me about admissions.
        </label>
        {errors.consent && <span className="mt-1 block text-sm text-red-600">{errors.consent}</span>}
        {status.message && <p className={`mt-5 rounded-2xl p-4 font-bold ${status.type === 'success' ? 'bg-leaf/10 text-leaf' : status.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-violet/10 text-violet'}`}>{status.message}</p>}
        <button disabled={status.type === 'loading'} className="mt-6 w-full rounded-full bg-blueberry px-8 py-4 font-extrabold text-ivory transition hover:bg-violet disabled:opacity-60">
          Submit inquiry
        </button>
      </form>
    </div>
  );
}
