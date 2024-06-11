import facebooklogo from "../../assets/facebook-circle-svgrepo-com.svg";
import xLogo from "../../assets/Twitter X Icon.svg";
import githubLogo from "../../assets/iconmonstr-github-1.svg";

function IconRow(){
    return(
        <p id="footer-icon-row">
        <img src={facebooklogo} alt="" />
        <img src={xLogo} alt="" />
        <img src={githubLogo} alt="" />
    </p>
    )
}
function FooterColumn({children,title}) {
  return (
    <div className="footer-column">
        <h1 id="footer-title">{title}</h1>
        {children}
        {title==='More' &&<IconRow/>}
    </div>
  )
}

export default FooterColumn;