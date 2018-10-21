import React from 'react';
import {Message, Select, Form} from 'semantic-ui-react'

const options = [
    {key: 'm', text: 'Male', value: 'male'},
    {key: 'f', text: 'Female', value: 'female'},
    {key: 'e', text: 'rtr', value: 'rtr'},
    {key: 'c', text: 'cdd', value: 'cdd'}
]

class Introduction extends React.Component {
    render() {
        //We split it into two
        return (

            <Message>
                <Message.Header>Changes in Service</Message.Header>
                <p>
                    We updated our privacy policy here to better service our customers. We recommend reviewing the
                    changes.

                </p>

                <Form>
                    <Form.Field control={Select} search={true} label='Gender' options={options} placeholder='Gender'/>
                </Form>
            </Message>
        )
    }
}

export default Introduction;