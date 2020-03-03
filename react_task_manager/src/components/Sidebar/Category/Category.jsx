import React from 'react';
import CategoryItem from './CategoryItem/CategoryItem';
import CategoryBlock from './Category.module.css'

const Category = (props) => {
    let _categoryBlock = CategoryBlock.category_block;

    const categoryItems = props.categories.map(el => {
        let categoryItem = 
        <CategoryItem 
            title={el.title} 
            key={el.id} 
            link={el.id}
            onDelete={props.onCategoryDelete}
        />;

        return categoryItem;
    });

    return(
        <div className={_categoryBlock}>
            { categoryItems }
        </div>
    );
}

export default Category;