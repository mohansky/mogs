import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
 
const Portfolio = () => {

  return (
    <section id="work">
      <h3 className="section-title">Work</h3>
      <h6 className="section-subtitle">Samples of some of my work</h6>

              <div className="container">
                <div className="row" >
                
                  <div className="text">
                  <a href="https://deepbreatheyogastudio.com/" target="_blank" rel="noreferrer">
                    <h3> Deep Breathe Yoga Studio  </h3>
                    <p> Simple business site for a yoga studio in Goa.  </p>
                    </a>
                    </div>
                  <div className="image">
                    <StaticImage
                      className="img"
                      src="../images/dbus.JPG"
                      alt="Deep Breathe Yoga Studio"
                      placeholder="tracedSVG"
                    />
                    </div>
                </div>

                <div className="row">
                  <div className="text">
                  <a href="https://berliner-jobcoach.de/" target="_blank" rel="noreferrer">
                  <h3> Berliner Job Coach  </h3>
                    <p> Appointment booking site for a Job coach in Berlin. </p>
                    </a>
                  </div>
                  <div className="image">
                    <StaticImage
                      className="img" 
                      src="../images/bjc.JPG"
                      alt="Berliner Job Coach"
                    />
                    </div>
                </div>

                <div className="row">
                  <div className="text">
                  <a href="https://la-volotte.de/products/" target="_blank" rel="noreferrer">
                  <h3> La Volotte  </h3>
                    <p> Online shop for a lovely Wool shop in Aachen.  </p>
                    </a>
                  </div>
                  <div className="image">
                  <StaticImage
                      className="img" 
                      src="../images/lv.JPG"
                      alt="La Volotte"
                    />
                    </div>
                    
                </div>


                <div className="row">
                  <div className="text">    
                <a href="https://bowcraftworkleather.netlify.app/" target="_blank" rel="noreferrer"> 
                  <h3> Bow Craft Works  </h3>
                    <p> Landing page for handmade leather accessories.  </p>
                    </a>
                  </div>
                  <div className="image">
                    <StaticImage
                      className="img" 
                      src="../images/bcw.JPG"
                      alt="Bow Craft Works"
                    />
                    </div>
                </div>
              </div>

      

      <hr/>
    </section>
  )
}

export default Portfolio
