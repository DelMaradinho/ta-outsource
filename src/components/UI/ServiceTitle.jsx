import React from 'react';
import classes from './ServiceTitle.scss';

const ServiceTitle = ({ title }) => {
    return (
        <h1 className="serviceTitle">
            {title}
        </h1>
    )
}
export default ServiceTitle;