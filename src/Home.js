// import React from "react";
import { Link } from "react-router-dom"
import './Home.css'

function Home() {
    return(
        <div className="homecont" >
            <div className="subcont" >
                <div className="header" >ACCESS MY SIWES1 REACT PROJECTS</div>
                <Link className="btn" to="quad" >Project One</Link>
                <Link className="btn margin" to="counter" >Project Two</Link>
            </div>
        </div>
    )
}

export default Home;