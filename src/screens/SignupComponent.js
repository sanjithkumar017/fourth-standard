import React from 'react';
import {Button, Checkbox, Form, Segment, Header, Divider} from 'semantic-ui-react'

class SignupComponent extends React.Component {
    render() {
        //We split it into two
        return (
            <div>
                <Segment raised size={"huge"}>
                    <Header size='large'>Log-In</Header>
                    <Divider/>
                    <Form>

                        <Form.Field>
                            <input placeholder='Username' className={"borderless"}/>
                        </Form.Field>
                        <Form.Field>
                            <input placeholder='Password' className={"borderless"}/>
                        </Form.Field>
                        <Form.Field>
                            <Checkbox label='I agree to the Terms and Conditions'/>
                        </Form.Field>
                        <div className={"centerAll"}>
                            <Button>Proceed</Button>
                        </div>
                    </Form>
                </Segment>
            </div>
        )
    }
}

export default SignupComponent;