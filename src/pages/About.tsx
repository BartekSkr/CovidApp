import { useEffect } from 'react';

export const About: React.FC = () => {
  useEffect(() => {
    document.title = 'CovidApp - About';
  }, []);

  return (
    <main className="mx-auto w-500 py-0 px-8 text-slate-300 h-80">
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
          {' '}
          React.js. and TypeScript.{' '}
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
    </main>
  );
};
