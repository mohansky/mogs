import * as React from "react" 



const Contact = () => {

  return (
    <section id="contact">
            <h3 className="section-title">Contact</h3>
            <h6 className="section-subtitle" 
            >
                  Have a project in mind? Please get in touch!</h6>

          <div className="contact-section" >
          
          <form name="contact" method="POST" data-netlify="true" >
            

          <div className="form-input"  >
            <div className="input-item">
            <input type="text" id="name" name="name" placeholder="Name" /><br/><br/>
            </div>

            <div className="input-item">
            <input type="email" id="email" name="email" placeholder="Email"  /><br/><br/>
            </div>
            </div>
              
            <div className="form-textarea">
            <textarea name="message" rows="5"   placeholder="Your message" />
              <br/><br/>
            </div>
            <div className="form-button">
            <button className="btn btn-medium" type="submit" value="Submit"> Submit</button>
            </div>
            </form>
          </div>
 
 
    </section>
  )
}

export default Contact
