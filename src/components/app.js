import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Menu, Grid} from 'semantic-ui-react'

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
                    <Grid>
                        <Grid.Row only='tablet mobile'>
                            <Menu.Item name='sidebar' active={true}>
                                <div className={"footer"}>


                                </div>
                            </Menu.Item>

                        </Grid.Row>
                    </Grid>

                </div>
            </BrowserRouter>
        )

    }
}


export default App;
