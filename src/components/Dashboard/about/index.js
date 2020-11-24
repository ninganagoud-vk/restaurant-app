import React from 'react'
import './style.css';
import taco from '../../../assets/images/feature.png';

const About = () => {
    return (
        <div className="about-wrapper ">
            <div className="about-wrapper-card">
                <img src={taco} alt="taco" />
                <div className="about_details">
                    <h1>
                        Featured Taco
                </h1>
                    <p>
                        Slim Profile, easy to hold and loaded with cheese.
</p>
                    <p>
                        This is the one you have been waiting for
</p>
                    <button>
                        Learn More--
</button>
                </div>

            </div>
        </div>
    )
}

export default About;