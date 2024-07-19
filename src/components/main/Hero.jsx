import "./hero.scss";
import reactLogo from "../../assets/logo512.png";
function Hero() {
   function displayHero() {
    if (localStorage.getItem("displayMode") && JSON.parse(localStorage.getItem("displayMode")).fullscreen){
      return {
        height:"100vh"
      }

    }
    return{
      height:""
    }
   }
  return (
    <div id="hero-section" style={{height:localStorage.getItem("displayMode") &&displayHero().height}}>
        <img id="hero-react-logo" src={reactLogo} alt="" />
        <h2 id="hero-title">React</h2>
        <p id="hero-description">The library for web and native user interfaces</p>
        <div id="btn-area">
            <button id="btn-learn">Learn React</button>
            <button id="btn-api">API Reference</button>
        </div>
    </div>
  )
}

export default Hero;