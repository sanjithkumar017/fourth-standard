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
//Finish the layout. Set up routing.
//Set up the counter for 5 seconds buffer and 60 seconds test
//Show as many tests as possible

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

//We are implementing websockets for realtime happiness.

