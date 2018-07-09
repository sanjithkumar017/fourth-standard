import React from 'react';
import {Button, Checkbox, Form, Segment, Header, Divider} from 'semantic-ui-react'

class LoginFormComponent extends React.Component {
    render() {
        return (
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
        )
    }
}

export default LoginFormComponent