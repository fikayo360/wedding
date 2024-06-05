import './footer.css'

const Footer = () => {
    return (
        <section id='footer'>
            <div id='footerWrap'>
                <div id='footerLeft'>
                   <h1>Yulia Oliver.</h1>
                    <p>copyright &copy; 2024 Rychard all rights reserved</p>
                </div>

                <div id='footerRight'>
                <ul>
                    <li><a href='#home' >Home</a></li>
                    <li><a href='#about'>about</a></li>
                    <li><a href='#services'>skills</a></li>
                    <li><a href='#portfolio'>portfolio</a></li>
                    <li><a href='#testimonial'>testimonials</a></li>
                    <li><a href='#contact'>contact</a></li> 
                </ul>
                <div id='socialIcons'>
                        <img src='./facebook.png' />
                        <img src='./instagram.png' />
                        <img src='./pinterest.png' />
                </div>
                 </div>

            </div>
        </section>
    )
}

export default Footer