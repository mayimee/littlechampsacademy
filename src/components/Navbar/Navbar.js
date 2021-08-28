import React from 'react';
import "./Navbar.css";
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="navbar">
                <div className="brand">
                    <img className="logo" require={('./images/Navbar_Logo.png')} alt=""/>
                    <img className="name" require={('./images/Navbar_Brandname.png')} alt=""/>
                </div>
                <div className="menuIcon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? "navMenu active" : "navMenu"}>
                    <Link to='/littlechampsacademy'><li className='navLinks'>Home</li></Link>
                    <Link to='/undermaintenance'><li className='navLinks'>Curriculum</li></Link>
                    <Link to='/undermaintenance'><li className='navLinks'>Facilities</li></Link>
                    <Link to='/undermaintenance'><li className='navLinks'>Who We Are</li></Link>
                    <Link to='/undermaintenance'><li className='navLinks'>Contact Us</li></Link>
                    <Link to='/e-commerce'><li className='navLinks'>School Must Haves</li></Link>
                    <Link to='/userlogin'><li className='navButton'>Enroll Now</li></Link>
                </ul>
                <div className="socialMediaContainer">
                    <img className="socialMediaLogo" src="/images/Logo_Facebook.png" alt=""/>
                    <img className="socialMediaLogo" src="/images/Logo_Twitter.png" alt=""/>
                </div>
            </nav>
        )
    }
}

export default Navbar