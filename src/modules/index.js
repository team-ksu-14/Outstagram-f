import { combineReducers } from 'redux';
import posts, { postsSaga } from './posts';
import { all } from 'redux-saga/effects'
import { PageSaga } from './pages';

const rootReducer = combineReducers({ posts });

export function* rootSaga() {
    yield all([postsSaga(), PageSaga()]);
}

export default rootReducer;