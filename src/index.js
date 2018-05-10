import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore,combineReducers ,applyMiddleware } from 'redux'
import reducer from './reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import createHistory from 'history/createBrowserHistory'
import Routes from "./route";
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
                <Routes/>
            </ConnectedRouter>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
