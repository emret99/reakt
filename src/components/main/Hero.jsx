import "./hero.scss";
import reactLogo from "../../assets/logo512.png";
function Hero() {
  return (
    <div id="hero-section">
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