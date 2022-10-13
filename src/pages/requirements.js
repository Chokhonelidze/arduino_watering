import "./requirements.css";
export default function Requirements() {
  let data = [
    {
      img: { src: "/arduino_lights/images/Arduino.png", alt: "Arduino" },
      text: { label: "1 Arduino board" },
    },
    {
      img: { src: "/arduino_lights/images/sensor.png", alt: "Sensor" },
      text: {
        url: "https://www.amazon.com/FainWan-Sensitivity-Microphone-Detection-Ar-duino/dp/B09JZD88VZ/ref=sr_1_1_sspa?crid=334RL0JO9LYB2&keywords=sensitivity+microphone+sensor&qid=1665367278&sprefix=sensitivity+microphone+sensor%2Caps%2C186&sr=8-1-spons&psc=1",
        label: "High Sensitivity Microphone Sensor",
      },
    },
    {
      img: {
        src: "https://m.media-amazon.com/images/I/61wF7bGaFLL.__AC_SY445_SX342_QL70_FMwebp_.jpg",
        alt: "lights",
      },
      text: {
        url: "https://a.co/d/9LeItf6",
        label: "PCB Full Color LED Pixel Strip",
      },
    },
    {
      img: { src: "/arduino_lights/images/Adapter.png", alt: "adapter" },
      text: {
        label: "5V 30w DC Power Supplay Adapter",
      },
    },
  ];
   data = data.map((input,index)=>{
    return <fieldset key={index+'fs'}>
        <img src={input?.img?.src} alt={input?.img?.alt}  className='mid-images' />
        <legend> 
            {input?.text?.url?<a className='link' href={input.text.url}>{input.text.label}</a>:<>{input.text.label}</>}
        </legend>
        </fieldset>
   });
  return (
    <div className="requirements">
      <div>
        for this project you will need:
        {data}
      </div>
    </div>
  );
}
