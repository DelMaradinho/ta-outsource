import React from 'react';
import classes from './BreadcrumbsItem.scss'

const BreadcrumbsItem = ({ breadcrumb, breadcrumbLink }) => {
    return (
        <li className="breadcrumbsItem" >
            <a className="breadcrumbsLink" href={breadcrumbLink}>
                {breadcrumb}
            </a>
        </li>
    )
}
export default BreadcrumbsItem;