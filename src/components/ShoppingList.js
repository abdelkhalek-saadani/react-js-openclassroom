import { plantList } from '../datas/plantList'

function ShoppingList() {
	return <ul>
		{plantList.map((plant) => (
			<li key={plant.category}>{plant.category}</li>
		))}
	</ul>
}

export default ShoppingList
