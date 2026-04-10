import React from 'react'
import dizer from '../../Assests/Images/me32.jpeg'
import Footer from '../Footer/Footer'
import myvid from '../../Assests/video/yalla.mp4'
import hies from '../../Assests/Images/hi.png'
import reres from '../../Assests/Images/rere.png'
import jjjs from '../../Assests/Images/jjjjj.png'
import csssc from '../../Assests/Images/cssss.png'
import httll from '../../Assests/Images/httm.png'

export default function About() {
  return (
    <>


<div className=" sharyoken   min-vh-100      " >
<div className="row">
  <div className="col-md-4">
    <div className='  mt-4   '>
      <div className="cinter ms-3   w-100   rounded-5">
        <img src={dizer} alt=""  className='  w-75 rounded-5   ms-2 mt-2  spazer' />
        <video src={myvid} autoPlay muted loop className=' w-75 rounded-5 go ' ></video>
        

      </div>
      
    
    </div>
  </div>

  <div className="col-md-8 text-white zara  ">
    <div className=' mt-5  '>
    <div>
      <img src={hies} alt="" className=' w-25' />
    </div>
    <div>
      <p className='maloka mt-5 fw-bold'>
        I am a Front-End Developer with a year of hands-on experience building responsive, user-focused web applications. Proficient in React.js, JavaScript, HTML5, and CSS3, I bridge the gap between complex code and intuitive design. Currently seeking part-time hybrid or remote opportunities to contribute to innovative projects and grow within a collaborative team.
      </p>
    </div>
    <div className=' d-flex justify-content-center align-items-center  cubra  w-100  mt-3 '>
      <img src={reres} alt=""  className='  beam'/>
      <img src={jjjs} alt="" className='  beam' />
      <img src={csssc} alt="" className='  beam' />
      <img src={httll} alt="" className='  beam' />



    </div>


        
    </div>
  </div>
</div>

</div>
<Footer/>
    </>
  )
}
