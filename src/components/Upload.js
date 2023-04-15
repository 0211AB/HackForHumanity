import React, { useEffect, useState } from 'react'
import Header from './Header'
import "./Upload.css"

import { Link, useNavigate } from 'react-router-dom'

import t1 from "../images/t1.jpg"
import t2 from "../images/t2.jpg"
import t3 from "../images/t3.jpg"
import t4 from "../images/t4.jpg"
import t5 from "../images/t5.jpg"
import t6 from "../images/t6.jpg"

import { BigHead } from "@bigheads/core";
import { getRandomOptions } from "../data/bigHead";

const Upload = () => {
    const [init, setInit] = useState([0, 0, 0, 0, 0, 0]);
    const hiddenFileInput = React.useRef(null);
    const [file, setFile] = useState(null)
    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const navigate = useNavigate()

    useEffect(() => {
        if (file !== null) {
            navigate("/load", { state: { data: file } });
        }
    }, [file])


    return (
        <>
            <Header />

            <input type="file"
                ref={hiddenFileInput}
                accept="image/png, image/jpg, image/jpeg"
                style={{ display: 'none' }}
                onChange={() => { setFile(hiddenFileInput.current.files[0]) }}
            />

            <div className='type-container container'>
                <h1 className="h2 card-title text-center">If your waste is already sorted , Please specify quantity !!!</h1>
                <div className="upload-card-3" >
                    <div>
                        <img className='avatar2' alt="t6" src={t6} />
                        <div className='inc'>
                            <p onClick={() => {
                                const oldInit = [...init];
                                oldInit[0] += 1;
                                setInit(oldInit);
                            }}><ion-icon name="add-circle" ></ion-icon></p>
                            <p className='num'>{init[0]}</p>
                            <p onClick={() => {
                                const oldInit = [...init];
                                oldInit[0] -= 1;
                                if (oldInit[0] < 0)
                                    oldInit[0] = 0
                                setInit(oldInit);
                            }}><ion-icon name="remove-circle" onClick={() => {
                                const oldInit = [...init];
                                oldInit[0] -= 1;
                                setInit(oldInit);
                            }}></ion-icon></p>
                        </div>
                    </div>
                    <div>
                        <img className='avatar2' alt="t1" src={t1} />
                        <div className='inc'>
                            <p onClick={() => {
                                const oldInit = [...init];
                                oldInit[1] += 1;
                                setInit(oldInit);
                            }}><ion-icon name="add-circle" ></ion-icon></p>
                            <p className='num'>{init[1]}</p>
                            <p onClick={() => {
                                const oldInit = [...init];
                                oldInit[1] -= 1;
                                if (oldInit[1] < 0)
                                    oldInit[1] = 0
                                setInit(oldInit);
                            }}><ion-icon name="remove-circle"></ion-icon></p>
                        </div>
                    </div>
                    <div>
                        <img className='avatar2' alt="t2" src={t2} />
                        <div className='inc'>
                            <p onClick={() => {
                                const oldInit = [...init];
                                oldInit[2] += 1;
                                setInit(oldInit);
                            }}><ion-icon name="add-circle" ></ion-icon></p>
                            <p className='num'>{init[2]}</p>
                            <p onClick={() => {
                                const oldInit = [...init];
                                oldInit[2] -= 1;
                                if (oldInit[2] < 0)
                                    oldInit[2] = 0
                                setInit(oldInit);
                            }}><ion-icon name="remove-circle"></ion-icon></p>
                        </div>
                    </div>
                    <div>
                        <img className='avatar2' alt="t3" src={t3} />
                        <div className='inc'>
                            <p onClick={() => {
                                const oldInit = [...init];
                                oldInit[3] += 1;
                                setInit(oldInit);
                            }}><ion-icon name="add-circle" x></ion-icon></p>
                            <p className='num'>{init[3]}</p>
                            <p onClick={() => {
                                const oldInit = [...init];
                                oldInit[3] -= 1;
                                if (oldInit[3] < 0)
                                    oldInit[3] = 0
                                setInit(oldInit);
                            }}><ion-icon name="remove-circle"></ion-icon></p>
                        </div>
                    </div>
                    <div>
                        <img className='avatar2' alt="t4" src={t4} />
                        <div className='inc'>
                            <p onClick={() => {
                                const oldInit = [...init];
                                oldInit[4] += 1;
                                setInit(oldInit);
                            }}><ion-icon name="add-circle" ></ion-icon></p>
                            <p className='num'>{init[4]}</p>
                            <p onClick={() => {
                                const oldInit = [...init];
                                oldInit[4] -= 1;
                                if (oldInit[4] < 0)
                                    oldInit[4] = 0
                                setInit(oldInit);
                            }}><ion-icon name="remove-circle"></ion-icon></p>
                        </div>
                    </div>
                    <div>
                        <img className='avatar2' alt="t5" src={t5} />
                        <div className='inc'>
                            <p onClick={() => {
                                const oldInit = [...init];
                                oldInit[5] += 1;
                                setInit(oldInit);
                            }}><ion-icon name="add-circle" ></ion-icon></p>
                            <p className='num'>{init[5]}</p>
                            <p onClick={() => {
                                const oldInit = [...init];
                                oldInit[5] -= 1;
                                if (oldInit[5] < 0)
                                    oldInit[5] = 0
                                setInit(oldInit);
                            }}><ion-icon name="remove-circle"></ion-icon></p>
                        </div>
                    </div>
                </div>

                <div onClick={()=>{  navigate("/details", { state: { data: init } });}} className="btn btn-primary btn-submit">
                    <span className="span">Process Waste</span>

                    <p className='num'><ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon></p>
                </div>
            </div>

            <section className="cta upload-container">
                <div className="container">
                    <div className="cta-card upload-card" >

                        <div>
                            <h2 className="h1 card-title"> In case you cannot determine or sort your waste OR your waste is of another category , upload the image of your waste and we will sort it for you !!!</h2>
                        </div>

                        <p onClick={handleClick} className="btn btn-primary">
                            <span className="span">Upload Image</span>

                            <p className='num'><ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon></p>
                        </p>

                    </div>
                    <div className="upload-card-2" >
                        <BigHead className='avatar' {...getRandomOptions()} />
                        <div>
                            <h2 className="h1 card-title">Abhay Bajaj</h2>

                            <p className="card-text">
                                Kolkata , West Bengal
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Upload