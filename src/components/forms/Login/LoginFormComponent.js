import React from 'react';
import {Button, Checkbox, Form} from 'semantic-ui-react'

class LoginFormComponent extends React.Component {
    render() {
        const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
        } = this.props;
        const {username, password} = values
        return (
            <Form>
                <Form.Field>
                    <input placeholder='Username' className={"borderless"} value={username}/>
                </Form.Field>
                <Form.Field>
                    <input placeholder='Password' className={"borderless"} value={password}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions'/>
                </Form.Field>
                <div className={"centerAll"}>
                    <Button onClick={handleSubmit}>Proceed</Button>
                </div>
            </Form>
        )
    }
}

export default LoginFormComponent