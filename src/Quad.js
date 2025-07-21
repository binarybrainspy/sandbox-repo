// import React from 'react'
import { Link } from "react-router-dom"
// import cross from "./icon-cross.svg"
import './Quad.css'
import { useState } from "react";

// this is project one
function Quad() {
    // declaring usestate
    const [a1, seta] = useState(1)
    const [b1, setb] = useState(0)
    const [c1, setc] = useState(0)
    const [det1, setdet1] = useState("....")
    const [ans, setans] = useState("....")
    // decaring variables
    var a
    var b
    var c
    var det

    // get the handlers
    const getAhandler = (e) => {
        e.preventDefault()
        a = Number(e.target.value.trim())
        if (isNaN(a)) {
            a = 0
        }
        else {
            seta(a)
        }
        // console.log(a)
    }
    const getBhandler = (e) => {
        e.preventDefault()
        b = Number(e.target.value.trim())
        if (isNaN(b)) {
            b = 0
        }
        else {
            setb(b)
        }
        // console.log(b)
    }
    const getChandler = (e) => {
        e.preventDefault()
        c = Number(e.target.value.trim())
        if (isNaN(c)) {
            c = 0
        }
        else {
            setc(c)
        }
        // console.log(c)
        // console.log(a + b + c)
        // console.log(String(a) + " " + String(b) + " " + String(c))
    }

    const solve = (e) => {
        e.preventDefault()
        // get the determinant

        det = Math.pow(b1,2)-(4 * a1 * c1)
        // console.log(det)
        setdet1(String(det))

        // calculate the results
        if (det > 0) {
            var x1 = ((-b1 + Math.pow(det, 0.5))/(2 * a1)).toFixed(4)
            var x2 = ((-b1 - Math.pow(det, 0.5))/(2 * a1)).toFixed(4)
            setans("are " + String(x1) + " and " + String(x2) + ".")
        }
        else if (det === 0) {
            var x3 = (-b1/(2 * a1)).toFixed(4)
            setans("is " + String(x3) + " (twice).")
        }
        else if (det < 0) {
            var x4 = -b1/(2 * a1)
            var x5 = Math.pow(Math.abs(det), 0.5)/(2 * a1)
            var x4r = x4.toFixed(4)
            var x5r = x5.toFixed(4)
            // setans("are complex conjugate.")
            setans("are " + x4r + " +" + x5r + "i and " + x4r + " -" + x5r + "i." )
        }
        else {
            return;
        }
    }


    return (
        <div className='quadcont'>
            <div className='quadsubcont'>
                <div className="topq">
                    <span className='titleq' >Solve any Quadratic Equation</span>
                </div>

                <div className="inputq">
                    <div className="inputq1">
                        <input className="iq1" type="" placeholder="a" onChange={getAhandler} ></input>
                        <span className="iq1t">x<sup>2</sup></span>
                    </div>
                    <div className="inputq2">
                        <input className="iq1" type="" placeholder="b" onChange={getBhandler} ></input>
                        <span className="iq1t">x</span>
                    </div>
                    <div className="inputq3">
                        <input className="iq1" type="" placeholder="c" onChange={getChandler} ></input>
                        <span className="iq1t"></span>
                    </div>
                    <div className="equalityq">
                        <span>=</span>
                        <span>0</span>
                    </div>
                </div>

                <button className="onlybtn" onClick={solve} >SOLVE</button>

                <div className="solcont">
                    <div className="det" >The determinant is {det1} </div>
                    <div className="det x">The roots {ans} </div>
                </div>
                
                <div className="footerq">
                    <Link className="crossq" to="/"> <span className="footq1">Close App</span></Link>
                </div>

            </div>
        </div>
    )
}

export default Quad;