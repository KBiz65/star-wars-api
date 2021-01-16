import React from "react";
import InputForm from "./InputForm";

class InputContent extends React.Component {
  render() {
    // console.log("this.props in InputContent: ", this.props);
    return (
      <div className="input-content-container">
        <h1>InputContent Content</h1>
        <h3>Search for content in any of the columns below</h3>
      </div>
    );
  }
}

export default InputContent;
