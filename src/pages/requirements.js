import "./requirements.css";
export default function Requirements() {
  let data = [
    {
      img: { src: "/arduino_watering/images/Arduino.png", alt: "Arduino" },
      text: { label: "1 Arduino board" },
    },
    {
      img: { src: "/arduino_watering/images/water_sensor.png", alt: "Sensor" },
      text: {
        url: "https://www.amazon.com/HiLetgo-Capacitive-Moisture-Voltage-3-3-5-5V/dp/B07W83ZVFB/ref=sr_1_7?crid=34ZNWFX5FF2K9&keywords=moisture+sensors&qid=1665675899&qu=eyJxc2MiOiI0LjIyIiwicXNhIjoiMy42MyIsInFzcCI6IjMuMDQifQ%3D%3D&sprefix=moisture+sensors%2Caps%2C129&sr=8-7",
        label: "Capacitive Soil Moisture Sensor Module Wide Voltage 3.3~5.5V",
      },
    },
    {
      img: {
        src: "/arduino_watering/images/pump.png",
        alt: "pump",
      },
      text: {
        url: "https://www.amazon.com/WayinTop-Submersible-Flexible-Fountain-Aquarium/dp/B07TMW5CDM/ref=sr_1_3?keywords=5v+water+pump+arduino&qid=1665676080&qu=eyJxc2MiOiIzLjM4IiwicXNhIjoiMi42NiIsInFzcCI6IjIuMjAifQ%3D%3D&sprefix=5+v+water+pum%2Caps%2C208&sr=8-3",
        label: "Mini Water Pump DC 3V 5V Micro Submersible Motor Pump",
      },
    },
    {
      img: { src: "/arduino_watering/images/R.png", alt: "reley" },
      text: {
        url: "https://www.amazon.com/dp/B07MMNGYDP/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B07MMNGYDP&pd_rd_w=JXtNG&content-id=amzn1.sym.dd2c6db7-6626-466d-bf04-9570e69a7df0&pf_rd_p=dd2c6db7-6626-466d-bf04-9570e69a7df0&pf_rd_r=7JQHPNAAM2JK0SKCARAF&pd_rd_wg=V9umT&pd_rd_r=e5491832-1341-411f-83f6-a20694e6c7b6&s=hi&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFLR09OSDk2RElROUEmZW5jcnlwdGVkSWQ9QTA1MTM3MDIxRUo4RFFaRzg5REU3JmVuY3J5cHRlZEFkSWQ9QTA0ODI1NTRHVERRRzlQSzNSTlImd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWMmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl",
        label: "Any 5v reley",
      },
    },
    {
      img: { src: "/arduino_watering/images/powersuply.png", alt: "reley" },
      text: {
        url: "https://www.amazon.com/Charger-Charging-Android-Charge-Samsung/dp/B09J4QN5P6/ref=sr_1_13?keywords=phone%2Bcharger&qid=1665676847&qu=eyJxc2MiOiI3LjIzIiwicXNhIjoiNi41OCIsInFzcCI6IjYuMzcifQ%3D%3D&sr=8-13&th=1",
        label: "5V power suply",
      },
    },
  ];
   data = data.map((input,index)=>{
    return <fieldset key={index+'fs'}>
        <img src={input?.img?.src} alt={input?.img?.alt}  className='mid-images' target="_blank" />
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
