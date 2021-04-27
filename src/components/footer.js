import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
 

const Footer = () => {
 

  return (
    <footer className="main-footer">
<hr/>
<div className="footer-info">
<div className="footer-text">
        <p> This site was Built using  
          <a href="https://www.gatsbyjs.com"> Gatsby </a> 
                        in {new Date().getFullYear()}!© 
        </p>   
    </div>
    
    <div className="footer-mail" >
            <FontAwesomeIcon className="footer-icon" icon={faEnvelope} />
            <a href="mailto:mohansky@gmail.com?subject=Mail from Our Site">mohansky@gmail.com</a> 
            
    </div> 


</div> 
  </footer>
  )
}

export default Footer
