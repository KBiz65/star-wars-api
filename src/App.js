import React from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import InputContent from "./components/InputContent";
import DisplayItem from "./components/DisplayItem";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      planets: [],
      species: [],
    };
  }

  componentDidMount() {
    const allCharactersGet = axios.get("https://swapi.dev/api/people/");
    allCharactersGet.then((response) => {
      this.setState({
        characters: response.data,
      });
    });

    const allPlanetsGet = axios.get("https://swapi.dev/api/planets/");
    allPlanetsGet.then((response) => {
      this.setState({
        planets: response.data,
      });
    });

    const allSpeciesGet = axios.get("https://swapi.dev/api/planets/");
    allSpeciesGet.then((response) => {
      this.setState({
        species: response.data,
      });
    });
  }

  render() {
    // console.log(this.state.characters);
    return (
      <div className="App">
        <Header />
        <InputContent
          characters={this.state.characters}
          planets={this.state.planets}
          species={this.state.species}
        />
        <DisplayItem
          characters={this.state.characters}
          planets={this.state.planets}
          species={this.state.species}
        />
      </div>
    );
  }
}

export default App;
