import React from 'react';
import classes from './ServiceDescription.scss';

const ServiceDescription = ({ description }) => {
    return (
        <p className="serviceDescription">
            {description}
        </p>
    )
}
export default ServiceDescription;