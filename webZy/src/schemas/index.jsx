import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    firstName:Yup.string().min(6).max(15).required("Please Enter the First Name !"),
    lastName:Yup.string().min(1).max(2).required("Please Enter the Last Name !"),
    email:Yup.string().email().required("Please Enter the valid Email !"),
    password:Yup.string().min(6).max(15).required("Please enter the password !"),
    confirmPassword:Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm password is required !'),
    dob:Yup.date().required("Please select the date !"),
    gender:Yup.string().min(4).max(15).required("Please enter the gender !"),
    phoneNumber:Yup.string().matches(/^[0-9]{10}$/, 'Phone number is not valid').required("Please enter the phone number !"),
    address:Yup.string().min(15).required("Please enter the address !"),
    location:Yup.string().min(4).required("Please Enter the location !"),
    username:Yup.string().matches(/^[a-zA-Z0-9_]{6,16}$/).min(6).required("Please enter the username !"),
})  