import React from "react";
import ReactDOM from "react-dom";
import Item from "./Item";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.placeholderList = ["Item placeholder 1", "Item placeholder 2"];
    this.state = {
      currentGoal: "",
      goals: [],
      leftGoals: 0
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.changeGoalsNumber = this.changeGoalsNumber.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      currentGoal: event.target.value
    });
  }

  addItem() {
    this.setState({
      goals: [...this.state.goals, this.state.currentGoal],
      leftGoals: this.state.leftGoals+1
    });
  }

  changeGoalsNumber(isDone) {
    if (isDone) {
      this.setState({
        leftGoals: this.state.leftGoals-1
      });
    } else {
      this.setState({
        leftGoals: this.state.leftGoals+1
      });
    }  
  }

  render() {
    return (
      <div className="list-container">
        <div className="input-container">
          <input
            className="list-input"
            placeholder="New Item"
            // value="CHANGE ME!"
            onChange={e => this.handleInputChange(e)}
          />
          <button className="list-submit" onClick={() => this.addItem()}>
            Submit
          </button>
        </div>
        <ul className="item-list">
          {this.state.goals.map((item, index) => (
            <Item key={index} text={item} changeGoalsNumber={this.changeGoalsNumber} />
          ))}
        </ul>
        <p>未完成的项目数量：{this.state.leftGoals}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
