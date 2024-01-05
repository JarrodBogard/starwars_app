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

  console.log(data);

  return <div className="App"></div>;
}

export default App;
