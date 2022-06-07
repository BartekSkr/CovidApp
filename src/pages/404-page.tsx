import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Pages.scss';

export const PageNotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Error 404 (Not Found)';
  }, []);

  return (
    <main className="not-found-container">
      <h1>404</h1>
      <h3>Sorry, we couldn't find this page.</h3>
      <Link to="/cases">
        <button className="button">&larr; Go back</button>
      </Link>
    </main>
  );
};
