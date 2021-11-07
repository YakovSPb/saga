import { put, takeEvery } from 'redux-saga/effects'
import { ASYNC_INCREMENT, ASYNC_DECREMENT, incrementCreator, decrementCreator } from '../store/countReducer'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
    try{
        yield delay(1000)
        yield put(incrementCreator())
    } catch(err) {
        console.log(err)
    }
}

function* decrementWorker() {
    try{
        yield delay(1000)
        yield put(decrementCreator())
    } catch(err) {
        console.log(err)
    }

}

export function* countWatcher() {
    yield takeEvery(ASYNC_INCREMENT, incrementWorker)
    yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}