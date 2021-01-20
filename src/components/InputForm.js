import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

class InputForm extends React.Component {
  render() {
    return (
      <div className="data-container">
        <form onSubmit={this.props.handleSearchSubmit}>
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
                    <Button
                      style={{
                        backgroundColor: "#E5E5E5",
                        border: "none",
                      }}
                    >
                      🔍
                    </Button>
                  </InputGroupAddon>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default InputForm;
