import "./overlay.scss";
import Search from "../header/Search";
import { useState } from "react";

function Overlay({overlay,setOverlay}) {
    const [inpValue,setInpValue] = useState('');
  return (

    <div onClick={()=>{setOverlay(false)}}  id="overlay-area">
        <div onClick={(e)=>{e.stopPropagation()}} id="overlay-search-area">
          <input onChange={(e)=>{setInpValue(e.target.value)}} value={inpValue}  type="text" id="overlay-area-input" placeholder="Search Docs" />
          <h1 style={{fontSize:inpValue?"1rem":"0.75rem",color:inpValue?"white":""}} >{inpValue ?"No result for " +inpValue:"No recent searches"}</h1>            
        </div>
    </div>
  )
}

export default Overlay;