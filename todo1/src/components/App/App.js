import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from "../Footer/Footer";

const todoItem = 'Приложение';
const App = () => {
    const items = [
    {value: 'Пройти очередной урок'},
    {value: 'Убраться'},
    {value: 'По играть'}
];
    return (
    <div>
        <h1>Важные дела:</h1>
        <InputItem />
        <ItemList items={items} />
        <Footer count={3} />
    </div>);
}
export default App;