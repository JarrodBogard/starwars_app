const PlanetCard = ({ items }) => {
  console.log(items);
  const planetItem = items.map((item, index) => (
    <div key={Math.random() + index}>
      <h3>{item.name}</h3>
      <span>Terrain:{item.terrain}</span>
      <span>Climate:{item.climate}</span>
      <span>Diameter:{item.diameter} kilometers</span>
      <span>Rotation:{item.rotation_period} days</span>
      <span>Orbit:{item.orbital_period} days</span>
      <span>Population:{item.population}</span>
    </div>
  ));

  return <li>{planetItem}</li>;
};

export default PlanetCard;
