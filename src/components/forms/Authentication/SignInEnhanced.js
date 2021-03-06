import SignInComponent from "./SignInComponent";
import {withSemanticUIFormik} from "../../withSemanticUIFormik";
import * as Yup from "yup";


const SignInEnhanced = withSemanticUIFormik({
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
})(SignInComponent);

export default SignInEnhanced