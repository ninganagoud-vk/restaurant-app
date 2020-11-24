import React from 'react';
import './style.css';
import tacos from '../../../assets/images/tacoss.svg';
import beer from '../../../assets/images/beer.jpg';
import wine from '../../../assets/images/wine.jpg';
import music from '../../../assets/images/music.jpg';

const Features = () => {
    const featuresList = [{
        name: "tacos",
        icon: tacos
    },
    {
        name: "Beer",
        icon: beer


    }, {
        name: "Wine",
        icon: wine
    }, {
        name: "Music",
        icon: music

    },
    ]
    return (
        <div className="features">
            <ul className="features-list">
                {featuresList.map(feature => <li>
                    <img src={feature.icon} alt={`${feature.name}`} />
                    <h3>{feature.name}</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.
                </p>
                </li>)}
            </ul>
        </div>
    )
}

export default Features;