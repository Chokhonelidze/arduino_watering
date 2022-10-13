import "./main.css";
export default function Main() {
  return (
    <div className="Main">
      <div className="video">
        <img src='/arduino_watering/images/main.png' alt='watering system'></img>
      </div>
      <p className="text">
        Arduino-based automatic watering system. 
        The sensor checks the moisture level of the soil and water plants if needed
      </p>
    </div>
  );
}
