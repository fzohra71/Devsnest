import React from 'react';
import {Navbar} from './components/Navbar';
import {Home} from './components/Home';
import {About} from './components/About';
import {Services} from './components/Services';
import {Contact} from './components/Contact';
import {Load} from './components/Load';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export const App = () => {
    return (
        <Router>
        <main>
        <Navbar />
         <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
             <Contact />
          </Route>
         </Switch>
        <Load />
        </main>
        </Router>
    )
}