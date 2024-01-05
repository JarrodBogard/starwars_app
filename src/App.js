import { useState, useEffect } from "react";

import Menu from "./Components/Menu";
import Pagination from "./Components/Pagination";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [selectedValue, setSelectedValue] = useState("people");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(`https://swapi.dev/api/${selectedValue}/`);

      const fetchedData = await response.json();

      setData(fetchedData.results);
      setIsLoading(false);
    };

    fetchData();
  }, [selectedValue]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  const changeHandler = (event) => {
    setSelectedValue(event.target.value);
  };

  const starWarsData = currentItems.map((element, index) => (
    <li key={Math.random() + index}>{element.name}</li>
  ));

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <Menu selectedValue={selectedValue} changeHandler={changeHandler} />
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
