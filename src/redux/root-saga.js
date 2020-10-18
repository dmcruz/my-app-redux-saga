import { all, call } from 'redux-saga/effects';
import { incrementSaga, incrementSagaTakeEvery } from './counter.sagas';

export default function* rootSaga() {
    yield all([call (incrementSaga), call(incrementSagaTakeEvery)])
}