import React from 'react';
import {Button, Form, Grid} from 'semantic-ui-react';

class SignUpComponent extends React.Component {
    constructor(props) {
        super(props)
    }

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
        console.log("this is errors and touched ", errors, touched);
        const {username, password, confirmPassword} = values
        return (
            <Grid centered={true} className={"gridWidth"}>
                <Grid.Column mobile={12} tablet={12} computer={14}>
                    <Form>
                        <Form.Field>
                            <input placeholder='Username' className={"borderless"} name={'username'}
                                   value={username}
                                   onBlur={handleBlur}
                                   onChange={handleChange}/>
                        </Form.Field>
                        {touched['username'] && errors['username'] ?
                            <p className={"centerAll errorColor"}>{errors['username']}</p> : null}
                        <Form.Field>
                            <input placeholder='Password' type={"password"} className={"borderless"} name={'password'}
                                   value={password}
                                   onBlur={handleBlur}
                                   onChange={handleChange}/>
                        </Form.Field>
                        {touched['password'] && errors['password'] ?
                            <p className={"centerAll errorColor"}>{errors['password']}</p> : null}
                        <div className={"centerAll"}>
                            <Button className={"sign-inBtn baseColorDarker"} onClick={handleSubmit}>Sign Up</Button>
                        </div>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}

export default SignUpComponent