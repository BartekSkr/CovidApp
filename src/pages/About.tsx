import { useEffect } from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  useEffect(() => {
    document.title = 'CovidApp - About';
  }, []);

  return (
    <motion.div
      initial={{ y: 'calc(80vh)', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 'calc(50vh)', opacity: -2 }}
      className="mx-auto py-0 px-8 text-white h-80 md:w-500"
    >
      <h1 className="mb-4 py-0 px-4 text-4xl">About this App</h1>
      <p className="mb-4 py-0 px-4">
        The application presents cases of covid disease in individual countries
        as well as in the world in general.
      </p>
      <p className="mb-4 py-0 px-4">
        App has been created with{' '}
        <a
          className="border-b-2"
          target="blank"
          href="https://create-react-app.dev/docs/getting-started"
        >
          TypeScript.
        </a>
      </p>
      <p className="mb-4 py-0 px-4">
        API used in this app is from{' '}
        <a
          className="border-b-2"
          target="blank"
          href="https://github.com/javieraviles/covidAPI"
        >
          COVID API.
        </a>
      </p>
    </motion.div>
  );
};
