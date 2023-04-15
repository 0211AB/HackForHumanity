import React from 'react'
import "./Contact.css"

const Contact = () => {
    return (
        <section className="contact" aria-label="contact" data-reveal="right">
            <div className="container">

                <ul className="contact-list">

                    <li>
                        <div className="contact-card">
                            <div className="card-icon">
                                <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
                            </div>

                            <div>
                                <h3 className="h6">Hot Line</h3>

                                <a href="tel:+01123457890" className="card-subtitle">+(01) 1234-57-890</a>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="contact-card">
                            <div className="card-icon">
                                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                            </div>

                            <div>
                                <h3 className="h6">E-mail Address</h3>

                                <a href="mailto:abhaybajaj0211@gmail.com" className="card-subtitle">info@gmail.com</a>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="contact-card">
                            <div className="card-icon">
                                <ion-icon name="compass-outline" aria-hidden="true"></ion-icon>
                            </div>

                            <div>
                                <h3 className="h6">Our Location</h3>

                                <address className="card-subtitle">Jadavpur University, S.L. Kolkata</address>
                            </div>
                        </div>
                    </li>

                </ul>

            </div>
        </section>
    )
}

export default Contact