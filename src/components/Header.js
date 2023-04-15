import logo from "../images/logo.jpeg"
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const clickHandler = (e) => {
        const navbar = document.querySelector("[data-navbar]");
        e.classList.toggle("active");
        navbar.classList.toggle("active");
    }

    return (
        <header className="header" data-header>
            <div className="container">

                <Link to='/' className="logo">
                    <img src={logo} width="160" height="50" alt="home" />
                </Link>

                <nav className="navbar" data-navbar>
                    <ul className="navbar-list">

                        <li className="navbar-item">
                            <Link to='/' className="navbar-link">Home</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to='/' className="navbar-link">Services</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to='/' className="navbar-link">Gallery</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to='/' className="navbar-link">Blog</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to='/' className="navbar-link">Contact Us</Link>
                        </li>

                    </ul>
                </nav>

                <div className="header-action">

                    <a href="tel:+12312345678901" className="contact-number">
                        <ion-icon name="call" aria-hidden="true"></ion-icon>

                        <span className="span">+(123) 1234-567-8901</span>
                    </a>

                    <Link to='/signup' className="btn btn-primary">
                        <span className="span">Register Now</span>

                        <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                    </Link>

                </div>

                <button className="nav-toggle-btn active" aria-label="toggle menu" data-nav-toggler
                    onClick={(e) => { clickHandler(e.target) }}>
                    <ion-icon name="menu-outline" aria-hidden="true" id="open"></ion-icon>
                    <ion-icon name="close-outline" aria-hidden="true" id="close"></ion-icon>
                </button>

            </div>
        </header>
    )
}

export default Header