import './App.css';
import Waves from './assets/Waves.mp4';
import React from 'react';
import Pictures from './Components/Pictures.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Home from './Components/Home.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="Home">
        <div className='Vid'>
          <video src={Waves} autoPlay loop muted/>
        </div>
        <div className='Top'>
          {/* <div className='Empty'>
          </div> */}
          <div className='Content'>
            <h1>Ocean Pictures</h1>
          </div>
          <div className='SideButton'>
            <Link to="/" className='But'>Home</Link>
            <Link to="/pictures" className='But'>Pictures</Link>
            <Link to="/about" className='But'>About</Link>
            <Link to="/contact" className='But'>Contact</Link>
          </div>
        </div>

        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/pictures' component={Pictures}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/contact' component={Contact}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
