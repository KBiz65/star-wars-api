import React from "react";

class InputForm extends React.Component {
  render() {
    return (
      <div className="data-container">
        <form onSubmit={this.props.handleSearchSubmit}>
          <div className="input-search-text input-row">
            <div className="input-text-container">
              <label className=""></label>
              <input
                className="input-search-text"
                type="text"
                id="searchButton"
                name="button"
                placeholder="Enter search item here"
                required
              ></input>
            </div>
            <button type="submit" className="input-search-button">
              🔍
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default InputForm;
