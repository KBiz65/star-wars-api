import React from "react";

function Character(props) {
  const { name, birth_year, height, mass, homeWorld, species } = props;
  return (
    <div className="row display-character-rows">
      <div className="col col-sm-3 character-row">{name}</div>
      <div className="col col-sm-2 character-row">{birth_year}</div>
      <div className="col col-sm-1 character-row">{height}</div>
      <div className="col col-sm-1 character-row">{mass}</div>
      <div className="col col-sm-2 character-row">{homeWorld}</div>
      <div className="col col-sm-3 character-row">{species}</div>
    </div>
  );
}

export default Character;
