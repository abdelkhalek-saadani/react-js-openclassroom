import { plantList } from "../datas/plantList";

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, currentPlant) =>
      acc.includes(currentPlant.category)
        ? acc
        : acc.concat(currentPlant.category),
    []
  );
  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>

      <ul>
        {plantList.map((plant) => (
          <li key={plant.id}>{plant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
