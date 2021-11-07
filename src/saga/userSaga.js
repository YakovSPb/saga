import { put, takeEvery, call } from 'redux-saga/effects'
import axios from 'axios';
import { setUsers, FETCH_USERS } from '../store/userReducer';

const fetchUsersFromApi = () => axios.get('https://jsonplaceholder.typicode.com/users?_limit=10)').then(res=> res.data);

function* fetchUserWorker() {
    try{
        const data = yield call(fetchUsersFromApi);
        yield put(setUsers(data))
    } catch(err) {
        console.error(err)
    }
}

export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserWorker)
}