import React from 'react';
import classes from './Content.scss';

const Content = ({ children }) => {
    return (
        <main className="mainContent">
            {children}
        </main>
    )
}
export default Content;