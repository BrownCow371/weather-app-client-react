import reduceReducers from 'reduce-reducers';
import activitiesReducer from './activitiesReducer';
import conditionsReducer from './conditionsReducer';
import searchesReducer from './searchesReducer';
import sharedReducer from './sharedReducer';
import usersReducer from './usersReducer';

const initialState = {
    loading: false,
    session: !!sessionStorage.jwt,
    activities: [],
    conditions: [],
    weather: {},
    suggestion: {},
    errMessages: {}  
   }

const appReducer = reduceReducers(
    activitiesReducer, 
    conditionsReducer, 
    searchesReducer,
    usersReducer,
    sharedReducer,
    initialState);

export {appReducer};

