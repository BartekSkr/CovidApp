import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar';
import { Home } from './components/pages/Home'
import { About } from './components/pages/About'
import { PageNotFound } from './components/pages/404-page';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
