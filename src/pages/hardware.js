import "./hardware.css";
export default function Hardware() {
  return (
    <div>
      <dl>
        <h4>Connect LED to a power supply and connect LED to Arduino board.</h4>
      </dl>
      <dl>
        <img
          alt="arduino1"
          className="big-image"
          src="/arduino_lights/images/connection1.png"
        ></img>
      </dl>
      <dl className="longtext">
        Connect LED's positive and negative lines to the power supply, Connect
        Arduino to LED's three lines + - and digital input.
      </dl>
      <div className="mt-5"></div>
      <dl>
        <h4>Connect Arduino to High Sensitivity Microphone Sensor.</h4>
      </dl>
      <dl>
        <img
          alt="arduino2"
          className="big-image"
          src="/arduino_lights/images/connection2.png"
        ></img>
      </dl>
      <dl className="longtext">
        Finally, connect Microphone to the Arduino board you will need to use +
        - and digital output, connect the digital output from the microphone to
        the #3 port of the Arduino board.
      </dl>
      <dl className="text-danger longtext">
      Do not connect Arduino directly to the power supply user LED's output power lines instead.
      </dl>
    </div>
  );
}
