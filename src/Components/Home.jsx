import React from "react";
import '../styles/home.scss'
import img from '../assets/4.jpg'
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
import homeimg1 from '../assets/8.jpg'
import homeimg2 from '../assets/8.jpg'
import { Carousel } from "react-responsive-carousel";


function Home(){

    return(
        <>
        <div className="home" id="Home">
            <div>
                <main>
                    <h1>The Trip</h1>
                    <p>Go With The Flow.</p>
                </main>
                <div className="image" id="img">  
                    <Carousel
                    infiniteLoop 
                    autoPlay
                    showArrows = {false}
                    showThumbs ={false}
                    showStatus = {false}
                    >
                    <div>
                        <img src={homeimg1} alt="item1" />
                        <p className='legend'>..</p>
                       </div>
                       <div>
                        <img src={homeimg2} alt="item2" />
                        <p className='legend'>..</p>
                       </div>

                    </Carousel>    
                </div>
            </div>
        </div>

        <div className="home2" id="Story">
            <img src={img} alt="graphics" />
        <div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ...</p>
        </div>
        </div>
        
        <div className="home3" id="About">
        <div>
            <h1>About Us</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        </div>
        <div className="home4" id="Destination" >
            <div>
            <h1>destination</h1>
            <article>
                <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle />
                    <p>Google</p> 
                    </div>
                    <div style={{animationDelay:"0.5s"}}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                    </div>
                     <div style={{animationDelay:"0.7s"}}>
                    <AiFillYoutube />
                    <p>YouTube</p>
                    </div>
                    <div style={{animationDelay:"0.11s"}}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
                
                
               
                
            </article>
        </div>
        </div>
        
        
        
        </>
    )
}
export default Home;






// import React from 'react'
// import "../assets/4.jpg"

// function Home() {
//   return (
// <>
// <div className='home'> 
//         <main>
//         <h1>techystar</h1>
//         <p>Solution to all problems</p>
//         </main>
        
//         </div>
//         <div className="home2">
//         <img src={4} alt= "Graphics" /> 
//         </div>
//         <div>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nunc facilisis felis mattis hendrerit nec at justo. Cras vehicula, augue id bibendum laoreet, neque quam rutrum nibh, vel vestibulum lacus magna id orci. Suspendisse erat tortor, porta eu mi a, bibendum sagittis metus. Donec hendrerit ac lacus ut vulputate. Phasellus vehicula tincidunt mi sed rhoncus. Proin velit nulla, scelerisque id fringilla quis, vestibulum nec mauris. Nullam tristique egestas dolor a porta. Integer ornare bibendum felis. Integer vitae mollis massa. Aenean non molestie mi. Vivamus aliquet tincidunt sem, in blandit ex.</p>
//         </div>
// </>
//   )
// }

// export default Home