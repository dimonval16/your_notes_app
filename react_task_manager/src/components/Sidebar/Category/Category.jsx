import React from 'react';
import CategoryItem from './CategoryItem/CategoryItem';

const Category = (props) => {
    return(
        <div>
            <CategoryItem name="Понедельник"/>
            <CategoryItem name="Вторник"/>
            <CategoryItem name="Среда"/>
            <CategoryItem name="Четверг"/>
        </div>
    );
}

export default Category;