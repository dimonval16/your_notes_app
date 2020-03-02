import React from 'react';
import CategoryItem from './CategoryItem/CategoryItem';
import CategoryBlock from './Category.module.css'

const Category = (props) => {
    let _categoryBlock = CategoryBlock.category_block;

    const categoryItems = props.categories.map(el => <CategoryItem title={el.title} key={el.id} link={el.id}/>);

    return(
        <div className={_categoryBlock}>
            { categoryItems }
        </div>
    );
}

export default Category;