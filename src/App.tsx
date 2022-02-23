import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import './App.scss';
import { Navbar } from './app/components/ui/common/Navbar/Navbar';
import { PageNotFound } from './app/components/pages/404-page';
import { About } from './app/components/pages/About';
import { Home } from './app/components/pages/Home';
import { useEffect, useState } from 'react';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

  useEffect(() => {
    isDarkTheme === true
      ? (document.body.style.backgroundColor = 'rgb(41, 40, 40)')
      : (document.body.style.backgroundColor = 'white');
  }, [isDarkTheme]);

  return (
    <div className='app' data-theme={isDarkTheme === true ? 'dark' : 'white'}>
      <Router>
        <Navbar setDarkTheme={setIsDarkTheme} darkTheme={isDarkTheme} />
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
