import { useEffect } from 'react';
import { Country } from '../components/cases/Country';
import { Global } from '../components/cases/Global';
import { motion } from 'framer-motion';

export const Cases: React.FC = () => {
  useEffect(() => {
    document.title = 'CovidApp - Cases';
  }, []);

  return (
    <div className="mx-auto py-0 px-8 text-white h-80 md:flex md:w-700">
      <motion.div
        initial={{ x: 'calc(-55vw)', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 'calc(-15vw)', opacity: -1 }}
        className="border p-4 h-300 mx-auto mb-8 md:w-percent-48"
      >
        <Global />
      </motion.div>
      <motion.div
        initial={{ x: 'calc(55vw)', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 'calc(15vw)', opacity: -1 }}
        className="border p-4 h-300 mx-auto mb-8 md:w-percent-48"
      >
        <Country />
      </motion.div>
    </div>
  );
};
