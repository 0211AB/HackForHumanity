import React, { useState } from 'react'
import "./Signup.css"
import Header from './Header'
import cta_img from "../images/login.avif"
import { Link } from 'react-router-dom'
import { states } from '../data/states'

const Signup = () => {
    const [state, setState] = useState(null)
    console.log(state)
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
                                <h1 className="h3 card-title">SignUp Now !!!</h1>
                                <br></br>

                                <label htmlFor="name">Name </label>
                                <br></br>
                                <input type="text" id="name" name="name" placeholder="Name"
                                    className="email-field dd-field" required />
                                <br></br>

                                <label htmlFor="email" className="label">Email address</label>
                                <br></br>
                                <input type="emal" name="email" id="email" placeholder="Email address" required className="email-field dd-field" />
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

                                <label htmlFor="state-dropdown">State</label>
                                <br></br>
                                <select id="state-dropdown" name="state" required className="email-field dd-field" onChange={(e) => {
                                    setState(states.filter((s) => {
                                        return s.code === e.target.value
                                    }))
                                }}>
                                    <option value="" className="email-field dd-field">Select state</option>
                                    {
                                        states.map((s) => {
                                            return <option key={s.id} value={s.code} className="email-field dd-field">{s.name}</option>
                                        })
                                    }
                                </select>
                                <br></br>

                                <label htmlFor="district-dropdown">District </label>
                                <br></br>
                                <select id="district-dropdown" name="district" required className="email-field dd-field">
                                    <option value="">Select district</option>
                                    {
                                        state === null ? null : state[0].districts.map((d) => {
                                            console.log(d)
                                            return <option value={d.id} key={d.id}>{d.name}</option>
                                        })
                                    }
                                </select>

                                <br></br>
                                <Link to="/login" className='login-link'> If You Already Have An Account Click Here To Login.</Link>
                                <button type="submit" className="btn btn-primary btn-3">Signup</button>

                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Signup