import React from 'react';
import {Header} from 'semantic-ui-react'
import {EnhancedForm} from '../components/forms/Login'

class SignupComponent extends React.Component {
    render() {
        //We split it into two
        return (
            <div className={"centerAllColumn majorityHeight"}>
                <div className={"centerCompleteColumn"}>
                    <Header as={'h2'} size='medium' className={"baseColor lighter"}>Sign In</Header>
                    <Header.Subheader className={"subHeaderColor"}>Hello there! Sign in and start playing and master the
                        numbers.</Header.Subheader>
                </div>
                <div className={"centerCompleteColumn"}>
                    <EnhancedForm/>
                </div>

            </div>
        )
    }
}

export default SignupComponent;