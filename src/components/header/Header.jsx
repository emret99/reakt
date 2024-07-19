import "./header.scss";
import Icons from "./Icons";
import Pages from "./Pages";
import Search from "./Search";
import logo from "../../assets/react-svgrepo-com.svg";
import hamburger from "../../assets/hamburger-menu-svgrepo-com.svg";

function Header({scroll,overlay,setOverlay}) {
  function displayHeader() {
   return localStorage.getItem("displayMode") &&  {
      display:JSON.parse(localStorage.getItem("displayMode")).header ? "":"none"
    }

    
  }
  return (
    <div style={{display:localStorage.getItem("displayMode") && displayHeader().display}} id='header' className={scroll  ? 'header-fixed':''}>
      <button style={{display:"inherit"}} id="header-hamburger-icon" >
        <img src={hamburger} alt="" />
      </button>
      <a style={{display:"inherit"}} id="img-anch" href="./"><img id="react-logo" src={logo} alt="" /></a>
      <a style={{display:"inherit"}} id="version-text" href="./">v18.3.1</a>
        <Search overlay={overlay} setOverlay={setOverlay} text={"Search"}/>
        <Pages/>
        <Icons/>
            
        

    </div>
  )
}

export default Header;