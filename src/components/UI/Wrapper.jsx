import React from 'react';
import classes from './Wrapper.scss';

const Wrapper = ({children}) => {
    return (
        <div className="wrapper">
            {children}
        </div>
    )
}
export default Wrapper;