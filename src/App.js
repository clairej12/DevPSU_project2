import './App.css';
import React from 'react';
import axios from 'axios';
import Header from './Header.js';
import Todos from './Todos.js';

export default class App extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Todos items={this.state.items}/>
      </div>
    );
  }
}
//{this.state.items.map(items=><li>{items.title}</li>)}
