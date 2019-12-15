import { takeEvery, getContext } from 'redux-saga/effects'

const GO_TO_HOME = 'GO_TO_HOME';
const GO_TO_USER = 'GO_TO_USER';
const GO_TO_EXPLORE = 'GO_TO_EXPLORE';


function* goToHomeSaga() {
    const history = yield getContext('history');
    history.push('/');
}
function* goToUserSaga() {
    const history = yield getContext('history');
    history.push('/user');
}
function* goToExploreSaga() {
    const history = yield getContext('history');
    history.push('/explore');
}

export function* PageSaga(){
    yield takeEvery(GO_TO_HOME, goToHomeSaga);
    yield takeEvery(GO_TO_USER, goToUserSaga);
    yield takeEvery(GO_TO_EXPLORE, goToExploreSaga);
}

export const goToHome = () => ({ type: GO_TO_HOME });
export const goToUser = () => ({ type: GO_TO_USER });
export const goToExplore = () => ({ type: GO_TO_EXPLORE});