import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";
import monstera from "../assets/monstera.jpg";
import '../styles/PlantItem.css'

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
          <li key={plant.id} className="jh-plant-item">
            {plant.isBestSale && <span>🔥</span>}
            <PlantItem
            className="jh-plant-item"
              name={plant.name}
              cover={monstera}
              water={plant.water}
              light={plant.light}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
