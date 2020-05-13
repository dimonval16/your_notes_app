import React from 'react';
import CategoryStyle from './Category.module.css';
import CategoryItem from './CategoryItem/CategoryItem';
import AddCategory from './AddCategory/AddCategory';

export default function Category(props) {
    const _categoryBlock = CategoryStyle.category_block;

    return (
        <div className={_categoryBlock}>
            <AddCategory
                catFieldHidden={props.catFieldHidden}
                onHideAddForm={props.onClickSave}
                onAdd={props.onCategoryAdd}
            />
            {props.categories.map(el => (
                <CategoryItem
                    title={el.title}
                    key={el.id}
                    link={el.id}
                    onDelete={props.onCategoryDelete}
                    onEdit={props.onCategoryEdit}
                />
            ))}
        </div>
    );
}