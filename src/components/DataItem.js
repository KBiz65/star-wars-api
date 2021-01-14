import React from "react";

class DataItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props,
    };
  }

  render() {
    return (
      <div className="data-item-container">
        <div className="data-item-row">
          <div></div>
        </div>
      </div>
    );
  }
}

export default DataItem;
