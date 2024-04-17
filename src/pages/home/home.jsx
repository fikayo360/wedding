import './home.css'
import React, { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [images,setImages] = useState([
        './ph3.jpg',
        './ph4.jpg',
        './ph5.jpg',
        './ph6.jpg',
        './ph7.jpg',
    ])

    const [mimages,setmImages] = useState([
        './mph3.jpg',
        './mph4.jpg',
        './mph5.jpg',
        './mph6.jpg'
    ])

    const isMobile = () => window.innerWidth <= 768;

    const imageRef = useRef(null);

    const handleNext = () => {
        const nextIndex = (currentImage + 1) % images.length;
        setCurrentImage(nextIndex);
        imageRef.current.scroll({ behavior: 'smooth', left: window.innerWidth * nextIndex });
    };

    const handlePrevious = () => {
        const prevIndex = (currentImage - 1 + images.length) % images.length;
        setCurrentImage(prevIndex);
        imageRef.current.scroll({ behavior: 'smooth', left: window.innerWidth * prevIndex });
    };

    const [navActive,setNavActive] = useState(false)
    const toggleMobileNav = () => {
       setNavActive((prev) => !prev)
    }

    const [ref, inView] = useInView();

    return (
        <section id="home" ref={imageRef} style={{ backgroundImage: `url(${isMobile() ? mimages[currentImage] : images[currentImage]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            {
                 navActive? (<div id='navMobile' className={`animate__animated ${inView?'animate__slideInDown animate__slow':''}`} ref={ref}>
                 <header>
                     <h1>Rychard</h1>
                     <img src='./close.png' onClick={toggleMobileNav}/>
                 </header>
                 <ul id='navMobileList'>
                            <li  className={`lItems animate__animated ${inView?'animate__fadeInDownBig animate__delay-1.5s animate__slow':''}`} ref={ref}> <a href='#home' >Home</a></li> 
                             <li  className={`lItems animate__animated ${inView?'animate__fadeInDownBig animate__delay-1.6s animate__slow ':''}`} ref={ref}> <a href='#about'>about</a></li>   
                             <li  className={`lItems animate__animated ${inView?'animate__fadeInDownBig  animate__delay-1.7s animate__slow':''}`} ref={ref}><a href='#services'>skills</a></li>
                             <li  className={`lItems animate__animated ${inView?'animate__fadeInDownBig animate__delay-1.8s animate__slow':''}`} ref={ref}><a href='#portfolio'>portfolio</a></li> 
                             <li  className={`lItems animate__animated ${inView?'animate__fadeInDownBig  animate__delay-1.9s animate__slow':''}`} ref={ref}><a href='#testimonial'>testimonials</a></li> 
                             <li  className={`lItems animate__animated ${inView?'animate__fadeInDownBig  animate__delay-1.9s animate__slow':''}`} ref={ref}><a href='#contact'>contact</a></li> 
                 </ul>
             </div>):null
            }

            <nav id='heroNav'>
                <ul id='navLeft'>
                    <li><a href='#home' >Home</a></li>
                    <li><a href='#portfolio'>portfolio</a></li>
                    <li><a href='#about'>about</a></li>
                </ul>
                <h2>Rychard Banks photography</h2>
                <ul id='navRight'>
                    <li><a href='#testimonial'>testimonials</a></li>
                    <li><a href='#services'>skills</a></li>
                    <li><a href='#contact'>contact</a></li>
                </ul>
                <img src='./hamburger.png' onClick={toggleMobileNav}/>
            </nav>
          
            <img src='./left.png' id='leftArrow' onClick={handlePrevious}/>
            <img src='./right.png' id='rightArrow'onClick={handleNext}/>
        </section>
    )
}

export default Home