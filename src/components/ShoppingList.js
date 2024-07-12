import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";
import Categories from "./Categories";
import { useState } from "react";

function ShoppingList({ cart, updateCart }) {
  const [plantListByCategory, setPlantListByCategory] = useState(plantList);

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="jh-shopping-list">
      <Categories setPlantListByCategory={setPlantListByCategory}/>
      <ul className="jh-plant-list">
        {plantListByCategory.map(({ id, cover, name, water, light, price }) => (
          <div key={id}>
            <PlantItem
              cover={cover}
              name={name}
              water={water}
              light={light}
              price={price}
            />
            <button onClick={() => addToCart(name, price)}>Add</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
