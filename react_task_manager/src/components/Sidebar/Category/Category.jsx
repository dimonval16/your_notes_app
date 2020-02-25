import React from 'react';
import CategoryItem from './CategoryItem/CategoryItem';
import CategoryBlock from './Category.module.css'

const Category = (props) => {

    const categoryItems = props.categories.map(el => <CategoryItem title={el.title} key={el.id}/>);

    return(
        <div className={CategoryBlock.category_block}>
            { categoryItems }
        </div>
    );
}

export default Category;