import React from 'react';
import LogoTypeCard from './LogoTypeCard';
import classes from './LogoTypes.scss';
import silkscreen from '../../img/silkscreen.jpg';

const LogoTypes = ({ children }) => {
    return (
        <div className="logoTypes">
            <LogoTypeCard 
            background={silkscreen}
            typename="Шелкография"  
            typedesc="трафаретная или прямая печать" />
        </div>
    )
}
export default LogoTypes;