import { useState, useEffect } from "react";

import Pagination from "./Components/Pagination";

function App() {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  const starWarsData = currentItems.map((element, index) => (
    <li key={Math.random() + index}>{element.name}</li>
  ));

  return (
    <div className="App">
      <ul>{starWarsData}</ul>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
