import React from 'react';
import {Header} from 'semantic-ui-react'
import {EnhancedLoginForm} from '../components/forms/Login'

class Authentication extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formScreen: false
        }

        this.changeFormScreen = this.changeFormScreen.bind(this)
    }

    changeFormScreen(e) {
        e.preventDefault()
        console.log("Yo i am here ", this.state.formScreen);
        this.setState((prevState) => {
            return {formScreen: !prevState.formScreen}
        })
    }

    render() {
        //We split it into two
        const {formScreen} = this.state
        return (
            <div className={"centerAllColumn majorityHeight"}>
                <div className={"centerCompleteColumn"}>
                    {formScreen ? <Header as={'h2'} size='medium' className={"baseColor lighter"}>Sign Up</Header> :
                        <Header as={'h2'} size='medium' className={"baseColor lighter"}>Sign In</Header>}
                    {formScreen ?
                        <Header.Subheader className={"subHeaderColor"}>Welcome! Want to know how good your school math
                            is?</Header.Subheader> :
                        <Header.Subheader className={"subHeaderColor"}>Hello there! Sign in and start playing to master
                            the
                            numbers.</Header.Subheader>}
                </div>
                <div className={"centerCompleteColumn"}>
                    <EnhancedLoginForm/>
                    {formScreen ? <Header.Subheader className={"subHeaderColor"}>Signed Up already? Let's get you
                            <a href={"#"}
                               onClick={this.changeFormScreen}> Signed
                                In.</a></Header.Subheader> :
                        <Header.Subheader className={"subHeaderColor"}>New here? Let's get you
                            <a href={"#"}
                               onClick={this.changeFormScreen}> Signed
                                Up.</a></Header.Subheader>}
                </div>

            </div>
        )
    }
}

export default Authentication;