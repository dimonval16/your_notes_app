import React from 'react';
import CategoryItem from './CategoryItem/CategoryItem';
import CategoryBlock from './Category.module.css'
import AddCategory from './AddCategory/AddCategory';

function Category(props) {
    const _categoryBlock = CategoryBlock.category_block;

    return (
        <div className={_categoryBlock}>
            <AddCategory
                catFieldHidden={props.state.viewFields.catFieldHidden}
                onHideAddForm={props.onClickSave}
                onAdd={props.onCategoryAdd}
            />
            {props.state.categories.map(el => {
                return <CategoryItem
                    title={el.title}
                    key={el.id}
                    link={el.id}
                    onDelete={props.onCategoryDelete}
                    onEdit={props.onCategoryEdit}
                />;
            })}
        </div>
    );
}

export default Category;