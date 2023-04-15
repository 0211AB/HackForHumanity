import React from 'react'
import "./Blog.css"

import blog_1 from "../images/blog_1.avif"
import blog_2 from "../images/blog_2.avif"
import blog_3 from "../images/blog_3.avif"

import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <section className="section blog" aria-labelledby="blog-label">
            <div className="container">

                <div className="title-wrapper" data-reveal>

                    <div>
                        <p className="section-subtitle has-before" id="blog-label">Fresh News</p>

                        <h2 className="h2 section-title">Our recent article for sustainable development</h2>
                    </div>

                    <Link to="/" className="btn btn-secondary">
                        <span className="span">View More Blog</span>

                        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                    </Link>

                </div>

                <ul className="blog-list" data-reveal>

                    <li>
                        <div className="blog-card">

                            <figure className="card-banner img-holder">
                                <img src={blog_3} width="770" height="550" loading="lazy"
                                    alt="Energy Star Certified Electric Vehicle Chargers" className="img-cover" />
                            </figure>

                            <div className="card-content">

                                <time className="publish-date" dateTime="2022-06-03">03 Jun 2022</time>

                                <ul className="card-meta-list">

                                    <li className="card-meta-item">
                                        <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

                                        <span className="span">Abhay</span>
                                    </li>

                                    <li className="card-meta-item">
                                        <ion-icon name="chatbubble-outline" aria-hidden="true"></ion-icon>

                                        <span className="span">7 Comments</span>
                                    </li>

                                </ul>

                                <h3 className="h5">
                                    <Link to="/" className="card-title">
                                        5 Simple Ways to Reduce Your Business's Waste Footprint
                                    </Link>
                                </h3>

                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="blog-card">

                            <figure className="card-banner img-holder">
                                <img src={blog_2} width="770" height="550" loading="lazy"
                                    alt="Charging Solution For Electric Car & Hybrid Car" className="img-cover" />
                            </figure>

                            <div className="card-content">

                                <time className="publish-date" dateTime="2022-06-03">03 Jun 2022</time>

                                <ul className="card-meta-list">

                                    <li className="card-meta-item">
                                        <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

                                        <span className="span">Ayush</span>
                                    </li>

                                    <li className="card-meta-item">
                                        <ion-icon name="chatbubble-outline" aria-hidden="true"></ion-icon>

                                        <span className="span">2 Comments</span>
                                    </li>

                                </ul>

                                <h3 className="h5">
                                    <Link to="/" className="card-title">
                                        The Environmental Impact of Landfills: What You Need to Know
                                    </Link>
                                </h3>

                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="blog-card">

                            <figure className="card-banner img-holder" >
                                <img src={blog_1} width="770" height="550" loading="lazy"
                                    alt="Home Charging Station For A Electric Vehicless" className="img-cover" />
                            </figure>

                            <div className="card-content">

                                <time className="publish-date" dateTime="2022-06-03">03 Jun 2022</time>

                                <ul className="card-meta-list">

                                    <li className="card-meta-item">
                                        <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

                                        <span className="span">Sohan</span>
                                    </li>

                                    <li className="card-meta-item">
                                        <ion-icon name="chatbubble-outline" aria-hidden="true"></ion-icon>

                                        <span className="span">8 Comments</span>
                                    </li>

                                </ul>

                                <h3 className="h5">
                                    <Link to="/" className="card-title">
                                        The Future of Waste Management: Trends and Innovations to Watch
                                    </Link>
                                </h3>

                            </div>

                        </div>
                    </li>

                </ul>

            </div>
        </section>
    )
}

export default Blog