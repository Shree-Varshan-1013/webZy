import * as Yup from 'yup';

export const feedbackSchema = Yup.object({
    email:Yup.string().email().required("Please Enter your name !"),
    name:Yup.string().min(5).required("Please Enter the email !"),
    comment:Yup.string().min(10).max(30).required("Please Enter your valuable comment !"),
})