import React from 'react'
import "./Loader.css"
import img from "../images/about_2.jpg"
import { useLocation } from 'react-router-dom'

const Loader = () => {
    const location=useLocation()
    const file=location.state.data

    console.log(file)
    return (
        <div className='loading-container'>
            <h1 className="h2 hero-title">"Creating A Sustainable Future Takes Time - Hang In There !"</h1>
            <div className="box">
                <img src={URL.createObjectURL(file)} />
            </div>

            <div>
                <h1>
                    <div className="text_1">Scanning your waste to give it a new life. Hang tight !</div>
                    <div className="text_2">Sorting through the garbage to find the hidden treasures. Please wait !</div></h1>
            </div>
        </div>
    )
}

export default Loader