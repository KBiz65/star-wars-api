import React from "react";
// import axios from "axios";

class DisplayItem extends React.Component {
  // getItemName(item) {
  //   axios.get(item).then((response) => {
  //     console.log("data from axios inside function: ", response.data.name);
  //     return response.data.name;
  //   });
  // }

  render() {
    // console.log(this.props.characters.results);
    const charactersArray = this.props.characters.results;
    console.log(charactersArray);
    // const characterName = charactersArray.forEach((character) => {
    //   console.log(character.name);
    // });

    return (
      <div className="row display-row-container">
        {/* <div className="col col-sm-3 display-row">
          {charactersArray[0].name}
        </div> */}
        {/* <div className="col col-sm-2 display-row">{this.props.birthdate}</div>
        <div className="col col-sm-1 display-row">{this.props.height}</div>
        <div className="col col-sm-1 display-row">{this.props.mass}</div>
        <div className="col col-sm-2 display-row">{this.props.homeworld}</div>
        <div className="col col-sm-3 display-row">{this.props.species}</div> */}
      </div>
    );
  }
}
export default DisplayItem;
