import "./main.css";
export default function Main() {
  return (
    <div className="Main">
      <div className="video">
        <video width="200" height="240" controls>
          <source src='/arduino_lights/videos/lightsDemo2.mp4' type="video/mp4" ></source>
        </video>
        
      </div>
      <p className="text">
        Audio pattern-activated lights it is selecting colors randomly.
      </p>
    </div>
  );
}
