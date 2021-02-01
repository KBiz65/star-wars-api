import React from "react";

export default function Button(props) {
  return (
    <button
      type="button"
      className="col col-sm-2 btn previous-next-buttons"
      onClick={() => {
        props.onPageClick(props.type);
      }}
      style={
        props.show === null ? { visibility: "hidden" } : { padding: "5px" }
      }
    >
      {props.children}
    </button>
  );
}
