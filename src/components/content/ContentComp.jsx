import "./contentcomp.scss";
import "../_variables.scss";
import parser from "html-react-parser";
function ContentComp({children,btnData,compData}) {
  return (
    <div id="main-content-area" style={{backgroundColor:compData.id %2===0 ? "rgb(30,32,38)":"rgb(25,27,32)"}}>
        <h1 id="content-title">{compData.title}</h1>
        <p className="content-desc">{parser(compData.descFirst)}</p>
        <div id="content-area">
          {children}
        </div>
        <p className="content-desc">{parser(compData.descLast)}</p>
          <button style={{display: btnData.flag ? 'flex' : 'none'}}  id="content-btn" ><img src={btnData.icon} alt="" /> {" "+btnData.flag && btnData.text }</button>
        
    </div>

  )
}

export default ContentComp;