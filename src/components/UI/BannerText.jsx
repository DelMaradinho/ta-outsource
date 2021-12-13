import React from 'react';
import './BannerText.scss';

const BannerText = ({ children }) => {
    return (
        <div className="bannerText">
            {children}
        </div>
    )
}
export default BannerText;