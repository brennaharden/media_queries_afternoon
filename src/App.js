import React from 'react';
import Nav from './components/Nav.js'

import './App.css';

class App extends React.Component {
  
  render(){
  
  return (
    <div className="App">
      <header className="main-header">
        <img className="start" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" />
        <Nav />
      </header>
    </div>
  );
}
}

export default App;
