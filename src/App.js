import React from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import DisplayCharacters from "./components/DisplayCharacters";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      pages: {
        previous: null,
        next: null,
      },
    };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handlePageSubmit = this.handlePageSubmit.bind(this);
    this.httpToHttps = this.httpToHttps.bind(this);
  }

  componentDidMount() {
    this.getCharacters("https://swapi.dev/api/people/");
  }

  async getCharacters(url) {
    const characters = await axios.get(url);
    const previousPageUrl = characters.data.previous;
    const nextPageUrl = characters.data.next;

    for (const character of characters.data.results) {
      console.log("character.homeWorld: ", character.homeworld);
      const homeWorldUrlHttps = this.httpToHttps(character.homeworld);
      const homeWorld = await axios.get(homeWorldUrlHttps);
      character.homeWorld = homeWorld.data.name;

      if (character.species.length === 0) {
        character.species = "Human";
      } else {
        const speciesUrlHttps = this.httpToHttps(character.species[0]);
        const species = await axios.get(speciesUrlHttps);
        character.species = species.data.name;
      }
    }
    this.setState({
      characters: characters.data.results,
      pages: {
        previous: previousPageUrl,
        next: nextPageUrl,
      },
    });
  }

  httpToHttps(httpUrl) {
    console.log("httpUrl: ", httpUrl);
    return httpUrl.replace("http", "https");
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    const searchItem = event.target.button.value;
    this.getCharacters(
      "https://swapi.py4e.com/api/people/?search=" + searchItem
    );
  }

  handlePageSubmit(buttonName) {
    console.log(this.state.pages[buttonName]);
    const buttonsUrlHttps = this.httpToHttps(this.state.pages[buttonName]);
    this.getCharacters(buttonsUrlHttps);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <InputForm
          characters={this.state.characters}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <DisplayCharacters
          characters={this.state.characters}
          previous={this.state.pages.previous}
          next={this.state.pages.next}
          handlePageSubmit={this.handlePageSubmit}
        />
      </div>
    );
  }
}

export default App;
