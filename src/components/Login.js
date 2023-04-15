import React from 'react'
import Header from './Header'
import cta_img from "../images/signin.jpeg"
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <Header />
            <section className="cta login-container">
                <div className="container">
                    <figure className="cta-banner login-banner">
                        <img src={cta_img} width="330" height="206" loading="lazy" alt="cta banner"
                            className="img-cover" />
                    </figure>

                    <div className="cta-card form-card" >

                        <div>
                            <form action="#" className="newsletter-form">
                                <h1 className="h3 card-title">Login !!!</h1>
                                <br></br>
                                <label htmlFor="username">Username </label>
                                <br></br>
                                <input type="text" id="username" name="username" required placeholder="User Name " className="email-field dd-field" />
                                <br></br>
                                <label htmlFor="password">Password </label>
                                <br></br>
                                <input type="password" id="password" name="password" required
                                    placeholder="Password"
                                    className="email-field dd-field" />
                                <br></br>
                                <br></br>
                                <Link to="/signup" className='login-link'> Click Here To Signup As New User.</Link>
                                <button type="submit" className="btn btn-primary btn-3">Login</button>

                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Login