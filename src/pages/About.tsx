import { useEffect } from 'react';
import './Pages.scss';

export const About: React.FC = () => {
  useEffect(() => {
    document.title = 'CovidApp - About';
  }, []);

  return (
    <main className="about-container">
      <h1>About this App</h1>
      <p>
        The application presents cases of covid disease in individual countries
        as well as in the world in general.
      </p>
      <p>
        App has been created with{' '}
        <a
          target="blank"
          href="https://create-react-app.dev/docs/getting-started"
        >
          {' '}
          React.js. and TypeScript.{' '}
        </a>
      </p>
      <p>
        API used in this app is from{' '}
        <a target="blank" href="https://github.com/javieraviles/covidAPI">
          COVID API.
        </a>
      </p>
    </main>
  );
};
