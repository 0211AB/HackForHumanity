import React from 'react'
import "./Services.css"

import service_img from "../images/cta.jpg"

const Services = () => {
    return (
        <section className="section service" aria-labelledby="service-label">
            <div className="container">

                <h2 className="h2 section-title" data-reveal>
                    What Advantages Will You Get Using Our Application?
                </h2>

                <div className="wrapper">

                    <ul className="service-list" data-reveal="left">

                        <li className="service-item">
                            <div>
                                <h3 className="h5 card-title">Waste Reduction and Recycling</h3>

                                <p className="card-text">
                                Sustainable waste management solutions to minimize environmental impact
                                </p>
                            </div>

                            <div className="card-icon">
                                <ion-icon name="repeat-outline" aria-hidden="true"></ion-icon>
                            </div>
                        </li>

                        <li className="service-item">
                            <div>
                                <h3 className="h5 card-title">Quick Registration</h3>

                                <p className="card-text">
                                    Easy to register and use application
                                </p>
                            </div>

                            <div className="card-icon">
                                <ion-icon name="person-add-outline" aria-hidden="true"></ion-icon>
                            </div>
                        </li>

                        <li className="service-item">
                            <div>
                                <h3 className="h5 card-title">Landfill Diversion Strategies</h3>

                                <p className="card-text">
                                Maximizing resource recovery and reducing the amount of waste sent to landfill
                                </p>
                            </div>

                            <div className="card-icon">
                                <ion-icon name="bonfire-outline" aria-hidden="true"></ion-icon>
                            </div>
                        </li>

                    </ul>

                    <figure className="service-banner img-holder" style={{ width: 500, height: 500 }}>
                        <img src={service_img} width="50" height="50" loading="lazy" alt="service banner"
                            className="img-cover" />
                    </figure>

                    <ul className="service-list" data-reveal="right">

                        <li className="service-item">
                            <div className="card-icon">
                                <ion-icon name="car-outline" aria-hidden="true"></ion-icon>
                            </div>

                            <div>
                                <h3 className="h5 card-title">Efficient Transportation</h3>

                                <p className="card-text">
                                    State-of-the-art collection vehicles equipped with the latest technology
                                </p>
                            </div>
                        </li>

                        <li className="service-item">
                            <div className="card-icon">
                                <ion-icon name="compass-outline" aria-hidden="true"></ion-icon>
                            </div>

                            <div>
                                <h3 className="h5 card-title">Customer Service and Support</h3>

                                <p className="card-text">
                                Dedicated and responsive customer service and support
                                </p>
                            </div>
                        </li>

                        <li className="service-item">
                            <div className="card-icon">
                                <ion-icon name="book-outline" aria-hidden="true"></ion-icon>
                            </div>

                            <div>
                                <h3 className="h5 card-title">Education and Outreach </h3>

                                <p className="card-text">
                                Community education and outreach programs to promote responsible waste management practices
                                </p>
                            </div>
                        </li>

                    </ul>

                </div>

            </div>
        </section>
    )
}

export default Services