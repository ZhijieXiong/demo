import React from "react";
import Icon from "./Icon.jsx";

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  getShortNumber(value) {
    if (value < 1000) {
      return value.toString();
    } else {
      return (value/1000).toFixed(1).toString() + "k";  
    }
  }

  render() {
    return (
      <div className="summary">
        <div className="subtext">
          <Icon type="rt" />
          <p>{this.getShortNumber(this.props.retweets)}</p>
        </div>
        <div className="subtext">
          <Icon type="like" />
          <p>{this.getShortNumber(this.props.likes)}</p>
        </div>
      </div>
    );
  }
}

export default Summary;
