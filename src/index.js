import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Edit from './Pages/Edit';
import Play from './Pages/Play';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };

    let localItems = localStorage.getItem("items");
    if (localItems !== null) {
      this.state.items = JSON.parse(localItems);
    }

    this.getItems = this.getItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.clearItems = this.clearItems.bind(this);
    this.removeItem = this.removeItem.bind(this);

    this.itemFunctions = {
      getItems: this.getItems, 
      addItem: this.addItem, 
      clearItems: this.clearItems,
      removeItem: this.removeItem
    };
  }

  getItems() {
    return this.state.items;
  }

  addItem(name, date, description) {
    this.setState(prevState => {
      let newItems = prevState.items;
      newItems.push({
        name, date, description,
        id: Math.random()
      });

      // store items in local storage
      localStorage.setItem("items", JSON.stringify(newItems));
      return {
        items: newItems
      }
    });

  }

  removeItem(id) {
    this.setState(prevState => {
      let newItems = prevState.items;
      const index = -1;
      for (let i = 0; i < newItems.length; i++) {
        if (newItems[i].id == id) {
          index = i;
          break;
        }
      }

      if (index !== -1) {
        newItems.splice(index, 1);
      }

      // store items in local storage
      localStorage.setItem("items", JSON.stringify(newItems));
      return {
        items: newItems
      }
    });

  }

  clearItems() {
    this.setState({
      items: []
    })

    // store items in local storage
    localStorage.setItem("items", []);
  }

  render() {
    console.log(this.state.items);
    return (
      <Router>
        <Route path="/" component={Home} exact/>
        <Route path="/play" render={(props) => <Play {...props} itemFunctions={this.itemFunctions} />} exact/>
        <Route path="/edit" render={(props) => <Edit {...props} itemFunctions={this.itemFunctions} />} exact/>
      </Router>
    );
  } // add flashcards, pick the earlier event, and written (use the date picker to compare)
}

render(<App />, document.getElementById('root'));
