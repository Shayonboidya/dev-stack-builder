// import React from 'react';
import bannerImg from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div className="container flex">
            <div>
                <h2>Build your Ideal
                    <span>Development Stack</span>
                </h2>
            </div>
            <img src={bannerImg} alt="" />

        </div>
    );
};

export default Banner;