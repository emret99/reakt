import { useState } from "react";
import SettingsGear from "../../assets/settings-gear-svgrepo-com.svg";
import "./displaymode.scss";

function DisplayMode() {

  const [popup,setPopup] = useState(false);

  const displayModes =[{
    name:"Default",
    fullscreen:false,
    header:true,

  },{
    name:"SlideShow",
    fullscreen:true,
    header:false

  }
  ,{
    name:"Infinite Scroll",
    fullscreen:false,
    header:true
  }]
  
  function setDisplay(display) {

    localStorage.setItem("displayMode",display);
    window.location.reload();
  }
  return (
    <div id='display-mode-area'>
      <div id='display-popup'style={{display:popup ? "block":"none"}}>
        <p id="popup-title">Display Mode</p>
        <ul id="popup-select">
         {displayModes.map((item,key)=>(
          <li key={key} onClick={()=>{setDisplay(JSON.stringify(item))}} >{item.name}</li>
         ))}
        </ul>

      </div>
      <div id='display-icon' onClick={()=>{setPopup(!popup)}} >
        <img src={SettingsGear} alt="" />
      </div>

    </div>
  )
}

export default DisplayMode