import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbars } from './components/Navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbars />
      </div>
    );
  }
}

export default App;
