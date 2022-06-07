import { useEffect } from 'react';
import { Country } from '../components/cases/Country';
import { Global } from '../components/cases/Global';
import './Pages.scss';

export const Home:React.FC = () => {
  useEffect(() => {
    document.title = 'CovidApp - Home';
  }, []);

  return (
    <main className='container'>
      <Global />
      <Country />
    </main>
  );
};
