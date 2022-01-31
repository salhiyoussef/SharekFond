import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import users from './usersReducer';
import layout from './layoutReducer';

const rootReducers = combineReducers({
    layout,
    users,
    form: formReducer,
    routing: routerReducer
});

export default rootReducers;