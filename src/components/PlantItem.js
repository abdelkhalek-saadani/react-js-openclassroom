import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function PlantItem(props) {
  const { name, cover, id, light, water, isSpecialOffer } = props;
  return (
    //   style={{
    //     border: "solid 1px black",
    //     borderRadius: "2px",
    //     margin: "2px",
    //   }}

    <li key={id} className="jh-plant-item">
      {/* {isBestSale && <span>🔥</span>} */}
      {name}
      <img
        className="jh-plant-item-cover"
        src={cover}
        alt="the cover of the plant"
      />
      <CareScale careType="water" scaleValue={water} />
      <CareScale careType="light" scaleValue={light} />
      {isSpecialOffer ? <div className="jh-sales">Sale</div> : null}
      {/* {plant.isSpecialOffer && <div className="jh-sales" >
              Sale
            </div>} */}
    </li>
  );
}

export default PlantItem;
