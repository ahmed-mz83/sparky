import React, { useState } from 'react'


import numx from '../../Assests/Images/4k2.jpg'
import numz from '../../Assests/Images/gohan.jpg'
import numq from '../../Assests/Images/gojo.png'
import numv from '../../Assests/Images/trans.jpg'
export default function Port() {

let kakashi= <div className="background rounded-5">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>





  let power = <div className="wrap rounded-5">
  {[...Array(144)].map((_, i) => (
    <div
      key={i}
      className="c"
      style={{
        '--i': i + 1,
        '--rng': Math.random(),
      }}
    />
  ))}
</div>
 

 let f=     <div id="container " className=' '>
  Make 
  <div id="flip">
    <div><div>Work</div></div>
    <div><div>Lifestyle</div></div>
    <div><div > Everything</div></div>
  </div>
  Awesome!
</div>

 let vq = 
 <div className='rambo rounded-5'>
    
 

 <section>
       <h2>
      Let's make an Awesome<li/> website
      </h2>
 
     <div className="leaf">
     <div>  <img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" height="75px" width="75px"></img></div>
      <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" height="75px" width="75px"></img></div>
      <div>  <img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png" height="75px" width="75px" ></img></div>
      <div><img  src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" height="75px" width="75px"></img></div>
       <div> <img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px" width="75px"></img></div>
     <div>   <img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png" height="75px" width="75px"/></div>
     {/* <div><img src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png" height="75px" width="75px"/></div> */}
            
     </div>
     
     <div className="leaf leaf1">
     <div>  <img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" height="75px" width="75px"></img></div>
      <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" height="75px" width="75px"></img></div>
      <div>  <img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png" height="75px" width="75px" ></img></div>
      <div><img  src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" height="75px" width="75px"></img></div>
       <div> <img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px" width="75px"></img></div>
     <div>   <img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png" height="75px" width="75px"/></div>
     {/* <div><img src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png" height="75px" width="75px"/></div> */}
            
     </div>
     
     <div className="leaf leaf2">
     <div>  <img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" height="75px" width="75px"></img></div>
      <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" height="75px" width="75px"></img></div>
      <div>  <img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png" height="75px" width="75px" ></img></div>
      <div><img  src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" height="75px" width="75px"></img></div>

       <div> <img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px" width="75px"></img></div>
     <div>   <img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png" height="75px" width="75px"/></div>
     {/* <div><img src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png" height="75px" width="75px"/></div> */}
            
     </div>

</section>
</div>


    let  [pic,setpic]= useState([
        { img:numx, id:'xxx', ani:f},
        { img:numz, id:'zzz',ani:vq},
        { img:numq, id:'qqq',ani:power},
        { img:numv, id:'vvv',ani:kakashi},


    ])




    

  return (
    <>
      <section className=' vh-100'>

        <div className=' container mt-5' >
            <div className="row">
{pic.map((itm)=>(
<div className="col-md-3 mt-3">
    <div className=' rao'>
<div className='ken '>

<img src={itm.img} alt="" className=' w-100 rounded-5' height={300} />
    <div className='toky   d-flex justify-content-center align-items-center rounded-5'  data-bs-toggle="modal" data-bs-target={'#'+itm.id}   >


{itm.ani}



        </div> 
</div>

  

    
    </div>

</div>
))}


{pic.map((itm)=><>




<div className="modal fade" id={itm.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
   
      <div className="modal-body">
       <img src={itm.img} alt="" className=' w-100' />
      </div>
     
    </div>
  </div>
</div>
</>)}
            </div>
        </div>

      </section>
    </>
  )
}
