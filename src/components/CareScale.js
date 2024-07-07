export default function CareScale(props) {
  const { scaleValue, careType } = props;
  const scaleType = careType==='water' ? '💧' : '☀️' ;
  const range = [1,2,3];
  return (
    /*<span
      style={{
        color: "black",
        fontWeight: "bold",
        backgroundColor: "aqua",
        borderRadius: "inherit",
        margin: "1rem",
        padding: "1rem"
      }}
    >
      CareScale Component
      <p>{scaleValue}{' '}{scaleType}</p>
    </span>*/
    <div>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
  );
}
