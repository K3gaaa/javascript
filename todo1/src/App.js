import React from 'react';

const ItemList = () => (<ul>
    <li>Вынести мусор</li>
    <li>Помыть посуду</li>
</ul>);

const App = () => (<div>
    <h1>Спсок дел</h1>
    <ItemList />
</div>);

export default App;