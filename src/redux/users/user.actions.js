export const requestUsers =() => ({
    type: 'REQUEST_USERS'
});

export const receiveUsers=(users) => ({
    type: 'RECEIVE_USERS',
    payload: users
});