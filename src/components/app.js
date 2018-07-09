import React from 'react';
import {BrowserRouter} from 'react-router-dom'

import MainComponent from './MainComponent'

const URL_BASENAME = "fourthstandard"

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <BrowserRouter basename={URL_BASENAME}>
                <div className={"fullHeight"}>
                    <MainComponent/>
                </div>
            </BrowserRouter>
        )

    }
}


export default App;
