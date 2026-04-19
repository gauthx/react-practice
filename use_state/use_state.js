const React = () => {
  const useState = (initialValue) => {
    let state = initialValue;

    const setState = (newState) => {
      state = newState;
      console.log("new state:", newState);
    };

    return [state, setState];
  };

  return useState;
};

const useState = React();

const Component = () => {
  const [count, setCount] = useState(0);

  console.log(count);
  if (count !== 1) {
    setCount(1);
  }
};

Component();
