import { useEffect } from 'react';
import { Country } from '../components/cases/Country';
import { Global } from '../components/cases/Global';
import './Pages.scss';

export const Cases: React.FC = () => {
  useEffect(() => {
    document.title = 'CovidApp - Cases';
  }, []);

  return (
    <main className="container">
      <Global />
      <Country />
    </main>
  );
};
