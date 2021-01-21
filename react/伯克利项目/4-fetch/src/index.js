import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quote: "" };
  }

  async handleClick() {
    // YOUR CODE HERE
    // 1. Send a request to the Kanye West API
    let url = "https://api.kanye.rest";
    let response = await fetch(url);
    // 2. Parse the Response as JSON
    let data = await response.json();
    // 3. Use the `.quote` property of the JSON
    //    to update the `quote` field in state.
    this.setState({
      quote: data.quote
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Kanye says...</h1>
        <p>{this.state.quote}</p>
        <button
          className="ui primary button"
          style={{ marginTop: "10px", width: "300px" }}
          onClick={e => this.handleClick()}
        >
          获取名言
        </button>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
