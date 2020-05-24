import React from 'react';
import CategoryStyle from './Category.module.css';
import CategoryItem from './CategoryItem/CategoryItem';
import AddCategory from './AddCategory/AddCategory';
import FirstMessage from "./FirstMessage/FirstMessage";

export default function Category(props) {
    const _categoryBlock = CategoryStyle.category_block;
    const condition =
        props.categories.length === 0 &&
        !props.fetching &&
        props.catFieldHidden;

    return (
        <div className={_categoryBlock}>
            <AddCategory
                catFieldHidden={props.catFieldHidden}
                onAdd={props.onCategoryAdd}
            />
            {condition ?
                <FirstMessage/>
                :
                props.categories.map(el => (
                    <CategoryItem
                        title={el.title}
                        key={el.id}
                        link={el.id}
                        onDelete={props.onCategoryDelete}
                        onEdit={props.onCategoryEdit}
                    />))
            }
        </div>
    );
}