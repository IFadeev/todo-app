import React from 'react';
import SearchPanel from './search-panel';
import TodosList from './todo-list';
import Appheader from './app-header';

const App = () => {
    return (
        <div>
            <Appheader/>
            <SearchPanel/>
            <TodosList/>
        </div>
    )
}

export default App;