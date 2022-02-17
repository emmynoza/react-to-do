import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <h1>todos</h1>
                <input className='input' id='input' placeholder='What needs to be done?' onClick={createTask}>
                </input>

            </div >
        )
    }
}

function createTask() {
    console.log('I was clicked');
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)