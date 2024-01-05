import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(`https://swapi.dev/api/people/`);

      const fetchedData = await response.json();

      setData(fetchedData.results);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const starWarsData = data.map((element, index) => (
    <li key={Math.random() + index}>{element.name}</li>
  ));

  return (
    <div className="App">
      <ul>{starWarsData}</ul>
    </div>
  );
}

export default App;
