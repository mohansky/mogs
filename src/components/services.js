import * as React from "react"
import { useStaticQuery, graphql } from "gatsby" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPencilAlt, faHandsHelping } from '@fortawesome/free-solid-svg-icons'
 
 

const Services = ( ) => {
   
  
  return (
    <section id="services">
      <h3 className="section-title">SERVICES</h3>

      <div className="service-body"> 
 
                <div  
                    className="service-item" >
                  <FontAwesomeIcon className="service-icon" icon={faPencilAlt} /> 
                    <h4> DESIGN </h4>
                </div>

                <div  
                    className="service-item" >
                   <FontAwesomeIcon className="service-icon" icon={faCode} /> 
                  <h4> DEVELOP </h4>
              </div>

              <div 
                  className="service-item" >
                <FontAwesomeIcon  className="service-icon" icon={faHandsHelping} /> 
                <h4> CONSULT </h4>
            </div>  

            
 
                     
        </div>
      <hr/>
    </section>
  )
}

export default Services;

