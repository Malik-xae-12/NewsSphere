

import './App.css';

import React, { useState } from 'react';
import Navbar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_API_KEY || "75c075b645bb4619a41b6de73de2eb66";

  const [progress, setProgress] = useState(0);

  const handleProgress = (value) => {
    setProgress(value);
  };

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Switch>
          <Route exact path="/"><News setProgress={handleProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" background="danger"/></Route> 
          <Route exact path="/business"><News setProgress={handleProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business" background="success"/></Route> 
          <Route exact path="/entertainment"><News setProgress={handleProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" background="primary"/></Route> 
          <Route exact path="/general"><News setProgress={handleProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" background="secondary"/></Route> 
          <Route exact path="/health"><News setProgress={handleProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" background="warning"/></Route> 
          <Route exact path="/science"><News setProgress={handleProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science" background="dark"/></Route> 
          <Route exact path="/sports"><News setProgress={handleProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" background="success"/></Route> 
          <Route exact path="/technology"><News setProgress={handleProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology" background="danger"/></Route> 
        </Switch>
      </Router>
    </div>
  );
};

export default App;
