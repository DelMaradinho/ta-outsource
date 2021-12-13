import React from 'react';
import classes from './LogoTypeCard.scss';

const LogoTypeCard = ({ background, typename, typedesc }) => {
    return (
        <div className="logoTypeCard"  style={{ backgroundImage: `url(${background})` }} >
            <h3 className="logoTypeCard__title">
                {typename}
            </h3>
            <span className="logoTypeCard__description">
                {typedesc}
            </span>
        </div>
    )
}
export default LogoTypeCard;