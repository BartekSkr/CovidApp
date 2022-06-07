import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import './styles/App.scss';
import { Navbar } from './components/Navbar/Navbar';
import { PageNotFound } from './pages/404-page';
import { About } from './pages/About';
import { Cases } from './pages/Cases';
import { useEffect, useState } from 'react';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

  useEffect(() => {
    isDarkTheme === true
      ? (document.body.style.backgroundColor = 'black')
      : (document.body.style.backgroundColor = 'white');
  }, [isDarkTheme]);

  return (
    <div className="app" data-theme={isDarkTheme === true ? 'dark' : 'white'}>
      <Router>
        <Navbar setDarkTheme={setIsDarkTheme} darkTheme={isDarkTheme} />
        <Routes>
          <Route path="/" element={<Navigate to="/cases" />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
