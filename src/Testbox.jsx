import React from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";



function Testbox() {
  gsap.registerPlugin(ScrollTrigger)
  function handleClick() {
    gsap.to('.testbox',{
      x:300,
      duration:2
    })
    
  }
  return (
    <div onClick={handleClick} className='testbox' style={{height:"300px", width:"300px",backgroundColor:"red",position:"fixed",bottom:"40vh",left:"40vw",textAlign:"center",verticalAlign:"middle",lineHeight:"300px"}} >Testbox</div>
  )
}

export default Testbox