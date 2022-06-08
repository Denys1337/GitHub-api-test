import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { usersReducer } from './reducers/userReducer';

const rootReducer = combineReducers({ 

 usersReducer,

});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type Store = ReturnType<typeof rootReducer>;
