import { plantList } from "../datas/plantList";

function Categories({ setPlantListByCategory }) {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  function filterPlants(e) {
    const cat = e.target.value;
    // cat ? setPlantListByCategory(plantList.filter((plant) => plant.category === e.target.value)) : setPlantListByCategory(plantList);
    setPlantListByCategory(
      cat ? plantList.filter((plant) => plant.category === cat) : plantList
    );
  }

  return (
    <div>
      <select>
        {categories.map((cat) => (
          <option key={cat} value={cat} onClick={filterPlants}>
            {cat}
          </option>
        ))}
        <option value="" onClick={filterPlants}>
          All
        </option>
      </select>
      <button onClick={() => setPlantListByCategory(plantList)}>Reset</button>
    </div>
  );
}

export default Categories;
