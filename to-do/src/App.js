import React, { Component } from 'react';
import routes from './routes';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        { routes }
      </div>
    );
  }
}

