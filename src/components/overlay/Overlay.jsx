import "./overlay.scss";
import Search from "../header/Search";

function Overlay({overlay,setOverlay}) {
    

  return (

    <div onClick={()=>{setOverlay(false)}}  id="overlay-area">
        <div id="overlay-search-area">
          <input type="text" id="overlay-area-input" />            
        </div>
    </div>
  )
}

export default Overlay;