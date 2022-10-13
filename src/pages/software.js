
import "./software.css";
export default function Software(){
    return <div className="software">
        <div className="code">
            <a href="/arduino_lights/codes/arduino_lights.ino" className="btn btn-primary m-3" role="button">Download</a>
        <iframe title='Lights' src="/arduino_lights/codes/arduino_lights.html" className="iframe"></iframe>
        </div>
    </div>
}