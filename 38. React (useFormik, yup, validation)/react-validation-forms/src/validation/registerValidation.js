import * as Yup from "yup";

// Minimum five characters, at least one letter and one number:
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;

export const registerSchema = Yup.object().shape({
    name: Yup.string().min(3).max(10).required(),
    email: Yup.string().email().required('email is required'),
    age: Yup.number().positive().integer().required(),
    password: Yup.string().matches(passwordRegex, 'min 5 characters, at least one letter and one number').required(),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'password does not match').required(),
    acceptTerms: Yup.boolean().oneOf([true], 'you have to accept terms of use'),
    position: Yup.string().oneOf(['developer','designer','marketing','hr','other',null], 'invalid position')
});