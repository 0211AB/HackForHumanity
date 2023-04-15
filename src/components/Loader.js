import React, { useEffect } from 'react'
import "./Loader.css"
import img from "../images/about_2.jpg"
import { useLocation, useNavigate } from 'react-router-dom'

const Loader = () => {
    const location = useLocation()
    const file = location.state.data
    const navigate = useNavigate()

    useEffect(() => {
        const sendData = async () => {

            const data = new FormData();
            data.set('file', file)
            const res = await fetch("http://127.0.0.1:5000/predict", {
                method: "POST",
                body: data,
            });

            const res_data = await res.json();
            console.log(res_data);
            navigate("/details", { state: { data: res_data } })

        };

        sendData();

    }, [])

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