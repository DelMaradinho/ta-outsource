import React from 'react';
import classes from '../UI/Banner.scss';

const Banner = ({ children, background }) => {
    return (
        <div className="mainBanner" style={{ backgroundImage: `url(${background})` }} >
            {children}
        </div>
    )
}
export default Banner;