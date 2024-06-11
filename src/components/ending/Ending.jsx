import reactLogo from "../../assets/logo512.png"
import "./ending.scss";

function Ending() {
  return (
    <div id="ending-section">
        <img id="hero-react-logo" src={reactLogo} alt="" />
        <h2 id="hero-title">Welcome to the
        React community</h2>

        <div id="btn-area">
            <button id="btn-learn">Get Started</button>
        </div>
    </div>  )
}

export default Ending;