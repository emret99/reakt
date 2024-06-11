import React from 'react'
import "./news.scss";
import cardLogo from "../../assets/card.svg";
import arrowLogo from "../../assets/down-arrow-svgrepo-com.svg";

function News() {
  return (
    <div id='news-area'>
      <div id="news-text-area">
        <p id="news-text-title">Upgrade when the future is ready
        </p>
        <p id="news-text-desc">
          React approaches changes with care. Every React commit is tested on business-critical surfaces with over a billion users. Over 100,000 React components at Meta help validate every migration strategy.
          <br/>
          <br/>
          The React team is always researching how to improve React. Some research takes years to pay off. React has a high bar for taking a research idea into production. Only proven approaches become a part of React.
        </p>
        <button id="news-text-btn">
          <img src="" alt="" />
          <p>
            Read more React news
          </p>
        </button>
      </div>
      <div id='news-card-area'>
        <h5><img src={arrowLogo} alt="" /> <p>LATEST REACT NEWS</p></h5>
        <div className="news-card">
          <h2>React Conf 2024 Recap</h2>
          <div><img src={cardLogo} alt="" /><p>May 22, 2024</p></div>
        </div>
        <div className="news-card">
          <h2>React 19 RC</h2>
          <div><img src={cardLogo} alt="" /><p>April 25, 2024</p></div>
        </div>
        <div className="news-card">
          <h2>React 19 RC Upgrade Guide</h2>
          <div><img src={cardLogo} alt="" /><p>April 25, 2024</p></div>
        </div>
        <div className="news-card">
          <h2>React Labs: February 2024</h2>
          <div><img src={cardLogo} alt="" /><p>February 15, 2024</p></div>
        </div>


      </div>
        
    </div>
  )
}

export default News