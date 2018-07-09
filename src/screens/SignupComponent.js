import React from 'react';
import {Segment, Header, Divider} from 'semantic-ui-react'
import {EnhancedForm} from '../components/forms/Login'

class SignupComponent extends React.Component {
    render() {
        //We split it into two
        return (
            <div>
                <Segment raised size={"huge"}>
                    <Header size='large'>Log-In</Header>
                    <Divider/>
                    <EnhancedForm/>
                </Segment>
            </div>
        )
    }
}

export default SignupComponent;