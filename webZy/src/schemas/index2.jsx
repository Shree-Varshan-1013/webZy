import * as Yup from 'yup';

export const signInSchema = Yup.object({
    // email:Yup.string().email().required("Please Enter the Email !"),
    userName:Yup.string().required("Please Enter the Username !"),
    userPassword:Yup.string().min(6).max(15).required("Please Enter the Password !"),
})

