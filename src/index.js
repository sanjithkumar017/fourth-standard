import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.css";
import {Provider} from 'react-redux';

import App from './components/app'
import './index.css'
import configureStore from './configureStore';

const store = configureStore()


ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById("app"))

//TODO
//Login page
////Add a show hide button for password
////Unique username check button

//Lets start working on the backend
////Implement JWT
////How will forgot password work
////The token shit


//Introduction page
//Not Found page
//Work on the backend. Implement JWT


//Users are allowed to login only once a day and can play for three times only.
//We are implementing websockets for realtime happiness.

