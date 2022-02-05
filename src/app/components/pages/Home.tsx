import { useEffect } from 'react';
import { Country } from '../cases/Country';
import { Global } from '../cases/Global';

export const Home = () => {
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
