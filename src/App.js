import "./app.scss";





import Header from "./components/header/Header";
import Hero from "./components/main/Hero";
import ContentComp from "./components/content/ContentComp";
import ImageContent from "./components/content/ImageContent";
import ContentData from "./components/content/ContentData";
import CardContent from "./components/content/CardContent";
import { useState ,useEffect} from "react";
import News from "./components/news/News";

function App() {
  const data = ContentData();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
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
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header scroll={scrolled}/>
      <Hero/>
      {data.map(item=>(
        <ContentComp key={item.id} compData={{id:item.id,title:item.title,descFirst:item.descFirst,descLast:item.descLast}} btnData={{flag:item.btnFlag,text:item.btnText,icon:item.btnIcon}}>
          {item.type==='image' && <ImageContent/>}
          {item.type==='card' && <CardContent/>}
        </ContentComp>
      ))}
      <News/>

      
    </div>
  );
}

export default App;
