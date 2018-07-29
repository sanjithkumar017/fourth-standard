import React from 'react';
import {Grid, Icon} from 'semantic-ui-react'
import {Route, Switch} from 'react-router-dom'


import MenuComponent from './MenuComponent'
import Introduction from '../screens/Introduction'
import Authentication from '../screens/Authentication'
import Game from "../screens/Game";


class MainComponent extends React.Component {
    render() {
        //We split it into two
        return (
            <Grid columns={2} padded stackable className={"baseLayer fullHeight "}>
                <Grid.Column width={12} className={"game-content fullHeight"}>
                    <div className={"upperLayer fullHeight"}>
                        <MenuComponent/>
                        <div className={"majorityHeight"}>
                            <Switch>
                                <Route exact path={"/"} component={Game}/>
                                <Route path={"/introduction"} component={Introduction}/>
                                <Route path={"/signup"} component={Authentication}/>

                            </Switch>
                        </div>
                    </div>

                </Grid.Column>
                <Grid.Column width={4} className={"score-content centerAll"}>
                    <Icon name={"trophy"} size={"massive"}/>
                </Grid.Column>
            </Grid>
        )
    }
}

export default MainComponent;