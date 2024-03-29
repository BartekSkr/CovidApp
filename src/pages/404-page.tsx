import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const PageNotFound = () => {
  useEffect(() => {
    document.title = 'Error 404 (Not Found)';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mx-auto py-0 px-8 text-white h-80 md:w-500"
    >
      <h1 className="mb-4 py-0 px-4 text-4xl">404</h1>
      <h3 className="mb-4 py-0 px-4">Sorry, we couldn't find this page.</h3>
      <Link to="/cases">
        <button className="w-rem-6 h-rem-2 border-none text-sm bg-navbar-background ml-4">
          &larr; Go back
        </button>
      </Link>
    </motion.div>
  );
};
