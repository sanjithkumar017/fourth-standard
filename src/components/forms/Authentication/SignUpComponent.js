import React from 'react';
import {Button, Form, Grid, Input, Icon} from 'semantic-ui-react';

class SignUpComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'password',
            icon: 'eye' //eye slash
        }

        this.handleTypeChange = this.handleTypeChange.bind(this)
    }

    handleTypeChange(e, data) {
        this.setState((prevState) => {
            if (prevState.type === 'password') {
                return {type: 'input', icon: 'eye slash'}
            }
            else {
                return {type: 'password', icon: 'eye'}
            }
        })
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

        const {icon, type} = this.state
        console.log("this is errors and touched ", errors, touched);
        const {username, password} = values
        return (
            <Grid centered={true} className={"gridWidth"}>
                <Grid.Column mobile={12} tablet={12} computer={14}>
                    <Form>
                        <Form.Field>
                            <Input icon='user' placeholder='Username' className={"borderless"} name={'username'}
                                   value={username}
                                   onBlur={handleBlur}
                                   onChange={handleChange}/>
                        </Form.Field>
                        {touched['username'] && errors['username'] ?
                            <p className={"centerAll errorColor"}>{errors['username']}</p> : null}
                        <Form.Field>
                            <Input icon={<Icon name={icon} link onClick={this.handleTypeChange}/>}
                                   placeholder='Password' type={type} className={"borderless"}
                                   name={'password'}
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