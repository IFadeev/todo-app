import React from 'react';


const App = () => {
    return (
        <div>
            <h1>Todo App</h1>
            <SearchPanel/>
            <TodosList/>
        </div>
    )
}

const el = <h2>React element</h2>

const SearchPanel = () => {
    return (
        <input type="text" placeholder="Search anything"></input>
    )
}

const TodosList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Take a job</li>
            {el}
        </ul>
    )
}


export default App;