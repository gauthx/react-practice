import React from "https://esm.sh/react@19";
import { createRoot } from "https://esm.sh/react-dom@19/client";
import Poem from "./poem.js";
import Counter from "./counter.js";

const element = React.createElement(
  "h1",
  { style: { color: "green", textDecoration: "underline" } },
  "Hello from React 19!",
);

const root = createRoot(document.getElementById("root"));
root.render(element);

const poemEle = createRoot(document.getElementById("poem"));
poemEle.render(React.createElement(Poem));

const counterContainer = createRoot(document.getElementById("counter"));
counterContainer.render(React.createElement(Counter));
