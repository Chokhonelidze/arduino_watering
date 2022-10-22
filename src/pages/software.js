
import "./software.css";
export default function Software(){
    return <div className="software">
        <div className="code">
            <p className='text-warning'>
                You need to configure sensor(s) and change: 
                <br></br><b>const int AirValue = 660;</b><br></br>
                <b>const int WaterValue = 315;</b>
            </p>
            <p className='text-info'>
            To configure sensor(s) open the serial monitor in Arduino IDE. Change AirValue based on sensor input.
                Put the sensor in water and measure again change WaterValue based on sensor's water value measurements.
            </p>
            <a href="/arduino_watering/codes/water.ino" className="btn btn-primary m-3" role="button">Download</a>
        <iframe title='watering' src="/arduino_watering/codes/water.html" className="iframe"></iframe>
        </div>
    </div>
}