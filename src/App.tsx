import React, { useState, useEffect } from "react";
import axios from "axios";

export interface Dog {
  id: string;
  url: string;
  width: number;
  height: number;
}

const App: React.FC = (): JSX.Element => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const getDogs = async () => {
      const { data } = await axios.get<Dog[]>(
        "https://api.thedogapi.com/v1/images/search"
      );

      setDogs(data);
    };
    getDogs();
  }, [counter]);

  return (
    <div onClick={() => setCounter(counter + 1)}>
      <h1>I love you Coco</h1>
      {dogs.map((dog) => (
        <img key={dog.id} alt="dog" src={dog.url} />
      ))}
    </div>
  );
};

export default App;
