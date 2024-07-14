import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";
import cover from "../assets/monstera.jpg";

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
            name={plant.name}
            cover={cover}
            id={plant.id}
            light={plant.light}
            water={plant.water}
            isSpecialOffer={plant.isSpecialOffer}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
