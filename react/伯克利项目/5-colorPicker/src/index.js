import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";


function rgbToHex(r, g, b) {
  function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function ColorInput({ color, onChange }) {
  return (
    <div
      className="ui text container field labeled input"
      style={{ marginBottom: "10px" }}
    >
      <label className="ui label">{color}</label>
      <input
        type="text"
        placeholder="(0-255)"
        onChange={e => onChange(color, e.target.value)}
      />
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    // YOUR CODE HERE: Initialize your state!
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(color, value) {
    let colorObj = {};
    colorObj[color] = value;
    this.setState(colorObj);
  }

  handleSubmit() {
    let colorHex = rgbToHex(this.state.red, this.state.green, this.state.blue);
    let url = "https://lights-proxy.glitch.me/?color=" + colorHex;
    let response = await fetch(url);
    let data = await response.text();
    console.log(data);
  }

  render() {
    let colorStr = "rgb(" + (this.state.red === "" ? 0 : this.state.red) + "," 
    + (this.state.green === "" ? 0 : this.state.green) + ","
    + (this.state.blue === "" ? 0 : this.state.blue) + ")"
    
    return (
      <div className="App">
        <h1>Color Picker</h1>
        {/* YOUR CODE HERE: Part 1 */}
        {/*
            An example input is below.
            Don't forget to add an onChange event handler!.
          */}
        {/* <div className="ui labeled input">
          <div className="ui label">Red</div>
          <input type="text" placeholder="(0-255)" />
        </div> */}
        <ColorInput color={"red"} onChange={this.handleChange} /><br/>
        <ColorInput color={"green"} onChange={this.handleChange} /><br/>
        <ColorInput color={"blue"} onChange={(e) => {this.handleChange()}} />
        <div
          className="preview"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: colorStr,
            margin: "20px auto"
          }}
        />
        {/* YOUR CODE HERE: Part 3 */}
        <button className="ui button" onClick={this.handleSubmit}>
          发送
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
