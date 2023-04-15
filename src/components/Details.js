import React from 'react'
import "./Details.css"
import Header from './Header'
import truck from "../images/truck-removebg-preview.png"

import { Link, useLocation, useNavigate } from 'react-router-dom'

const Details = () => {
    const location = useLocation()
    const data = location.state.data
    console.log(data)

    const navigate=useNavigate()
    return (
        <>
            <Header />
            <section className="cta">
                <div className="container details-container">

                    <div className="cta-card">

                        <div>
                            <h2 className="h1 card-title">WASTE TYPE</h2>

                            <p className="card-text card-details">
                                Based on our machine learning model's analysis of the image, we predict that the type of Waste is likely to be <span className='val'>{Array.isArray(data) === true ? "-" : data.predicted_value}</span> Our model uses VGG16 to make this prediction, which has been trained on a large dataset of 225,000 images. Keep in mind that this prediction is based on statistical analysis and may not be exact, as there are many factors that can influence the value.
                            </p>
                        </div>
                    </div>

                    <figure className="cta-banner data-banner" >
                        <div>
                            <h2 className="h2 card-title">DATA MANUALLY ENTERED BY YOU</h2>

                            <br></br>
                            <p className="card-text card-details">
                                Paper : {Array.isArray(data) === true ? data[0] : "0"}
                            </p>
                            <p className="card-text card-details">
                                Organic : {Array.isArray(data) === true ? data[1] : "0"}
                            </p>
                            <p className="card-text card-details">
                                Metal : {Array.isArray(data) === true ? data[2] : "0"}
                            </p>
                            <p className="card-text card-details">
                                E-Waste : {Array.isArray(data) === true ? data[3] : "0"}
                            </p>
                            <p className="card-text card-details">
                                Glass : {Array.isArray(data) === true ? data[4] : "0"}
                            </p>
                            <p className="card-text card-details">
                                Plastic : {Array.isArray(data) === true ? data[5] : "0"}
                            </p>
                        </div>
                    </figure>

                </div>

                <div className='container details-continue'>
                    <div className='details-img'> <img src={truck} /></div>
                    <div className='details-btn' onClick={()=>{ navigate('/upload')}}>
                        <h1>All Data has been collected and sent to server. Click to request collection of waste</h1>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Details