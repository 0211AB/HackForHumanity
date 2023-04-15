import React from 'react'
import './About.css'
import about_img_1 from "../images/about_1.avif"
import about_img_2 from "../images/about_2.jpg"
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section className="section about" aria-labelledby="about-label">
            <div className="container">

                <figure className="about-banner" data-reveal="left">
                    <img src={about_img_2} width="380" height="382" loading="lazy" alt="about banner"
                        className="w-100 img-1" />

                    <img src={about_img_1} width="347" height="349" loading="lazy" alt="about banner"
                        className="w-100 img-2" />
                </figure>

                <div className="about-content" data-reveal="right">

                    <p className="section-subtitle has-before" id="about-label">What We Do!</p>

                    <h2 className="h2 section-title">
                        Creating sustainable solutions for a cleaner, healthier planet.
                    </h2>

                    <p className="section-text">
                        At our core, we are committed to providing sustainable waste management solutions that promote a cleaner, healthier planet for future generations
                    </p>

                    <div className="about-wrapper">

                        <div className="about-card">

                            <div className="title-wrapper">
                                <ion-icon name="archive-outline" aria-hidden="true"></ion-icon>

                                <h3 className="card-title">Waste Collection and Transportation</h3>
                            </div>

                            <p className="card-text">
                                Efficient and reliable waste collection and transportation services for communities.
                            </p>

                        </div>

                        <div className="about-card">

                            <div className="title-wrapper">
                                <ion-icon name="globe-outline" aria-hidden="true"></ion-icon>

                                <h3 className="card-title">Recycling Programs and Waste Processing</h3>
                            </div>

                            <p className="card-text">
                                Comprehensive recycling programs to help communities reduce their environmental footprint.
                            </p>

                        </div>

                    </div>

                    <ul className="about-list">

                        <li className="about-item">
                            <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                            <span className="span">Provide information on what types of waste should be sorted .</span>
                        </li>

                        <li className="about-item">
                            <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                            <span className="span">Clear labeling and signage to help ensure that waste is sorted properly.</span>
                        </li>

                    </ul>

                    <Link to="/" className="btn btn-primary">
                        <span className="span">Read More</span>

                        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                    </Link>

                </div>

            </div>
        </section>
    )
}

export default About