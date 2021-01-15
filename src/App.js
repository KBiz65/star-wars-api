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
    };
  }

  // componentDidMount() {
  //   console.log("componentDidMount called");
  //   let allCharacters = this.state.characters;
  //   console.log(allCharacters);
  //   axios.get("https://swapi.dev/api/people/").then((response) => {
  //     response.data.results.forEach((element) => {
  //       allCharacters.push(element);
  //     });
  //   });
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <InputContent />
        <DisplayItem characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
