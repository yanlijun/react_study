import React from 'react';
import dva from 'dva';
import {Router, Route} from 'dva/router';
import Home from './home';
import './index.css';

const app = dva();

app.model({
    namespace: 'myApp',
    state: {
        listName: 'itemList',
        items: [1, 2, 3, 4, 5]
    },
});


app.router(({history}) =>
    <Router history={history}>
        <Route path="/" component={Home} />
</Router>
);

app.start('#root');
