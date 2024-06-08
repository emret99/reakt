import "./header.scss";
import Icons from "./Icons";
import Pages from "./Pages";
import Search from "./Search";
import logo from "../../assets/react-svgrepo-com.svg";

function Header({scroll}) {
  return (
    <div id='header' className={scroll ? 'header-fixed':''}>
      <a id="img-anch" href="./"><img id="react-logo" src={logo} alt="" /></a>
      <a id="version-text" href="./">v18.3.1</a>
        <Search/>
        <Pages/>
        <Icons/>
            
        

    </div>
  )
}

export default Header;