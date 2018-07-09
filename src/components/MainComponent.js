import React from 'react';
import {Grid, Icon} from 'semantic-ui-react'
import {Route, Switch} from 'react-router-dom'


import MenuComponent from './MenuComponent'
import IntroductionComponent from '../screens/IntroductionComponent'
import SignupComponent from '../screens/SignupComponent'
import GameComponent from "../screens/GameComponent";


class MainComponent extends React.Component {
    render() {
        //We split it into two
        return (
            <Grid columns={2} padded stackable className={"baseLayer fullHeight "}>
                <Grid.Column width={12} className={"game-content fullHeight"}>
                    <div className={"upperLayer fullHeight"}>
                        <MenuComponent/>
                        <div className={"centerComplete majorityHeight"}>
                            <Switch>
                                <Route exact path={"/"} component={GameComponent}/>
                                <Route path={"/introduction"} component={IntroductionComponent}/>
                                <Route path={"/signup"} component={SignupComponent}/>

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