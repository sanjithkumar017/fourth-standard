import React from 'react';
import {Message} from 'semantic-ui-react'

class SignupComponent extends React.Component {
    render() {
        //We split it into two
        return (
            <Message>
                <Message.Header>Signup</Message.Header>
                <p>
                    Give up your Card number and the pin, Please :)

                </p>
            </Message>
        )
    }
}

export default SignupComponent;