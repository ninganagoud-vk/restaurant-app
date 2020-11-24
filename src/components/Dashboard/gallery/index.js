import React from 'react';
import './style.css';

const Gallery = () => {
    return (
        <div className="gallery-wrapper">
            <h1>
                Instant Grams
            </h1>
            <div className="gallery-images">
                {Array(10).fill().map((_, index) => (
                    <img src={` https://source.unsplash.com/random/${index + 1}x${index + 1}`}
                        alt={`${index + 1}gallery_image`} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Gallery