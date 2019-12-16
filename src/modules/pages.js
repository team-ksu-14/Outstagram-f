import { takeEvery, getContext } from 'redux-saga/effects'

const GO_TO_SIGNIN = 'GO_TO_SIGNIN';
const GO_TO_HOME = 'GO_TO_HOME';
const GO_TO_USER = 'GO_TO_USER';
const GO_TO_EXPLORE = 'GO_TO_EXPLORE';

function* goToSigninSaga() {
    const history = yield getContext('history');
    history.push('/');
}
function* goToHomeSaga() {
    const history = yield getContext('history');
    history.push('/home');
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
    yield takeEvery(GO_TO_SIGNIN, goToSigninSaga);
    yield takeEvery(GO_TO_HOME, goToHomeSaga);
    yield takeEvery(GO_TO_USER, goToUserSaga);
    yield takeEvery(GO_TO_EXPLORE, goToExploreSaga);
}

export const goToSignin = () => ({ type: GO_TO_SIGNIN });
export const goToHome = () => ({ type: GO_TO_HOME });
export const goToUser = () => ({ type: GO_TO_USER });
export const goToExplore = () => ({ type: GO_TO_EXPLORE});