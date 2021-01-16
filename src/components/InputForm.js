import React from "react";
import axios from "axios";
import DisplayData from "./DisplayData";

class InputForm extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   let allCharacters = this.state.characters;
  //   axios.get("https://swapi.dev/api/people/").then((response) => {
  //     response.data.results.forEach((element) => {
  //       allCharacters.push(element);
  //     });
  //   });

  //   this.setState({
  //     ...this.state,
  //     characters: allCharacters,
  //   });
  // }

  // handleChange(event) {}

  handleSubmit(event) {
    let searchItem = event.target.searchItem.value;
    let apiURL = "https://swapi.py4e.com/api/people/?search=" + searchItem;
    let responseArray = this.props.characters;
    // console.log("responseArray when handleSubmit called: ", responseArray);
    // console.log("apiURL: ", apiURL);

    axios
      .get(apiURL)
      .then((response) => {
        responseArray = response.data.results;
        // console.log(
        //   "responseArray when pushed after axios call: ",
        //   responseArray
        // );
        this.setState({
          ...this.state,
          characters: responseArray,
        });
        // console.log("this.state.apiResponse: ", this.state.characters);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="data-container">
        <div className="input-form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-row expense-input-content">
              <div className="form-group col-sm-3">
                <label className="col col-sm-.5 col-form-label"></label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  id="searchItem"
                  name="searchItem"
                  // value={this.state.searchItem}
                  placeholder="Enter search item here"
                  // onChange={this.handleChange}
                  required
                ></input>
              </div>
              <button type="submit">Enter</button>
            </div>
          </form>
        </div>
        <DisplayData characters={this.props.characters} />
      </div>
    );
  }
}

export default InputForm;
