import React from 'react';
import {Grid} from 'semantic-ui-react'

class BackgroundComponent extends React.Component {
    render() {
        //We split it into two
        return (
            <Grid columns={2} padded={true} className={"background-layout"}>
                <Grid.Column width={12} className={"left-content"}>

                </Grid.Column>
                <Grid.Column width={4} className={"right-content"}>

                </Grid.Column>
            </Grid>
        )
    }
}

export default BackgroundComponent;