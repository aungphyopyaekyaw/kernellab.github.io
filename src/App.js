import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';

const DEFAULT_CONFIG = {
  trackingId: 'UA-119576378-1',
  debug: false,
  gaOptions: {
    cookieDomain: 'none'
  }
};

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.ga = {
      configs: [DEFAULT_CONFIG]
    };
  }

  filteredConfigs = () => {
    return this.ga.configs.filter(({ trackingId: id }) => id);
  };

  initReactGA = () => {
    if (this.filteredConfigs().length === 0) {
      return;
    }
    ReactGA.initialize(this.ga.configs);
    ReactGA.pageview(window.location.pathname + window.location.search);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          
          </p>
          {this.initReactGA()}
        </header>
      </div>
    );
  }
}

export default App;
