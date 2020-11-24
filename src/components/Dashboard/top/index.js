import React from 'react';
import './style.css';

export const Top = () => {
    return (
        <div className="top">
            <div className="toco-image-header">
                <h2>Terry's Taco Joint</h2>
                <p>Pretty Good Tacos!</p>
            </div>
            <div className="cta-wrapper">
                <div className="cta">
                    <p className="price">
                        $1.99
                    </p>
                    <p>
                        Tacos
                    </p>
                </div>
                <div className="cta">
                    <p className="price">
                        $1.99
                    </p>
                    <p>
                        Kombucha
                    </p>
                </div>
            </div>

        </div>
    )
}