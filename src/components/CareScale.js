import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

function CareScale({ scaleValue, careType, plantName }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );

  return (
    <div onClick={() => careAlert(plantName, careType, scaleValue)}>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

function careAlert(name, type, value) {
  let valueString ='';
  switch(value) {
    case 1:
      valueString = 'small';
      break;
    case 2:
      valueString = 'moderate'
      break;
    default:
      valueString = 'large'
  } 
  alert(
    `This plant (${name}) requires a ${valueString} amount of ${type}`
  );
}

export default CareScale;
