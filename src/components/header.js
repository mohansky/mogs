import React, { Component } from "react" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'


const MenuItems = [
    {
        title: 'ABOUT',
        url: '/#about',
        cName: 'nav-links'
    },
    {
        title: 'SERVICES',
        url: '/#services',
        cName: 'nav-links'
    },
    {
        title: 'WORK',
        url: '/#work',
        cName: 'nav-links'
    }, 
    {
        title: 'CONTACT',
        url: '/#contact',
        cName: 'nav-links'
    }
]

 
class Header extends Component {
    state = { clicked: false }

        handleClick = () =>{
            this.setState({ clicked: !this.state.clicked })
        }

render(){

   return (
     <nav className="NavbarItems">
        <h6 className="navbar-logo" > 
           <a href="/"> <FontAwesomeIcon icon={ faTerminal } /> Mogs  
           </a>
        </h6>
         <div className="menu-icon" onClick={this.handleClick}> 
         <FontAwesomeIcon icon={ this.state.clicked ? faTimes : faBars } />  
         </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item,index) => {
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
        </ul>
     </nav>
   )
 }}
 
 export default Header
 