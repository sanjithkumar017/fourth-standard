import "regenerator-runtime/runtime";
import {call, put, takeLatest} from 'redux-saga/effects';
import {makeAuth} from "../../../utils/api";

import {setAuthedUser, setLoginFailed, VALIDATE_USER_REQUESTED} from "../../actions/authUser";


function* validateUser(action) {
    try {
        const validated = yield call(makeAuth, action.authData)
        if (validated.results.length) {
            yield put(setAuthedUser(validated.results[0]))
        } else {
            yield put(setLoginFailed())
        }

    }
    catch (e) {
        yield put(setLoginFailed())
    }
}


function* watchValidateRequested() {
    yield takeLatest(VALIDATE_USER_REQUESTED, validateUser)
}

export default watchValidateRequested