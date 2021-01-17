import React from "react";
import axios from "axios";
import DisplayItem from "./DisplayItem";

class InputForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="data-container">
        <div className="input-form-container">
          <form onSubmit={this.props.handleSearchSubmit}>
            <div className="form-row input-search-text">
              <div className="form-group col-sm-6">
                <label className="col col-sm-.5 col-form-label"></label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  id="searchButton"
                  name="button"
                  placeholder="Enter search item here"
                  required
                ></input>
              </div>
              <button
                type="submit"
                className="col col-sm-4 btn input-search-button"
              >
                Enter
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default InputForm;
