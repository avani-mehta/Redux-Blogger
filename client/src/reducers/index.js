import React from 'react';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; //Redux form is going to manage all our form data inside our redux store; in order to do so, we have to wire up a reducer to our store..This reducer will be formed for us by redux form library
import StreamReducer from './StreamReducer';

export default combineReducers({
  form: formReducer, //wiring up reducer with key 'form'
  streams: StreamReducer
});
