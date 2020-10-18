import { takeLatest, put } from 'redux-saga/effects';
import { requestUsers, receiveUsers } from './user.actions';


function* fetchUsers() {
    var usersJson;
    yield put ({ type: 'CLEAR_USERS'});
    yield console.log('requesting /api/users');
    yield put (requestUsers());
    yield fetch("/api/users")
        .then((res)=> res.json())
        .then((json) => {
            usersJson = json.users;
        });

    yield put (receiveUsers(usersJson));
}

export function* fetchUsersSaga() {
    yield takeLatest('FETCH_USERS_SAGA', fetchUsers);
}