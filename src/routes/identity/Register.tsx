import { MouseEvent, useContext, useState } from "react";
import RegisterFormView from "./RegisterFormView";
import { IRegisterData } from "../../dto/IRgeisterData";
import { IdentityService } from "../../services/IdentityService";
import { JwtContext } from "../Root";

const Register = () => {
    // Values comes from state.
    // Use state is a hook, need to import it.

    // first we created form, how to get data from there
    const [values, setInput] = useState({
        password: "",
        confirmPassword: "",
        email: "",
        firstName: "",
        lastName: "",
    } as IRegisterData);

    const [validationErrors, setValidationErrors] = useState([] as string[]);  // It's string array

    const handleChange = (target:  EventTarget & HTMLInputElement) => {
        // debugger;
        // console.log(target.name, target.value, target.type)
        setInput({ ...values, [target.name]: target.value });
    }

    // JwtContext holds 2 things: response itself and method how to update response
    const {jwtResponse, setJwtResponse} = useContext(JwtContext);

    const identityService = new IdentityService();

    const onSubmit = async (event: MouseEvent) => {
        console.log('onSubmit', event);
        event.preventDefault();

        // Now this part where we will send it to server, get the data back and see what happens
        if (values.firstName.length == 0 || values.lastName.length == 0 || values.email.length == 0 || values.password.length == 0 || values.password != values.confirmPassword) {
            setValidationErrors(["Bad input values!"]);
            return;
        }
        
        // remove errors
        setValidationErrors([]);

        // register the user, get jwt and refreshtoken
        var jwtData = await identityService.register(values);

        if (jwtData == undefined) {
            // TODO: get error info
            setValidationErrors(["no jwt"]);
            return;
        } 

        if (setJwtResponse) setJwtResponse(jwtData);

    }

    return (
        // Return only this. Need to pass these values to form.
        <RegisterFormView values={values} handleChange={handleChange} onSubmit={onSubmit} validationErrors={validationErrors}/>
    );
}

export default Register;