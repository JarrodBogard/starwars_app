const StarshipCard = ({ items }) => {
  console.log(items);
  const planetItem = items.map((item, index) => (
    <div key={Math.random() + index}>
      <h3>{item.name}</h3>
      <span>Make:{item.manufacturer}</span>
      <span>Class:{item.starship_class}</span>
      <span>Cargo Capacity:{item.cargo_capacity} tons</span>
      <span>Passenger Capacity:{item.passengers}</span>
      <span>Price:¢{item.cost_in_credits} </span>
    </div>
  ));

  return <li>{planetItem}</li>;
};

export default StarshipCard;
