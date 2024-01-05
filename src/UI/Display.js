import StarshipCard from "./StarshipCard";
import PlanetCard from "./PlanetCard";
import PeopleCard from "./PeopleCard";

const Display = ({ selectedValue, items }) => {
  let starWarsData;

  if (selectedValue === "starships") {
    starWarsData = <StarshipCard items={items} />;
  } else if (selectedValue === "planets") {
    starWarsData = <PlanetCard items={items} />;
  } else {
    starWarsData = <PeopleCard items={items} />;
  }

  return <ul>{starWarsData}</ul>;
};

export default Display;
