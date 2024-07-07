import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import CareScale from './CareScale'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='jh-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='jh-plant-item'>
						{plant.name} <br/>
            <CareScale careType='water' scaleValue={plant.water} />
            <CareScale careType='light' scaleValue={plant.light} />
            {plant.isSpecialOffer ? <div className="jh-sales">
              Sale
            </div>: null}
            {/* {plant.isSpecialOffer && <div className="jh-sales">
              Sale
            </div>} */}
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
