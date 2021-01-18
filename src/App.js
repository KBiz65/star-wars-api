import React from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import InputContent from "./components/InputContent";
import InputForm from "./components/InputForm";
import DisplayItem from "./components/DisplayItem";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      previous: "",
      next: "",
    };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handlePageSubmit = this.handlePageSubmit.bind(this);
  }

  async getCharacters(url = "https://swapi.dev/api/people/") {
    const characters = await axios.get(url);
    const previousPage = await characters.data.previous;
    const nextPAGE = await characters.data.next;

    for (const character of characters.data.results) {
      const homeworld = await axios.get(character.homeworld);
      character.homeworld = homeworld.data.name;

      const species = await axios.get(character.species);
      character.species = species.data.name;

      if (!character.species) {
        character.species = "human";
      }

      this.setState({
        characters: characters.data.results,
        previous: previousPage,
        next: nextPAGE,
      });
    }
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    let searchItem = event.target.button.value;
    let apiURL = "https://swapi.py4e.com/api/people/?search=" + searchItem;
    this.getCharacters(apiURL);
  }

  handlePageSubmit(buttonName) {
    if (buttonName === "previousButton") {
      if (this.state.previous) {
        this.getCharacters(this.state.previous);
      }
    }

    if (buttonName === "nextButton") {
      if (this.state.next) {
        this.getCharacters(this.state.next);
      }
    }
  }

  componentDidMount() {
    this.getCharacters();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <InputContent />
        <InputForm
          characters={this.state.characters}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <DisplayItem
          characters={this.state.characters}
          handlePageSubmit={this.handlePageSubmit}
        />
      </div>
    );
  }
}

export default App;
