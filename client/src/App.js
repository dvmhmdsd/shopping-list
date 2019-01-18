import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbars } from './components/Navbar';
import  ShoppingList  from './components/ShoppingList';


import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbars />
          <ShoppingList />
        </div>
      </Provider>
    );
  }
}

export default App;
