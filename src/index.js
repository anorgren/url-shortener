import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./components/app/app";
import DeletePage from "./components/delete/deletePage";
import EditDeletePage from "./components/edit/editDeletePage";
import Header from "./components/app/header";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/update" component={EditDeletePage}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
