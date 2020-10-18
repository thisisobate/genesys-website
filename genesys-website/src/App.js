import React from 'react';
import './App.css';
import LandingPage from './views/LandingPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNavigation from './components/header/TopNavigation';
import Footer from './components/footer/Footer';
import SoftwareDeveloper from './views/SoftwareDeveloper';
import Learnable from './views/Learnable';
import ProductDesign from './views/ProductDesign';
import ApplyKnowledge from './views/ApplyKnowledge';
import Journal from './views/Journal';
import Faq from './views/Faq';

function App() {
  return (
    <Router>
      <div>
        <TopNavigation />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/SoftwareDeveloper">
            <SoftwareDeveloper />
          </Route>
          <Route path="/ProductDesign">
            <ProductDesign />
          </Route>
          <Route path="/Learnable">
            <Learnable />
          </Route>
          <Route path="/ApplyKnowledge">
            <ApplyKnowledge />
          </Route>
          <Route path="/Journal">
            <Journal />
          </Route>
          <Route path="/Faq">
            <Faq />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
