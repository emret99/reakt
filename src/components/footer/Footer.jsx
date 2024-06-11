import "./footer.scss";
import { footerData } from "./footerData";
import FooterColumn from "./FooterColumn";


function Footer() {

  return (
    <div id="footer-area">
        {footerData.map((column,key)=>(
            <FooterColumn id={"footer-item"+key} key={key} title={column.title}>
                {column.items.map(row=>(
                    <p className="footer-item">{row}</p>
                ))}

            </FooterColumn>
        ))}
    </div>
  )
}

export default Footer;