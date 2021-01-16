import React from "react";
import axios from "axios";

class DisplayItem extends React.Component {
  async getItemName(item) {
    const itemResponse = await axios.get(item);
    return itemResponse.data.name;
  }

  render() {
    const charactersArray = this.props.characters;
    const characterDisplay = charactersArray.map((characterItem) => (
      <div className="row">
        <div className="col col-sm-3 character-row">{characterItem.name}</div>
        <div className="col col-sm-2 character-row">
          {characterItem.birth_year}
        </div>
        <div className="col col-sm-1 character-row">{characterItem.height}</div>
        <div className="col col-sm-1 character-row">
          {characterItem.mass}
        </div>{" "}
        <div className="col col-sm-2 character-row">
          {console.log(this.getItemName(characterItem.homeworld))}
          {/* {this.getItemName(characterItem.homeworld)} */}
        </div>
        <div className="col col-sm-3 character-row">
          {characterItem.species}
        </div>
      </div>
    ));
    // const homeworldsArray = this.props.planets;
    // console.log("homeworldsArray: ", homeworldsArray);
    // console.log(
    //   "getItemName response: ",
    //   this.getItemName("http://swapi.dev/api/planets/1/")
    // );
    return (
      <div className="display-item-container">
        <div className="row display-row-header">
          <div className="col col-sm-3">Name</div>
          <div className="col col-sm-2">Birthdate</div>
          <div className="col col-sm-1">Height</div>
          <div className="col col-sm-1">Weight</div>
          <div className="col col-sm-2">Homeworld</div>
          <div className="col col-sm-3">Species</div>
        </div>
        {characterDisplay}
      </div>
    );
  }
}
export default DisplayItem;
