import React from 'react';
import CategoryItem from './CategoryItem/CategoryItem';
import CategoryBlock from './Category.module.css'
import AddCategory from './AddCategory/AddCategory';

const Category = (props) => {
    const _categoryBlock = CategoryBlock.category_block;

    const categoryItems = props.state.categories.map(el => {
        const categoryItem =
            <CategoryItem
                title={el.title}
                key={el.id}
                link={el.id}
                onDelete={props.onCategoryDelete}
                onEdit={props.onCategoryEdit}
            />;

        return categoryItem;
    });

    return (
        <div className={_categoryBlock}>
            <AddCategory
                catFieldHidden={props.state.viewFields.catFieldHidden}
                hideAddForm={props.onClickSave}
                onAdd={props.onCategoryAdd}
            />
            {categoryItems}
        </div>
    );
}

export default Category;