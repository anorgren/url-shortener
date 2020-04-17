import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./components/app/app";
import EditForm from "./components/edit/editForm";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/edit" exact component={EditForm}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
