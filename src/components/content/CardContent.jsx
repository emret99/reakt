import "./cardcomponent.scss";
import lockLogo from "../../assets/lock-svgrepo-com.svg";
import bluetoothLogo from "../../assets/bluetooth-svgrepo-com.svg";
import wifiLogo from "../../assets/wifi-good-svgrepo-com.svg";
import batteryLogo from "../../assets/battery-twotone-85-svgrepo-com.svg";
import androidLogo from "../../assets/cdnlogo.com_android.png";
import appleLogo from "../../assets/apple-seeklogo.svg";
import chromLogo from "../../assets/87865_chrome_icon.png";
import firefoxlogo from "../../assets/firefox.247x256.png";
import safariLogo from "../../assets/safari.png";

function CardContent() {
  return (
    <div id='card-content-area'>
      <div id="white-card">
        <div className="header-wrapper">
        <header>
          <img src={lockLogo} alt="" />
          <p>example.com</p>               
        </header>
        </div>
        <div className="card-content">
          <h5>Stay true to the web </h5>
          <p>People expect web app pages to load fast. On the server, React lets you start streaming HTML while you’re still fetching data, progressively filling in the remaining content before any JavaScript code loads. On the client, React can use standard web APIs to keep your UI responsive even in the middle of rendering.</p>
          <div className="logo-area">
            <img src={chromLogo} alt="" />
            <img src={firefoxlogo} alt="" />
            <img src={safariLogo} alt="" />
          </div>              
        </div>
      </div>
      <div id="dark-card">
        <div className="header-wrapper">
          <header>
            <p>11:09 PM</p>
            <div>
              <img src={bluetoothLogo} alt="" />
              <img src={wifiLogo} alt="" />
              <img src={batteryLogo} alt="" />
            </div>
          </header>
        </div>
        <div className="card-content">
          <h5>Go truly native</h5>
          <p>People expect native apps to look and feel like their platform. React Native and Expo let you build apps in React for Android, iOS, and more. They look and feel native because their UIs are truly native. It’s not a web view—your React components render real Android and iOS views provided by the platform.</p>
          <div className="logo-area">
            <img src={appleLogo} alt="" />
            <img src={androidLogo} alt="" />
          </div>
        </div>
      </div> 
    </div>
  )
}

export default CardContent;