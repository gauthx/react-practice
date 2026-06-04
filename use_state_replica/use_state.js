const React = () => {
  let state;
  function useState(initialValue) {

    const setState = (newState) => {
      state = newState;
      console.log("new state:", newState);
      this.Component();
    };

    if (state !== undefined) {
      console.log("Already initialized");
      return [state, setState];
    }

    state = initialValue;

    return [state, setState];
  }

  return useState;
};

const useState = React();

const Component = () => {
  const componentUseState = useState.bind({ Component });
  const [count, setCount] = componentUseState(0);

  if (count !== 1) {
    setCount(1);
  }
};

Component();
