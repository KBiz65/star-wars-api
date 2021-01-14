import React from "react";

class DisplayData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterArray: props.data,
      name: "",
      birthdate: "",
      height: "",
      mass: "",
      homeworld: "",
      species: "",
    };

    // console.log("props.data from DisplayData", props.data);
    // console.log("characterArray: ", this.state.characterArray);
  }

  render() {
    return (
      <div className="data-display-container">
        <h1>DisplayData data</h1>
        <div>Row data goes here: </div>
      </div>
    );
  }
}

export default DisplayData;
