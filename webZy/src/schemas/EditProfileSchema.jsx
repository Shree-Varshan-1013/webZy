import * as Yup from 'yup';

export const EditProfileSchema = Yup.object({
    email: Yup.string().email("Please enter a valid email address").required("Email is required"),
    operatorName: Yup.string().required("Please enter the operator name!"),
    location: Yup.string().required("Please enter the location!"),
});
