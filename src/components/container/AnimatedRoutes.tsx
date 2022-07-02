import '../../index.scss';
import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { PageNotFound } from '../../pages/404-page';
import { About } from '../../pages/About';
import { Cases } from '../../pages/Cases';
import { Navbar } from '../Navbar/Navbar';

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div className="font-sans text-lg leading-6 tracking-widest duration-0.5">
      <Navbar />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/cases" />} />
          <Route path="cases" element={<Cases />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
