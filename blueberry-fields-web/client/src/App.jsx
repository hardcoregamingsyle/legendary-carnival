import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CampusHub from './components/CampusHub.jsx';
import Curriculum from './components/Curriculum.jsx';
import StudentLife from './components/StudentLife.jsx';
import AdmissionsModal from './components/AdmissionsModal.jsx';
import Footer from './components/Footer.jsx';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

export default function App() {
  const [isAdmissionsOpen, setAdmissionsOpen] = useState(false);
  const [schoolInfo, setSchoolInfo] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/school-info`)
      .then((response) => response.json())
      .then((payload) => setSchoolInfo(payload.data))
      .catch(() => setSchoolInfo(null));
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-blueberry">
      <Navbar onBookTour={() => setAdmissionsOpen(true)} />
      <main>
        <Hero schoolInfo={schoolInfo} onBookTour={() => setAdmissionsOpen(true)} />
        <CampusHub facilities={schoolInfo?.facilities} />
        <Curriculum />
        <StudentLife />
      </main>
      <Footer onBookTour={() => setAdmissionsOpen(true)} />
      <AdmissionsModal isOpen={isAdmissionsOpen} onClose={() => setAdmissionsOpen(false)} />
    </div>
  );
}
