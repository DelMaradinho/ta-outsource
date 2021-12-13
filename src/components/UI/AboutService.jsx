import React from 'react';
import ServiceDescription from './ServiceDescription';
import ServiceTitle from './ServiceTitle';
import classes from './AboutService.scss';

const AboutService = ({ children, title, description }) => {
    return (
        <div className="aboutService">
            <ServiceTitle title={title}/>
            <ServiceDescription description={description} />
        </div>
    )
}
export default AboutService;