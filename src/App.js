import "./app.scss";


import { useState ,useEffect} from "react";



import Header from "./components/header/Header";
import Hero from "./components/main/Hero";
import ContentComp from "./components/content/ContentComp";
import ImageContent from "./components/content/ImageContent";
import contentData from "./components/content/contentData";
import CardContent from "./components/content/CardContent";
import News from "./components/news/News";
import Overlay from "./components/overlay/Overlay";
import Slider from "./components/slider/Slider";
import Ending from "./components/ending/Ending";
import Footer from "./components/footer/Footer";
import DisplayMode from "./utils/DisplayMode/DisplayMode";


function App() {
  const data = contentData();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {

    //fix corrupted localstorage items

    (localStorage.getItem("displayMode") && (()=>{
      const data =JSON.parse(localStorage.getItem("displayMode"));
      console.log(data.hasOwnProperty("name")&&data.hasOwnProperty("header")&&data.hasOwnProperty("fullscreen"))
      return (data.hasOwnProperty("name")&&data.hasOwnProperty("header")&&data.hasOwnProperty("fullscreen"))
    
      
    })()) ||
  localStorage.setItem("displayMode",JSON.stringify({
      name:"Default",
      header:true,
      fullscreen:false
    }));

    // determine scroll performed or not
    
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
    };
  }, []);


  const [overlay,setOverlay]=useState(false);

  return (
    
    <div className="App">
      {overlay && <Overlay overlay={overlay} setOverlay={setOverlay}/>}
      <Header overlay={overlay} setOverlay={setOverlay} scroll={scrolled}/>
      <Hero/>
      {data.map(item=>(
        <ContentComp key={item.id} compData={{id:item.id,title:item.title,descFirst:item.descFirst,descLast:item.descLast}} btnData={{flag:item.btnFlag,text:item.btnText,icon:item.btnIcon}}>
          {item.type==='image' && <ImageContent/>}
          {item.type==='card' && <CardContent/>}
        </ContentComp>
      ))}
      <News/>
      <Slider/>
      <Ending/>
      <Footer/>
      {/* <Testbox/> */}
      <DisplayMode/>
      </div>
  );
}

export default App;
