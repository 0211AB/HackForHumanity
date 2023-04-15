import React from 'react'
import "./Footer.css"

import logo from "../images/logo_2.png"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">

                <div className="footer-top section" data-reveal>

                    <div className="newsletter-card">

                        <div className="card-icon">
                            <ion-icon name="mail-unread-outline" aria-hidden="true"></ion-icon>
                        </div>

                        <h3 className="h3 card-title">Stay up-to-date on the latest waste reduction and recycling news, tips, and events.</h3>

                        <form action="#" className="newsletter-form">

                            <label htmlFor="email" className="label">Email address</label>

                            <input type="emal" name="email" id="email" placeholder="Email address" required className="email-field" />

                            <button type="submit" className="btn btn-primary">Subscribe</button>

                        </form>

                    </div>

                    <div className="footer-list">

                        <p className="h6 has-after">Company Theme</p>

                        <p className="footer-text">
                            At [Company Name], we're committed to providing sustainable waste management solutions for businesses and communities of all sizes.
                        </p>

                        <Link to="/" className="btn-outline">
                            <span className="span">Get a quote</span>

                            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </Link>

                    </div>

                    <ul className="footer-list">

                        <li>
                            <p className="h6 has-after">Company Info</p>
                        </li>

                        <li>
                            <Link to="/" className="footer-link">About Us</Link>
                        </li>

                        <li>
                            <Link to="/" className="footer-link">Our Projects</Link>
                        </li>

                        <li>
                            <Link to="/" className="footer-link">Meet Our Team</Link>
                        </li>

                        <li>
                            <Link to="/" className="footer-link">News & Media</Link>
                        </li>

                        <li>
                            <Link to="/" className="footer-link">Contact Us</Link>
                        </li>

                        <li>
                            <Link to="/" className="footer-link">Careers</Link>
                        </li>

                    </ul>

                    <ul className="footer-list">

                        <li>
                            <p className="h6 has-after">Quick Contact</p>
                        </li>

                        <li>
                            <address className="footer-text">
                                Jadavpur University, Salt Lake Kolkata.
                            </address>
                        </li>

                        <li>
                            <p className="footer-text">
                                If you have any questions or need help, feel free to contact with our team.
                            </p>
                        </li>

                        <li>
                            <a href="tel:00201061245741" className="contact-link">(002) 01061245741</a>
                        </li>

                    </ul>

                </div>

                <div className="footer-bottom">

                    <div>
                        <ul className="footer-bottom-list">

                            <li>
                                <Link to="/" className="footer-bottom-link">Where to Find Us</Link>
                            </li>

                            <li>
                                <Link to="/" className="footer-bottom-link">Terms of Payment</Link>
                            </li>

                            <li>
                                <Link to="/" className="footer-bottom-link">Stats Element</Link>
                            </li>

                        </ul>
                    </div>

                    <img src={logo} width="0" height="0" loading="lazy" alt="home" />

                    <ul className="social-list">

                        <li>
                            <Link to="/" className="social-link">
                                <ion-icon name="logo-facebook" aria-hidden="true"></ion-icon>
                            </Link>
                        </li>

                        <li>
                            <Link to="/" className="social-link">
                                <ion-icon name="logo-twitter" aria-hidden="true"></ion-icon>
                            </Link>
                        </li>

                        <li>
                            <Link to="/" className="social-link">
                                <ion-icon name="logo-youtube" aria-hidden="true"></ion-icon>
                            </Link>
                        </li>

                        <li>
                            <Link to="/" className="social-link">
                                <ion-icon name="logo-linkedin" aria-hidden="true"></ion-icon>
                            </Link>
                        </li>

                    </ul>

                </div>

            </div>
        </footer>
    )
}

export default Footer