import React, { Component } from 'react';
import {connect} from 'dva';
import Request from './utils';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };
    }
    componentDidMount() {
        const self = this;
        Request('http://test.node.17shihui.com/p/operate/api/bankroll/account', (re) => {
            self.setState({
                channel_account: re.channel_account,
                phone: re.phone,
            })
        })
    }
    render() {
        const state = this.state;
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">欢迎</p>
                <p>{state.name}</p>
                <p>{state.channel_account}</p>
                <p>{state.phone}</p>
            </div>
        );
    }
}

export default connect(() => {
    return {
        name: 'yanlijun'
    }
})(App);
