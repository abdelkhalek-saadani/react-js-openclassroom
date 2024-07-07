import CareScale from "./CareScale";
import '../styles/PlantItem.css'

function PlantItem(props) {
  const { name, cover, id, light, water } = props;
  return (
    <div
    //   style={{
    //     border: "solid 1px black",
    //     borderRadius: "2px",
    //     margin: "2px",
    //   }}
    className="jh-plant-item"
    >
      {name}
      <img className="jh-plant-item-cover" src={cover} alt='the cover of the plant'/>
      <CareScale careType="water" scaleValue={water} />
      <CareScale careType="light" scaleValue={light} />
    </div>
  );
}

export default PlantItem;
