import React, { useEffect } from 'react'
import "./Hero.css"
import hero_img from '../images/home.svg'
import { Link } from 'react-router-dom'

const Hero = () => {
    useEffect(() => {
        const revealElements = document.querySelectorAll("[data-reveal]");

        const scrollReveal = function () {
            for (let i = 0, x = revealElements.length; i < x; i++) {
                if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
                    revealElements[i].classList.add("revealed");
                } else {
                    revealElements[i].classList.remove("revealed");
                }
            }
        }

        window.addEventListener("scroll", scrollReveal);
        window.addEventListener("load", scrollReveal);

    }, [])
    return (
        <section className="section hero" aria-label="home">
            <div className="container">

                <div className="hero-content" data-reveal="left">

                    <h1 className="h1 hero-title">
                        Waste Collection<span className="span"> Sorting </span> And Processing.
                    </h1>

                    <ul className="hero-list">

                        <li>
                            <div className="hero-card">
                                <ion-icon name="trash-outline" aria-hidden="true"></ion-icon>

                                <p className="card-subtitle">Waste Generated</p>

                                <p className="card-title">130 kg/week</p>
                            </div>
                        </li>

                        <li>
                            <div className="hero-card">
                                <ion-icon name="leaf-outline" aria-hidden="true"></ion-icon>

                                <p className="card-subtitle">Recycling Rate</p>

                                <p className="card-title">80 %</p>
                            </div>
                        </li>

                        <li>
                            <div className="hero-card">
                                <ion-icon name="happy-outline" aria-hidden="true"></ion-icon>

                                <p className="card-subtitle">Customer Satisfaction</p>

                                <p className="card-title">100 %</p>
                            </div>
                        </li>

                    </ul>

                    <Link to="/upload" className="btn btn-primary">
                        <span className="span">Upload Images</span>

                        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                    </Link>

                </div>

                <figure className="hero-banner" data-reveal="right">
                    <img src={hero_img} width="1116" height="766" alt="Bike" className="w-100" />
                </figure>

            </div>
        </section>
    )
}

export default Hero