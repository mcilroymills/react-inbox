import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import Messages from './components/Messages';
import messages from './data/seed';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Toolbar/>
        <Messages messages={messages}/>
      </div>
    );
  }
}

export default App;
