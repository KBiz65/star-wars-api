import React from "react";

class InputForm extends React.Component {
  render() {
    return (
      <div className="data-container">
        <div className="input-form-container">
          <form onSubmit={this.props.handleSearchSubmit}>
            <div className="form-row input-search-text">
              <div className="form-group col-sm-4">
                <label className="col col-sm-.5 col-form-label"></label>
                <input
                  className="form-control form-control-md"
                  type="text"
                  id="searchButton"
                  name="button"
                  placeholder="Enter search item here"
                  required
                ></input>
              </div>
              <button
                type="submit"
                className="col col-sm-1 btn input-search-button"
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
