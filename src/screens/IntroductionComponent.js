import React from 'react';
import {Message, Image} from 'semantic-ui-react'

class IntroductionComponent extends React.Component {
    render() {
        //We split it into two
        return (

        <Message>
            <Message.Header>Changes in Service</Message.Header>
            <p>
                We updated our privacy policy here to better service our customers. We recommend reviewing the
                changes.
                {/*<Image src='/assets/landing/riley-mccullough-225427-unsplash.jpg' fluid className={"LandingLogo"}/>*/}
            </p>
        </Message>
        )
    }
}

export default IntroductionComponent;