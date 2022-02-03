import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'
import { Navbar } from './app/components/ui/common/Navbar/Navbar'
import { PageNotFound } from './app/components/pages/404-page';
import { About } from './app/components/pages/About';
import { Home } from './app/components/pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
