import React from 'react'
import cono from '../Assests/Images/cono8.jpg'
import wh from '../Assests/Images/whats.png'
import cals from '../Assests/Images/callme.png'
import ema from '../Assests/Images/emos.png'
export default function Contact() {
  return (
    <>
     <div className="  min-vh-100 adogen d-flex justify-content-center align-items-center   ">

        <div className="row w-75  air g-0  d-flex align-items-stretch  overflow-hidden  rounded-5  ">
         <div className="col-md-6 fire   p-0   ">
<div className=' thunder '>
    {/* <img src={cono} alt=""  className='  w-100    toto  '/> */}
</div>
         </div>
 <div className="col-md-6   bg-black  p-0  earth ">
<div className=' ' >
    <form className='  p-1'>
  <fieldset disabled>
    {/* <legend>Disabled fieldset example</legend> */}
    <div className="mb-3">
      <label htmlFor="qa" className="form-label text-white  m-2 maloka">Mobile</label>
      <input type="text" id="qa" className="form-control fw-bolder" placeholder="01227175345"/>
    </div>
    <div className="mb-3">
      <label htmlFor="sdf" className="form-label text-white maloka ">Email</label>
            <input type=" email" id="sdf" className="form-control fw-bolder" placeholder="ahmedmz83@hotmail.com"/>

    </div>
    <div className="mb-3 d-flex justify-content-center  align-items-center king ">
    <img src={wh} alt="" className='  w-25 noti' />
    <img src={cals} alt=""className='  w-25  vaipr' />
    <div className=' w-25 mt-4'>
        <img src={ema} alt=""className='  w-100 travel ' />
    </div>
    </div>
   
  </fieldset>
</form>
</div>
         </div>

     </div>

</div>

    </>
  )
}
