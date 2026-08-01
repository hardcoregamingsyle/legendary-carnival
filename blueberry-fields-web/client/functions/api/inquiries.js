const json = (body, init = {}) => new Response(JSON.stringify(body), {
  ...init,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    ...init.headers
  }
});

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const isPhone = (value) => /^[+\d][\d\s-]{7,17}$/.test(value);

const validateInquiry = (payload) => {
  const errors = {};
  if (!payload.guardianName || payload.guardianName.trim().length < 2) errors.guardianName = 'Guardian name is required.';
  if (!payload.studentName || payload.studentName.trim().length < 2) errors.studentName = 'Student name is required.';
  if (!payload.email || !isEmail(payload.email)) errors.email = 'A valid email is required.';
  if (!payload.phone || !isPhone(payload.phone)) errors.phone = 'A valid phone number is required.';
  if (!payload.grade) errors.grade = 'Please select an entry grade.';
  if (!payload.interest) errors.interest = 'Please choose an inquiry type.';
  if (payload.interest === 'campus-tour' && !payload.visitDate) errors.visitDate = 'Please select a preferred tour date.';
  if (!payload.consent) errors.consent = 'Consent is required to submit an inquiry.';
  return errors;
};

export async function onRequestPost({ request, env }) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return json({ success: false, message: 'Invalid JSON request body.' }, { status: 400 });
  }

  const errors = validateInquiry(payload);
  if (Object.keys(errors).length > 0) {
    return json({ success: false, message: 'Please correct the highlighted fields.', errors }, { status: 400 });
  }

  const inquiry = {
    id: crypto.randomUUID(),
    guardianName: payload.guardianName.trim(),
    studentName: payload.studentName.trim(),
    email: payload.email.trim().toLowerCase(),
    phone: payload.phone.trim(),
    grade: payload.grade,
    interest: payload.interest,
    visitDate: payload.visitDate || null,
    submittedAt: new Date().toISOString()
  };

  if (env.ADMISSIONS_INQUIRIES) {
    await env.ADMISSIONS_INQUIRIES.put(`inquiry:${inquiry.id}`, JSON.stringify(inquiry));
  }

  return json({
    success: true,
    message: inquiry.interest === 'campus-tour'
      ? 'Your private campus tour request has been received.'
      : 'Your digital prospectus request has been received.',
    inquiry
  }, { status: 201 });
}

export function onRequestOptions() {
  return new Response(null, { status: 204 });
}
