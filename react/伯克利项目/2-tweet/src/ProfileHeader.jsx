import React from "react";
import Icon from "./Icon";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  renderVerified() {
    if (this.props.verified) {
      return (
        <Icon imageURL="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2000px-Twitter_Verified_Badge.svg.png" />
      );
    }
  }

  render() {
    return (
      <div className="header">
        <img src={this.props.imageURL} />
        <div>
          <h3>
            {this.props.name} {this.renderVerified()}
          </h3>
          <div className="subtext">@{this.props.username}</div>
        </div>
      </div>
    );
  }
}

export default Header;
