import SignUpComponent from "./SignUpComponent";
import {withSemanticUIFormik} from "../../withSemanticUIFormik";
import * as Yup from "yup";


const SignUpEnhanced = withSemanticUIFormik({
    enableReinitialize: false,
    mapPropsToValues: (props) => {
        console.log("this is props in mapPropsToValues", props);
        return {
            username: '',
            password: '',
        }

    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Username is required.'),
        password: Yup.string().min(6, 'Password is too short.').required('Password is required.'),
    }),
    handleSubmit: (values, {props, setSubmitting}) => {
        console.log("this is values", values);
    },
    displayName: 'LoginForm', // helps with React DevTools
})(SignUpComponent);

export default SignUpEnhanced