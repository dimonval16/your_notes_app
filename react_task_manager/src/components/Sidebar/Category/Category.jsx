import React from 'react';
import CategoryItem from './CategoryItem/CategoryItem';
import CategoryBlock from './Category.module.css'
import AddCategory from './AddCategory/AddCategory';

const Category = (props) => {
    let _categoryBlock = CategoryBlock.category_block;

    const categoryItems = props.categories.map(el => {
        let categoryItem =
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
                addCategoryFormRef={props.addCategoryFormRef}
                openedForm={props.openedForm}
                hideAddForm={props.onClickSave}
                onAdd={props.onCategoryAdd}
            />
            {categoryItems}
        </div>
    );
}

export default Category;