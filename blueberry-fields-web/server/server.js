import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

const schoolInfo = {
  name: 'Blueberry Fields High School',
  location: 'Panchkula, Haryana',
  tagline: 'Cultivating Curious Minds, Shaping Future Leaders',
  established: 2006,
  stats: [
    { label: 'Student-to-teacher ratio', value: '9:1' },
    { label: 'Global awards', value: '42+' },
    { label: 'University readiness', value: '98%' },
    { label: 'Signature clubs', value: '34' }
  ],
  facilities: [
    {
      name: 'Robotics & AI Lab',
      summary: 'A research-grade makerspace for robotics, machine learning, drones, and design thinking.',
      features: ['AI prototyping pods', '3D printing studio', 'Inter-school robotics arena']
    },
    {
      name: 'Sports Complex',
      summary: 'Olympiad-inspired indoor and outdoor training zones for team excellence and personal wellness.',
      features: ['FIFA-grade turf', 'Aquatics program', 'Strength and conditioning studio']
    },
    {
      name: 'Performing Arts Theatre',
      summary: 'A black-box theatre and orchestral rehearsal space for confident storytelling.',
      features: ['Acoustic stage', 'Digital lighting rig', 'Annual arts residency']
    }
  ],
  awards: ['National STEAM Innovation Laureate', 'Green Campus Excellence', 'Future Leaders Debate Cup']
};

const inquiries = [];

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const isPhone = (value) => /^[+\d][\d\s-]{7,17}$/.test(value);

app.get('/api/school-info', (_req, res) => {
  res.json({ success: true, data: schoolInfo });
});

app.post('/api/inquiries', (req, res) => {
  const { guardianName, studentName, email, phone, grade, interest, visitDate, consent } = req.body;

  const errors = {};
  if (!guardianName || guardianName.trim().length < 2) errors.guardianName = 'Guardian name is required.';
  if (!studentName || studentName.trim().length < 2) errors.studentName = 'Student name is required.';
  if (!email || !isEmail(email)) errors.email = 'A valid email is required.';
  if (!phone || !isPhone(phone)) errors.phone = 'A valid phone number is required.';
  if (!grade) errors.grade = 'Please select an entry grade.';
  if (!interest) errors.interest = 'Please choose an inquiry type.';
  if (interest === 'campus-tour' && !visitDate) errors.visitDate = 'Please select a preferred tour date.';
  if (!consent) errors.consent = 'Consent is required to submit an inquiry.';

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, message: 'Please correct the highlighted fields.', errors });
  }

  const inquiry = {
    id: crypto.randomUUID(),
    guardianName: guardianName.trim(),
    studentName: studentName.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    grade,
    interest,
    visitDate: visitDate || null,
    submittedAt: new Date().toISOString()
  };

  inquiries.push(inquiry);

  return res.status(201).json({
    success: true,
    message: interest === 'campus-tour'
      ? 'Your private campus tour request has been received.'
      : 'Your digital prospectus request has been received.',
    inquiry
  });
});

app.listen(PORT, () => {
  console.log(`Blueberry Fields API running on http://localhost:${PORT}`);
});
