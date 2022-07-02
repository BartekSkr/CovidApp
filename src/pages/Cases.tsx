import { useEffect } from 'react';
import { Country } from '../components/cases/Country';
import { Global } from '../components/cases/Global';
import { motion } from 'framer-motion';

export const Cases: React.FC = () => {
  useEffect(() => {
    document.title = 'CovidApp - Cases';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main className="overflow-hidden mx-auto w-500 py-0 px-8 text-slate-300 h-80 md:flex md:w-700">
        <Global />
        <Country />
      </main>
    </motion.div>
  );
};
