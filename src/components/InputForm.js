import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import "./InputForm.css";

function InputForm(props) {
  return (
    <div className="data-container">
      <form onSubmit={props.handleSearchSubmit}>
        <div className="input-search-text input-row">
          <div className="input-text-container">
            <label className=""></label>
            <InputGroup>
              <Input
                type="text"
                id="searchButton"
                name="button"
                required
                placeholder="Enter character name"
              />
              <InputGroupAddon addonType="append">
                <InputGroupAddon addonType="append">
                  <Button className="Button">🔍</Button>
                </InputGroupAddon>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
