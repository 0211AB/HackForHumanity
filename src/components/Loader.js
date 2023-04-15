import React from 'react'
import "./Loader.css"
import img from "../images/about_2.jpg"

const Loader = () => {
    return (
        <div className='loading-container'>
            <h1 className="h2 hero-title">"Creating A Sustainable Future Takes Time - Hang In There !"</h1>
            <div className="box">
                <img src={img} />
            </div>

        <div>
            <h1>
                <span class="text_1">Scanning your waste to give it a new life. Hang tight !</span>
                <span class="text_2">Sorting through the garbage to find the hidden treasures. Please wait !</span></h1>
            </div>
        </div>
    )
}

export default Loader