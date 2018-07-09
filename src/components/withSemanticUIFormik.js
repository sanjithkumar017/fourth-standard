import React from 'react'
import {withFormik} from "formik";

export const withSemanticUIFormik = props => WrappedComponent => {


    return withFormik(props)(class extends React.Component {
        constructor(props) {
            super(props)
            this.handleBlur = this.handleBlur.bind(this)
            this.handleChange = this.handleChange.bind(this)
        }

        handleBlur(e, data) {
            if (data && data.name) {
                this.props.setFieldValue(data.name, data.value);
                this.props.setFieldTouched(data.name);
            }
        }

        handleChange(e, data) {
            if (data && data.name) {
                this.props.setFieldValue(data.name, data.value);
            }
        }

        render() {
            return <WrappedComponent {...this.props}
                                     handleBlur={this.handleBlur}
                                     handleChange={this.handleChange}
            />
        }
    })
}