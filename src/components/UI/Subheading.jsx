import React from 'react';
import classes from './Subheading.scss';

const Subheading = ({ text }) => {
    return (
        <h2 className="subheading">
            {text}
        </h2>
    )
}
export default Subheading;