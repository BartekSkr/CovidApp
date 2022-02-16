import { useEffect } from 'react';
import './Pages.scss';

export const PageNotFound = () => {
  useEffect(() => {
    document.title = 'Error 404 (Not Found)';
  }, []);

  return (
    <main className='not-found-container'>
      <h1>404</h1>
      <h3>Sorry, we couldn't find this page.</h3>
    </main>
  );
};
