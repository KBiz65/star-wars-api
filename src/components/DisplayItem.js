import React from "react";
import axios from "axios";

class DisplayItem extends React.Component {
  getItemName(item) {
    axios.get(item).then((response) => {
      console.log("data from axios inside function: ", response.data.name);
      return response.data.name;
    });
  }

  render() {
    console.log(
      "inside render displayItem.js",
      this.getItemName(this.props.homeworld)
    );
    return (
      <div className="display-row-container">
        <div className="display-row">{this.props.name}</div>
        <div className="display-row">{this.props.birthdate}</div>
        <div className="display-row">{this.props.height}</div>
        <div className="display-row">{this.props.mass}</div>
        <div className="display-row">
          {this.getItemName(this.props.homeworld)}
        </div>
        <div className="display-row">{this.props.species}</div>
      </div>
    );
  }
}
export default DisplayItem;
