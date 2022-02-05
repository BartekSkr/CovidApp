import { useEffect } from 'react';

export const PageNotFound = () => {
  useEffect(() => {
    document.title = 'Error 404 (Not Found)';
  }, []);

  return (
    <main className='about-404-container'>
      <h1>404</h1>
      <h3>Sorry, we couldn't find this page.</h3>
    </main>
  );
};
