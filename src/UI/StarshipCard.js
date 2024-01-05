const StarshipCard = ({ items }) => {
  const planetItem = items.map((item, index) => (
    <li className="list-group-item" key={Math.random() + index}>
      <h3>{item.name}</h3>
      <span>Make:{item.manufacturer}</span>
      <span>Class:{item.starship_class}</span>
      <span>Cargo Capacity:{item.cargo_capacity} tons</span>
      <span>Passenger Capacity:{item.passengers}</span>
      <span>Price:¢{item.cost_in_credits} </span>
    </li>
  ));

  return <>{planetItem}</>;
};

export default StarshipCard;
