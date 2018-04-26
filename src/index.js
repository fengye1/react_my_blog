import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './view/home';
import Category from "./view/category";
import Detail from "./view/detail";
import Login from "./view/login"
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore,combineReducers ,applyMiddleware } from 'redux'
import reducer from './reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import createHistory from 'history/createBrowserHistory'
import { Route } from "react-router";
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'


const history = createHistory()

const middleware = routerMiddleware(history)

const store = createStore(
    combineReducers({
        ...reducer,
        router: routerReducer
    }),
    applyMiddleware(middleware)
  )
  

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <ConnectedRouter history={history}
            >
            <div>
                {/* <App /> */}
                <Route exact path="/" component={Home} />
                <Route path="/category" component={Category} />
                <Route path="/detail" component={Detail} />
                <Route path="/Login" component={Login} />
                
            </div>
            </ConnectedRouter>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
