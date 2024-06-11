import { useEffect,useState } from "react";
import "./slidercomp.scss";



function Slider() {
  const [imageArr,setImageArr] = useState([]);

  useEffect(()=>{
    try {
      (async ()=>{
        for (let index = 0; index < 10; index++) {
          const req= await fetch("https://picsum.photos/200");
          const url =await req.url;
          setImageArr(prev=>[...prev,url]);
          
        }
      })();
      
    } catch (error) {
      console.log("Error: "+error)
    }
    
    
    },[]);


  return (
    <div id="slider-main-area">
        <h1 id="content-title">Join a community
        of millions</h1>
        <p className="content-desc">You’re not alone. Two million developers from all over the world visit the React docs every month. React is something that people and teams can agree on.</p>
        <div id="image-slider-area">
          {imageArr && imageArr.map((item,key)=>(
            <img key={key} src={item} alt="" />
          ))}
        </div>
        <p className="content-desc">This is why React is more than a library, an architecture, or even an ecosystem. React is a community. It’s a place where you can ask for help, find opportunities, and meet new friends. You will meet both developers and designers, beginners and experts, researchers and artists, teachers and students. Our backgrounds may be very different, but React lets us all create user interfaces together.</p>
        
    </div>  )
}

export default Slider;