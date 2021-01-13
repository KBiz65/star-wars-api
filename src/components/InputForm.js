import React from "react";
import axios from "axios";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
  }

  // componentDidMount() {
  //   let jsonResponse = axios
  //     .get("https://swapi.dev/api/people/?search=")
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // }

  handleSubmit(event) {
    let searchItem = event.target.searchItem.value;
    let apiURL = "https://swapi.py4e.com/api/people/?search=" + searchItem;
    let responseArray = this.state.apiResponse;
    axios
      .get(apiURL)
      .then((response) => {
        console.log("response.data.results: ", response.data.results[0]);
        responseArray.push(response.data.results[0]);
        this.setState({
          ...this.state,
          apiResponse: responseArray,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // handleChange(event) {
  //   console.log("handleChange called");
  // }

  render() {
    return (
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
                value={this.state.searchItem}
                placeholder="Enter search item here"
                // onChange={this.handleChange}
                required
              ></input>
            </div>
            <button type="submit">Enter</button>
          </div>
        </form>
      </div>
    );
  }
}

export default InputForm;
