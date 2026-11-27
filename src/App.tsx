import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import About from './pages/About';
import CaseStudy from './pages/CaseStudy';
import Home from './pages/Home';
import ScrollToTop from './components/layout/ScrollToTop';
import HabitCaseStudy from './pages/HabitCaseStudy';
import FireflyCaseStudy from './pages/FireflyCaseStudy';
import QArchivesCaseStudy from './pages/QArchivesCaseStudy';
import GameCaseStudy from './pages/GameCaseStudy';
import { filmSnake } from './data/filmSnake';
import { crossingSaigon } from './data/crossingSaigon';
export default function App() {
  const { pathname } = useLocation();
  return (
    <>
    <ScrollToTop />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/stride" element={<CaseStudy />} />
          <Route path="/projects/habit-tracker" element={<HabitCaseStudy />} />
          <Route path="/projects/firefly-maze" element={<FireflyCaseStudy />} />
          <Route path="/projects/q-archives" element={<QArchivesCaseStudy />} />
          <Route path="/projects/film-snake" element={<GameCaseStudy d={filmSnake} theme="ffcs--film" />} />
          <Route path="/projects/crossing-saigon" element={<GameCaseStudy d={crossingSaigon} theme="ffcs--saigon" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer heading={pathname.startsWith('/projects') ? 'Bạn muốn trao đổi về dự án?' : undefined} />
    </>
  );
}
