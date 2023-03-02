import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/5.jpg'
import img2 from '../assets/6.jpg'

function Services() {
  return (
    <div className='services' id="services">
      <Carousel
       infiniteLoop
        autoPlay
         showArrows={false} 
         showStatus={false} 
         showThumbs={false}
         interval={1000}
      >

      <div>
        <img src={img1} alt="item1" />
        <p className='legend'>Full Stack</p>
       </div>
       <div>
        <img src={img2} alt="item2" />
        <p className='legend'>Full Stack</p>
       </div>


      </Carousel>
      
      </div>
  )
}
export default Services