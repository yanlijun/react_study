import React, { Component } from 'react';
import App1 from './App1';
import App2 from './App2';


class Home extends Component {
    state = {
        listName: 'itemList',
        items: [1, 2, 3, 4, 5]
    };
    render() {
        const state = this.state;
        return (
            <div className="wrapper">
                <App1 name="晏利军" />
                <App2
                    listName={state.listName}
                    items={state.items}
                />
            </div>
        )
    }
}

export default Home
