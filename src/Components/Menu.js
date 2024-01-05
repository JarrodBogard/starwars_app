const Menu = ({ selectedValue, changeHandler }) => {
  return (
    <select
      className="form-select mb-2 w-auto"
      value={selectedValue}
      onChange={changeHandler}
    >
      <option value="people">People</option>
      <option value="starships">Ships</option>
      <option value="planets">Planets</option>
    </select>
  );
};

export default Menu;
