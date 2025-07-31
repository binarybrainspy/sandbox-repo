// import React from "react";
import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import './Beta.css'
import './Beta2.css'
import logo from './google.png';
// import login1 from './login1.jpg';

function Beta() {

    // a function that cycles through the values in cycleValues every 2 seconds
    const cycleValues = ["betacont2_2", "betacont2_3", "betacont2_4", "betacont2_5"]; // starts and ends at 0
    const [index, setIndex] = useState(0);
    const [value, setValue] = useState(cycleValues[0]);

    useEffect(() => {
        const timer = setInterval(() => {
        setIndex(prev => {
            const nextIndex = (prev + 1) % cycleValues.length;
            setValue(cycleValues[nextIndex]);
            return nextIndex;
        });
        }, 2000);

        return () => clearInterval(timer); // cleanup on unmount
    }, []);

    return (
        <div className='betasignin'>
            <div className='betacont1' >
                <div className='name'><p id="cent" >GPACALC</p></div>
                <div className='betacont_1'>
                    <div className='wel' >Welcome</div>
                    {/* <div className='text' >Know, Prepare and Plan to get that <span className='text_1' >wanted CGPA</span></div> */}
                    <div className='you' >You can sign in using google</div>
                    <button className='c'>
                        <div className='f'>
                        <img className='d'src={logo} alt="Logo" />
                        <p className='e'><Link to="input" className="rem" >Sign In with Google</Link></p>
                        </div>
                    </button>
                </div>
            </div>
            <div className={value} id="betacont1_2" >
            </div>
        </div>
    )
}

export default Beta;