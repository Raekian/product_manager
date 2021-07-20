import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Router>
          <Main path="/" />
          <Details path="/product/:_id" />
          <Update path="/api/update/:_id" />
      </Router>
    </div>
  );
}

export default App;
