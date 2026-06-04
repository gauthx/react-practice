import { useEffect, useRef, useState } from "react";

const useHover = (ref: React.RefObject<HTMLButtonElement | null>) => {
  const [isHover, setHover] = useState(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("mouseenter", () => {
        setHover(true);
      });

      ref.current.addEventListener("mouseleave", () => {
        setHover(false);
      });
    }
  }, [ref]);

  return [isHover];
};

const App = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [isHover] = useHover(buttonRef);

  return (
    <>
      <button
        ref={buttonRef}
        style={isHover ? { background: "red" } : { background: "blue" }}
      >
        Focus
      </button>
    </>
  );
};

const InputFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input ref={inputRef} type="text"></input>
      <button onClick={() => inputRef.current?.focus()}>Focus</button>
    </>
  );
};

const _App = () => {
  return (
    <>
      <InputFocus />
    </>
  );
};

export default App;
