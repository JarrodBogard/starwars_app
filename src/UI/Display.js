const Display = ({ items }) => {
  const starWarsData = items.map((element, index) => (
    <li key={Math.random() + index}>{element.name}</li>
  ));

  return <ul>{starWarsData}</ul>;
};

export default Display;
