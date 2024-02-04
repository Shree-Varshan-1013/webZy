import * as Yup from 'yup';

export const ServiceSchema = Yup.object({
    category:Yup.string().min(3).required("Please Enter the Category !"),
    serviceProviding:Yup.string().min(6).required("Please Enter the Service that you are providing!"),
    experience:Yup.string().min(1).required("Please Enter the Experience!"),
    workingHour:Yup.string().min(2).required("Please Enter the working Hours !"),
    price:Yup.number().min(3).required("Please Enter the Price !"),
})