import { takeLatest, put } from 'redux-saga/effects';

export function* onIncrement() {
    yield console.log('Incremented...');
    yield put ({ type: 'INCREMENT'});
}

export function* incrementSaga() {
    yield takeLatest('INCREMENT_SAGA', onIncrement);
}