import React from 'react';
import SearchPanel from './search-panel';
import TodosList from './todo-list';

const App = () => {
    return (
        <div>
            <h1>Todo App</h1>
            <SearchPanel/>
            <TodosList/>
        </div>
    )
}

export default App;