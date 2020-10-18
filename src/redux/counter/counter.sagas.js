import { takeEvery, takeLatest, delay, put } from 'redux-saga/effects';

export function* onIncrement() {
    yield console.log('Incremented...');
    yield delay(1000);
    yield put ({ type: 'INCREMENT'});
}

export function* incrementSaga() {
    yield takeLatest('INCREMENT_SAGA', onIncrement);
}

export function* incrementSagaTakeEvery() {
    yield takeEvery('INCREMENT_SAGA_EVERY', onIncrement);
}