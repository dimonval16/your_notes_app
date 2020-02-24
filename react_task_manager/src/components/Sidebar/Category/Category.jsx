import React from 'react';
import CategoryItem from './CategoryItem/CategoryItem';
import CategoryBlock from './Category.module.css'

const Category = (props) => {
    return(
        <div className={CategoryBlock.category_block}>
            {props.categories.map(el => 
                <CategoryItem title={el.title} key={el.id}/>
            )}
        </div>
    );
}

export default Category;