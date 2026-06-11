import React from 'react'

import fdsa from '../../Assests/Images/fs3.png'
import msss from '../../Assests/Images/meesengerlogo.png'
import inss from '../../Assests/Images/ins.png'
import wh from '../../Assests/Images/whats.png'


export default function Footer() {
  return (
    <>
      <footer className=' wolf py-5 '>
        <div className="container text-center">
            <div className=" row">
<div className="col-md-6 mt-2  ">
    <div className=' text-white '>
       <h1 className=' mx-3 border-0 border-bottom'  >Location </h1> 
        <p className=' maloka'>Egypt - Cairo - Maadi</p>
        
    </div>
</div>
<div className="col-md-6 ">
    <div>
        <div>
            <h1 className=' text-white mt-2  border-0 border-bottom'> Around the web</h1> 
        </div>
        <div className='row  nunu    '>
          <div className='  col-md-11  d-flex justify-content-center    align-items-center   '>
            <div className=' baki  d-flex justify-content-center align-items-center mt-2 '>
             <img src={fdsa} alt="" className='  aqw   ' />
             <img src={msss} alt="" className='  rounded-5 bbbv ' />
             <img src={inss} alt="" className='   rounded-5 bbbv  bnm ' />
            <div className=' calls '>
               <img src={wh} alt="" className=' w-100  samoo  ' />
            </div>

            </div>
             
             </div>
             {/* <div className='   col-md-2'>
             
             </div>
             <div className='  col-md-2'>
             
             </div> */}
              {/* <div className='icon d-flex justify-content-center align-items-center me-2'>
             <i class="fa-brands fa-square-twitter text-white  "></i>
             </div> */}
        </div>
    </div>
</div>
{/* <div className="col-md-4">
<div className=' text-white mt-2'>
<h5> About Freelancer </h5>
<p>Freelancer is free to use</p>

</div>

</div> */}
            </div>
        </div>
<div className=' text-white bg-black text-center mt-3'>
  <p>Wish you a happy day</p>
</div>
      </footer>
    </>
  )
}
