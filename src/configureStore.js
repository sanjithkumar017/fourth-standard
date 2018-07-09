import reducer from './reducers/authUser';
import middlewares from './middlewares'
import {createStore} from 'redux'
import throttle from 'lodash/throttle'

import sagaMiddleware from './middlewares/sagas/sagaMiddleware'
import rootSaga from './middlewares/sagas';

import {loadState, saveState} from './localStorage';

const configureStore = () => {
    const persistedStore = loadState()


    const store = createStore(reducer, persistedStore, middlewares)
    console.log("Start store", store.getState());
    store.subscribe(throttle(() => {

        const FilteredState = JSON.parse(JSON.stringify(store.getState()))
        //Remove unwanted properties
        delete  FilteredState.authUser.attemptFailure
        saveState(FilteredState)
    }, 1000))

    sagaMiddleware.run(rootSaga)

    return store
}
export default configureStore;


