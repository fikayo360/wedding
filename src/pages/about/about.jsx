import './about.css'
import { TypeAnimation } from 'react-type-animation';

 const About = () => {
    return (
        <section id='about'>
            <TypeAnimation
                    sequence={[
                        'hi i am Rychard.',
                        1000,
                        'hi i am Rychard.',
                        1000,
                        'hi i am Rychard.',
                        1000,
                    ]}
                    wrapper="h1"
                    speed={20}
                    repeat={Infinity}
                    className='aboutH1'
                    />
            <p>
            With a keen eye for detail and an unwavering commitment to excellence, I specialize in capturing the magic of weddings – from the quiet anticipation
             before the ceremony to the joyous celebrations that follow. 
            Each click of my camera is infused with emotion, each frame a testament to the beauty and power of love.
            But beyond the technical skill, it's my love for what I do that sets me apart. I believe in the power of photography to transcend time, to evoke emotion, 
            and to tell stories that will be cherished for generations to come. Whether it's a stolen glance, a tender embrace, or a heartfelt laugh,
             I strive to capture the essence of every moment, turning fleeting instances into timeless treasures.
             So, if you're looking for more than just a photographer – if you're searching for a partner who will capture the essence of your love story with creativity,
              passion, and unparalleled dedication – then look no further than Jack's Photography. Let's embark on this journey together, and let's create memories that will 
              last a lifetime.
              </p>
             <a>lets chat</a>
        </section>
    ) 
 }
 
 export default About