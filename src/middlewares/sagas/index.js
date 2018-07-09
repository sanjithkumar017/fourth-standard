import {all} from 'redux-saga/effects'
import watchValidateRequested from './authUser';


export default function* rootSaga() {
    yield all([watchValidateRequested()])

}