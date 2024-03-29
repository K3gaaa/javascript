import React from 'react';
import styles from'./Item.module.css';
import classnames from 'classnames';


const Item = ({ value, isDone }) => (
    <div className={
        classnames({
            [styles.item]: true,
            [styles.done]: isDone
        })
    }>
        {value}
    </div>);
export default Item;