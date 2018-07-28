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
            console.log("In handleBlur", e.target.value);
            if (e && e.target.value && e.target.name) {
                this.props.setFieldValue(e.target.name, e.target.value);
                this.props.setFieldTouched(e.target.name);
            }
        }

        handleChange(e, data) {
            console.log("Hello man", e.target.value, e.target.name);
            if (e && e.target.value && e.target.name) {
                this.props.setFieldValue(e.target.name, e.target.value);
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