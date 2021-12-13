import React from 'react';
import classes from './BreadcrumbsList.scss';
import BreadcrumbsItem from './BreadcrumbsItem';

const BreadcrumbsList = () => {
    return (
        <ul className="breadcrumbsList">
            <BreadcrumbsItem 
            breadcrumb="Главная"
            breadcrumbLink="https://www.technoavia.ru/" 
            />
            <BreadcrumbsItem
            breadcrumb="Каталог"
            breadcrumbLink="https://www.technoavia.ru/katalog" />
            <BreadcrumbsItem
            breadcrumb="Услуги"
            breadcrumbLink="https://www.technoavia.ru/katalog/uslugi" />
        </ul>
    )
}
export default BreadcrumbsList;