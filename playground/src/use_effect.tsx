import { useState } from "react";
import { useEffect } from "react";

const TimeBomb = () => {
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    console.log("useEffect call back invoked");
    const id = setInterval(() => setTicks((ticks) => ticks + 1), 1000);
    return () => {
      console.log("cleanup function invoked");
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <p>Ticks: {ticks}</p>
    </div>
  );
};

const mockFetch = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          json() {
            return { message: "Heyy" };
          },
        }),
      5000,
    );
  });
};

type Response = {
  json: () => Promise<{ message: string }>;
};

const ExternalSys = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    mockFetch()
      .then((resp: Response) => resp.json())
      .then((a) => {
        console.log("Got data after fetch", a);
        setData(a);
      });
  }, []);

  return <p>Got message:{data.message}</p>;
};

const App = () => {
  return (
    <>
      <TimeBomb />
      <ExternalSys />
    </>
  );
};

export default App;
