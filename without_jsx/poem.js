import React from "https://esm.sh/react@19";

export default class Poem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        { style: { color: "red", fontSize: "3em" } },
        "Roses are red",
      ),
      React.createElement(
        "p",
        { style: { color: "blue", fontSize: "3em" } },
        "Violets are blue",
      ),
    );
  }
}
