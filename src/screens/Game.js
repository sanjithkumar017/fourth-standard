import React from 'react';
import {Header} from 'semantic-ui-react'

class Game extends React.Component {
    render() {
        //We split it into two
        return (
            <div>
                <Header size={"large"}>
                    Hello there
                </Header>
            </div>
        )
    }
}

export default Game;