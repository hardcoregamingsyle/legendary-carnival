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

const json = (body, init = {}) => new Response(JSON.stringify(body), {
  ...init,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'public, max-age=300',
    ...init.headers
  }
});

export function onRequestGet() {
  return json({ success: true, data: schoolInfo });
}
