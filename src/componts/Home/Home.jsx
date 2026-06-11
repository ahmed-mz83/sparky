import React from 'react'
import me from '../../Assests/Images/WhatsApp Image 2026-04-03 at 8.16.53 AM.jpeg'
import emoji from '../../Assests/Images/emo3.png'
import prince from '../../Assests/Images/WhatsApp Image 2026-04-07 at 11.17.59 PM.jpeg'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet-async'


export default function Home() {
  return (
    <>
<Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
       
      </Helmet>


      <header className="adogen   ">
        <div className="row d-flex justify-content-center align-items-center mx-0 ">
        <div className='d-flex justify-content-center align-items-center  col-9  col-md-3  '>
          <img src={prince} className=' w-100 rounded-5 wooo mt-4 ' alt="Profile" />
        </div>
        </div>
        <div className='d-flex text-white fw-bolder justify-content-center align-items-center'>
          <p className=' mt-3 mt-md-5  maloka'>Ahmed Mohamed Abdelzaher</p>
        </div>

        <div className='d-flex justify-content-center align-items-center'>
          {/* Wrapper for the hover effect */}
          <div className="emo-wrapper">
            <img className='emo mb-2' src={emoji} alt="emoji" />
            
            {/* Handwriting Arrow (SVG) */}
            <svg className="hand-arrow" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            {/* Paper Message */}
            <div className="paper-note">
              <div>Junior web developer </div>
              <div className=' mx-4'>at your service</div>
   </div>
          </div>
        </div>
      </header>

      <Footer/>
    </>
  )
}