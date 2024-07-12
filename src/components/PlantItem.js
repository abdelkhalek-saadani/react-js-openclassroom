import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(e,plantName) {
	alert(`You want to buy 1 ${plantName}? Very good choice 🌱✨`);
	console.log('clickeddd');
	console.log(e);
}

function PlantItem({ cover, name, water, light, price }) {
	return (
		<li className='jh-plant-item' onClick={(e) => handleClick(e,name)}>
			<span className='jh-plant-item-price'>{price}€</span>
			<img className='jh-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem
