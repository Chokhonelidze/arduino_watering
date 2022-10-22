import "./hardware.css";
export default function Hardware() {
  return (
    <div>
      <dl>
        <h4>Upload software to Arduino board with <a href='https://www.arduino.cc/en/software'>Arduino IDE</a>.</h4>  
        <h4>Connect the board to soil moisture sensor.</h4>
      </dl>
      <dl>
        <img
          alt="arduino1"
          className="big-image"
          src="/arduino_watering/images/sensorConnection.png"
        ></img>
      </dl>
      <dl className="longtext">
        Connect the water sensor to A0 +3 and gnd. 
        You need to calibrate the sensor.
        Open the Serial Monitor and test the sensor's air value.
        change code <br></br> <b>const int AirValue = 660; </b><br></br>
        Put the sensor in water and get the sensors water value and change the code
        <br></br> <b>const int WaterValue = 315;  </b>
        <br></br><h6 className='text-info'>you can add as many sensors as you have analog ports</h6> 


      </dl>
      <div className="mt-5"></div>
      <dl>
        <h4>Connect everything else</h4>
      </dl>
      <dl>
        <img
          alt="arduino2"
          className="big-image" 
          src="/arduino_watering/images/allConnections.png"
        ></img>
      </dl>
      <dl className="longtext">
        Finally, connect Microphone to the Arduino board you will need to use +
        - and digital output, connect the digital output from the microphone to
        the #3 port of the Arduino board.
      </dl>
    </div>
  );
}
