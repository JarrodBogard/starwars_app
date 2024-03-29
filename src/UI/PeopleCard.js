const PeopleCard = ({ items }) => {
  const peopleItem = items.map((item, index) => (
    <div key={Math.random() + index}>
      <h3>{item.name}</h3>
      <span>Gender:{item.gender}</span>
      <span>Skin:{item.skin_color}</span>
      <span>Hair:{item.hair_color}</span>
      <span>Height:{(item.height * 0.0328).toFixed(2)}ft.</span>
      <span>Weight:{item.mass}kilograms</span>
    </div>
  ));

  return <li>{peopleItem}</li>;
};

export default PeopleCard;
