import React from 'react'
import screenshot from "../../Assests/Images/shot.png"
import screenshot2 from "../../Assests/Images/crudsystem.png"

export default function Port() {
  return (
    <>
      <div className="adogen">
      <div className=' projectsection container  '>
<div className="row  d-flex flex-column flex-md-row justify-content-center align-items-center  ">
<div className='  col-8 col-md-4 '>
  <div className='mt-1 mt-md-4'>
    <a href="https://ahmed-mz83.github.io/landing-page-website/" target="_blank" rel="noopener noreferrer" > 
    <img src={screenshot} alt=""  className=' w-100  projectshot1 rounded-5'/>
    </a>
  </div>
  
  <div className=' mt-2 d-flex flex-column flex-md-row justify-content-center align-items-center'>
    <h4 className='nameofproject2'>Landing Page - SparkyFootwear</h4>
  </div>

</div>
<div className='  col-8 col-md-4 '>
  <div className='mt-1 mt-md-4'>
    <a href="https://ahmed-mz83.github.io/Crud-system/"  target="_blank" rel="noopener noreferrer"  > 
    <img src={screenshot2} alt=""  className=' w-100  projectshot1 rounded-5'/>
    </a>
  </div>
  
  <div className=' mt-2 d-flex flex-column flex-md-row justify-content-center align-items-center'>
    <h4 className='nameofproject2'>Crud System - Light</h4>
  </div>

</div>

</div>

      </div>

      </div>


    </>
  )
}
