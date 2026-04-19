import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";

const Counter = () => {
  const [count, inc] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => inc(count + 1)}>Increment</button>
    </div>
  );
};

export const Slideshow = ({ children }) => {

  const [currentSlide, advanceSlide] = useState(0);
  return (
    <div>
      <div>{children[currentSlide]}</div>
      <button onClick={() => advanceSlide(currentSlide + 1)}>Click for next slide</button>
    </div>
  );
};

export const App = () => {
 return <Slideshow>
    <div>First slide</div>
    <div>Sec slide</div>
    <div>Third slide</div>
    <div>Four slide</div>
    <div>Fifth slide</div>
    <div>Sixth slide</div>
  </Slideshow>;
};

export default Counter;
