import React, { Component } from "react";

class BdayButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
  }

  handleClick = () => {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.btnText} {this.props.firstName} {this.props.lastName}
      </button>
    );
  }
}

export default BdayButton;
