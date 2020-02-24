import React from 'react';
import CategoryItem from './CategoryItem/CategoryItem';
import CategoryBlock from './Category.module.css'

const Category = (props) => {
    return(
        <div className={CategoryBlock.category_block}>
            <CategoryItem name="Понедельник" />
            <CategoryItem name="Вторник"/>
            <CategoryItem name="Среда"/>
            <CategoryItem name="Четверг"/>
            <CategoryItem name="Пятница"/>
            <CategoryItem name="Суббота"/>
            <CategoryItem name="Воскресенье"/>
        </div>
    );
}

export default Category;