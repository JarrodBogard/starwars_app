const Menu = ({ selectedValue, changeHandler }) => {
  return (
    <select value={selectedValue} onChange={changeHandler}>
      <option value="people">People</option>
      <option value="starships">Ships</option>
      <option value="planets">Planets</option>
    </select>
  );
};

export default Menu;
