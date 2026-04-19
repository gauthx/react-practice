import React from "https://esm.sh/react@19";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("button", { onClick: this.increment }, "+"),
      React.createElement("p", null, `${this.state.count}`),
      React.createElement("button", { onClick: this.decrement }, "-"),
    );
  }
}
