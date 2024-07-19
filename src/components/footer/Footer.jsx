import "./footer.scss";
import { footerData } from "./footerData";
import FooterColumn from "./FooterColumn";


function Footer() {
  function displayFooter() {
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
    <div id="footer-area" style={{height:localStorage.getItem("displayMode") && displayFooter().height}}>
        {footerData.map((column,key)=>(
            <FooterColumn id={"footer-item"+key} key={key} title={column.title}>
                {column.items.map((row,key)=>(
                    <p key={key} className="footer-item">{row}</p>
                ))}

            </FooterColumn>
        ))}
    </div>
  )
}

export default Footer;