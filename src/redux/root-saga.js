import { all, call } from 'redux-saga/effects';
import { incrementSaga, incrementSagaTakeEvery } from './counter/counter.sagas';
import { fetchUsersSaga } from './users/user.sagas';

export default function* rootSaga() {
    yield all([call (incrementSaga), call(incrementSagaTakeEvery), call(fetchUsersSaga)])
}