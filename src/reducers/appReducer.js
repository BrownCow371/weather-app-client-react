import reduceReducers from 'reduce-reducers';
import activitiesReducer from './activitiesReducer';
import conditionsReducer from './conditionsReducer';
import searchesReducer from './searchesReducer';
import sharedReducer from './sharedReducer';
import usersReducer from './usersReducer';

const initialState = {
    loading: false,
    authenticating: false,
    weather: {},
    conditions: [],
    activities: [],
    errMessages: {},
    suggestion: {},
    jwt: {}
   }

const appReducer = reduceReducers(
    activitiesReducer, 
    conditionsReducer, 
    searchesReducer,
    usersReducer,
    sharedReducer,
    initialState);

export {appReducer};

