import React, { Component } from 'react';
import { commRequest } from './utils';
import * as Services from './service';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
        };
    }
    componentDidMount() {
        const self = this;
        commRequest(Services.getAccountInfo(), (re) => {
            re &&
            self.setState({
                channel_account: re.channel_account || '',
                phone: re.phone || '',
            })
        }, () => {
            self.setState({
                loading: true,
            })
        }, () => {
            self.setState({
                loading: false,
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
                {state.loading ?
                    (<p>加载中...</p>):
                    (<div>
                        <p>{state.channel_account}</p>
                        <p>{state.phone}</p>
                    </div>)
                }
            </div>
        )
    }
}

export default App
