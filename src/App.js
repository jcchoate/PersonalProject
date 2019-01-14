import React, { Component } from 'react';
import './App.css';
// import iphone from './iPhoneX.png'
import Navbar from './components/Navbar/Navbar';
import { HashRouter, Switch, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Mac from './components/Mac/Mac';
import Upad from './components/Upad/Upad';
import Uphone from './components/Uphone/Uphone';
import Watch from './components/Watch/Watch';
import PacbookPro from './components/Pacbook/PacbookPro'
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/bag' component={Cart}/>
            <Route path='/Pac' component={PacbookPro}/>
            <Route path='/uPad' component={Upad}/>
            <Route path='/uPhone' component={Uphone}/>
            <Route path='/Watch' component={Watch}/>
            <Route path='/sign-in' component={Signin}/>
            <Route path='/register' component={Register}/>
          </Switch>
        </HashRouter>
        {/* <header className="App-header">
          <img data-aos="fade-zoom-in" src={iphone} className="App-logo" alt="logo" />
          
        </header> */}
        
      </div>
    );
  }
}

export default App;
