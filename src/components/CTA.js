import React from 'react'
import "./CTA.css"
import cta_img from "../images/cta.avif"
import { Link } from 'react-router-dom'

const CTA = () => {
    return (
        <section className="cta">
            <div className="container">

                <div className="cta-card" data-reveal="left">

                    <div>
                        <h2 className="h1 card-title">Make a Difference Today</h2>

                        <p className="card-text">
                            Small actions can have a big impact. Take action now and start reducing your waste and carbon footprint.
                        </p>
                    </div>

                    <Link to="/signup" className="btn btn-primary">
                        <span className="span">Register Now</span>

                        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                    </Link>

                </div>

                <figure className="cta-banner" data-reveal="right">
                    <img src={cta_img} width="330" height="206" loading="lazy" alt="cta banner"
                        className="img-cover" />
                </figure>

            </div>
        </section>
    )
}

export default CTA