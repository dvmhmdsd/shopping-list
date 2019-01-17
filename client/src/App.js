import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbars } from './components/Navbar';
import { ShoppingList } from './components/ShoppingList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbars />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
