import "./icons.scss";
import translateIcon from "../../assets/translate.svg"
import githubIcon from "../../assets/iconmonstr-github-1.svg"
import lightModeIcon from "../../assets/sun.svg"
import darkModeIcon from "../../assets/moon.svg"
import searchLogo from "../../assets/search.svg";

function Icons() {
  const darkMode = false;
  return (
    <div id='icons-section'>
      <a id="icons-search-icon" href="./"><img src={searchLogo} alt="" /></a>
      <a href="./"><img src={darkMode ? darkModeIcon:lightModeIcon} alt="" /></a>
      <a href="./"><img src={translateIcon} alt="" /></a>
      <a href="./"><img src={githubIcon} alt="" /></a>
      
    </div>
  )
}

export default Icons;