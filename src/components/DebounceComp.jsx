import React, { Component } from "react";

class DebouceComp extends Component {
  state = {
    val: 0,
  };

  debounceValue = () => {
    console.log("hello debouncing");
    let timer;
    let context = this;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log("code here");
        context.setState({ val: context.state.val + 1 });
      }, 1000);
    };
  };

  render() {
    return (
      <div>
        the Value is : {this.state.val}
        <button onClick={this.debounceValue()}> Debounce Value</button>
      </div>
    );
  }
}

export default DebouceComp;
