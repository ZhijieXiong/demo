import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDone: false
    };
    this.toggleDone = this.toggleDone.bind(this);
  }

  toggleDone() {
    this.setState({
      isDone: !this.state.isDone
    }, () => {
      this.props.changeGoalsNumber(this.state.isDone);
    });
  }

  render() {
    let className = "";
    return (
      <div>
        <li className={this.state.isDone ? "done" : ""} onClick={() => this.toggleDone()}>
          {this.props.text}
        </li>
      </div>
    );
  }
}

export default Item;
