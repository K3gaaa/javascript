import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from "../Footer/Footer";
import styles from'./App.module.css';

const todoItem = 'Приложение';
class App extends React.Component {
    state = {
        items: [
            {
                value: 'Пройти очередной урок',
                isDone: true
            },
            {
                value: 'Убраться',
                isDone: true
            },
            {
                value: 'По играть',
                isDone: false
            }
        ]
    };

    render() {
            return (
                <div className={styles.wrap}>
                    <h1 className={styles.title}>Важные дела:</h1>
                    <InputItem />
                    <ItemList items={this.state.items} />
                    <Footer count={3} />
                </div>);
    }
}

export default App;