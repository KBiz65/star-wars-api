import React from "react";
import InputForm from "./InputForm";

class InputContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className="input-content-container">
        <h1>InputContent Content</h1>
        <h3>Search for content in any of the columns below</h3>
        <InputForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default InputContent;
