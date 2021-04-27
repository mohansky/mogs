import * as React from "react" 
import { StaticImage } from "gatsby-plugin-image" 

const About = () => {
  

  return (
      <section id="about">
 
      <div className="about-container">
                <div className="about-row" >
                
                  <div className="about-text"> 
                  <h4>Hi! I am Mohan.</h4>
                    <p>I have been building websites for the last 4 years. In the past I have worked with WordPress 
                      and more recently I have been working with static site generators like Hugo and Gatsby. 
                      I have good knowledge of HTML, CSS and JS. I also have keen eye for design. 
                      As a design-centered front-end developer my work lies at the intersection of design and back-end. </p> 
                    
                    </div>
                  <div className="about-image">
                    <StaticImage
                      className="img" 
                      src="../images/Mohan.jpg" 
                      height={450}
                      alt="Profile picture"
                      placeholder="tracedSVG"
                      
                    />
                    </div>
                    
                </div>

                <div className="about-row" >
                
                  <div className="about-text"> 
                    <p>  I write HTML, CSS with a focus on responsive design, accessibility, and performance. 
                        By default my work is:
                    </p>    
                     
                        <p>  
                          <ul>
                          <li>Fully responsive, and tested across various devices and browsers. I take a mobile-first approach. </li>
                          <li>Cross-browser compatible. While i dont optimise for some older browsers like IE my websites are compatible with most commonly used browsers.</li>  
                          <li>Optimized for performance. The product experience needs to feel lightweight and fast.</li>
                          </ul>
                      </p>   
                     
                    
                    </div>
                  <div className="about-image image-hide">
                    <StaticImage
                      className="img" 
                      src="../images/08.png"
                      aspectRatio={1}
                      alt="Profile picture"
                      placeholder="tracedSVG"
                      
                    />
                    </div>
                    
                </div>



                </div>    


 
 

      <hr/>
    </section>
  )
}

export default About
