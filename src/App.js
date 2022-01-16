import React, { Component } from "react";
import { Cardlist } from "./components/card-list/CardList";
import { Searchbox } from "./components/search-bar/Searchbar";
import "./App.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFeild: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchFeild } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    );

    return (
      <div className="App" style={{ textAlign: "center", padding: 10 }}>
        <h1>Monsters Roledex</h1>
        <Searchbox
          placeholder="search here..."
          handleChange={(event) => {
            this.setState({ searchFeild: event.target.value });
          }}
        />
        {console.log(this.state)}
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}
