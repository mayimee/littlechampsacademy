import React from 'react';
import "./Home.css";
import Home_Video from "./Video/Home_Video.mp4";
import SchoolPrograms from "./SchoolPrograms"

const Home = () => {

    return (
        <div>
            <div className="homeVideoContainer">
                <div className="videoContainer">
                    <video autoPlay loop muted>
                        <source src={Home_Video} type="video/mp4"/>
                    </video>
                </div>
            </div>  
            <SchoolPrograms/>
        </div>
                  
    )
}

export default Home;