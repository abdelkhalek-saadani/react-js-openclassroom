import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";
import monstera from "../assets/monstera.jpg";
import "../styles/PlantItem.css";

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="jh-plant-list">
        {plantList.map((plant) => (
          <PlantItem
            className="jh-plant-item"
            id={plant.id}
            name={plant.name}
            cover={monstera}
            water={plant.water}
            light={plant.light}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
