import React from 'react';
import "./Footer.css";
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
            <div className="footerContainer">
                <div className="footerRow">
                    <div className="footerColumn">
                        <h4>Site Navigation</h4>
                        <ul>
                            <Link to="/"><li class="footerLink">Home</li></Link>
                            <Link to="/undermaintenance"><li class="footerLink">Curriculum</li></Link>
                            <Link to="/undermaintenance"><li class="footerLink">Announcements</li></Link>
                            <Link to="/undermaintenance"><li class="footerLink">About Us</li></Link>
                            <Link to="/undermaintenance"><li class="footerLink">Contact Us</li></Link>
                            <Link to="/e-commerce"><li class="footerLink">School Must-haves</li></Link>
                            <Link to="/userlogin"><li class="footerLink">Enroll Now</li></Link>
                        </ul>
                    </div>
                    <div className="footerColumn">
                        <div className="footerContentFlex">
                            <i class="fas fa-map-marker-alt"></i>
                            &nbsp;&nbsp;
                            <h4>Office Address</h4>
                        </div>
                        <ul className="list-unstyled">
                            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2601 Rockefeller St.
                                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Brgy. San Isidro
                                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Makati City, 1234</li>
                        </ul>
                    </div>
                    <div className="footerColumn">
                        <h4>Get in Touch</h4>
                        <ul className="list-unstyled">
                            <li>
                                <div className="footerContentFlex">
                                    &nbsp;&nbsp;&nbsp;<i class="fas fa-phone-volume"></i>
                                    &nbsp;&nbsp;09981923360
                                </div>
                            </li>
                            <li>
                                <div className="footerContentFlex">
                                    &nbsp;&nbsp;<i class="fas fa-envelope"></i>
                                    &nbsp;&nbsp;support@littlechampsacademy.com</div></li>
                        </ul>
                    </div>
                </div>
                <hr class="footerHR" />
                <div>
                    <p>&copy; Little Champs Academy | All rights reserved | 
                    <span class="footerLink">Terms of Service</span> | 
                    <span class="footerLink">Privacy</span></p>
                </div>
            </div>
    )
}

export default Footer;


