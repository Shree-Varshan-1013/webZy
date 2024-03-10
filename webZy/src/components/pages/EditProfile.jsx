import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { motion } from 'framer-motion'
import { Toaster } from 'sonner';
import CustomerService from '../../services/CustomerService';
import { useSelector } from 'react-redux';
import { EditProfileSchema } from './../../schemas/EditProfileSchema';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { addUserDetails } from '../../config/GlobalSlice';

const EditProfile = () => {

    const navigate = useNavigate();

    const { accessToken, userDetails } = useSelector(state => state.global);

    const dispatch = useDispatch();

    const initialData = {
        email: "",
        operatorName: "",
        location: ""
    }

    useEffect(() => {
        fetchUserData();
    }, [])

    const [data, setData] = useState(initialData);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setValues } = useFormik({
        initialValues: initialData,
        validationSchema: EditProfileSchema,
        onSubmit: (values, action) => {
            console.log(values);
            eventPlan();
        },
    });

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        const res = await CustomerService.getUserData(userDetails.username, accessToken);
        console.log(res);
        const tar = {
            "email": res.data.email,
            "operatorName": res.data.operatorName,
            "location": res.data.location
        }
        setValues(tar);
    }
    const eventPlan = async () => {
        console.log(values);
        try {
            toast.loading('Updating your profile.....');
            const res = await CustomerService.UpdateUserData(userDetails.username, values.email, values.operatorName, values.location, accessToken);
            console.log(res);

            if (res.status === 200) {
                dispatch(addUserDetails(res.data));
                setTimeout(() => {
                    toast.success("Successfully updated your profile !");
                    setTimeout(() => {
                        navigate("/profile");
                    }, 2000); 
                }, 2000); 
            }
        }
        catch (err) {
            toast.error('Something went wrong !');
            console.log(err);
        }
    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Toaster position="top-center" theme="light" visibleToasts={1} richColors />
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 dark:bg-slate-900 font-anuphan" style={{ backgroundImage: "url(/img/bottom3.svg)", backgroundSize: "cover" }}>
                <div className="mx-auto max-w-lg pt-10">
                    <h1 className="text-center text-2xl font-bold font-anuphan dark:text-purple3 sm:text-3xl">Edit your profile </h1>
                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500 dark:text-white font-anuphan">
                        Please fill up the below details
                    </p>
                    <form onSubmit={handleSubmit} className="mb-0 space-y-4 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8">
                        <div>
                            <label className="sr-only font-anuphan">Email</label>
                            <div className="relative">
                                <input
                                    name="email"
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                    placeholder="Enter the email"
                                />
                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#9ca3af" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44" /></svg>
                                </span>
                                {errors.email && touched.email && <div className="text-red-600 text-xs">{errors.email}</div>}
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Operator</label>
                            <div className="relative">
                                <select
                                    name="operatorName"
                                    value={values.operatorName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan appearance-none dark:bg-slate-900 dark:text-white"
                                >
                                    <option value="" disabled>Select Operator</option>
                                    <option value="Airtel">Airtel</option>
                                    <option value="Bsnl">Bsnl</option>
                                    <option value="Jio">Jio</option>
                                    <option value="Vi">Vi</option>
                                </select>
                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><g fill="#9ca3af"><path d="M5 4.5a.5.5 0 0 1 .5-.5h2v2H5zM8.5 6V4h2a.5.5 0 0 1 .5.5V6zM5 7h6v2H5zm3.5 3H11v1.5a.5.5 0 0 1-.5.5h-2zm-1 0v2h-2a.5.5 0 0 1-.5-.5V10z" /><path d="M3.5 0A1.5 1.5 0 0 0 2 1.5v13A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5V3.414a1.5 1.5 0 0 0-.44-1.06L11.647.439A1.5 1.5 0 0 0 10.586 0zm2 3h5A1.5 1.5 0 0 1 12 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 11.5v-7A1.5 1.5 0 0 1 5.5 3" /></g></svg>
                                </span>
                                {errors.operatorName && touched.operatorName && <div className="text-red-600 text-xs">{errors.operatorName}</div>}
                            </div>
                        </div>
                        <div>
                            <label className="sr-only">Location</label>
                            <div className="relative">
                                <input
                                    name="location"
                                    value={values.location}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    className="dark:bg-slate-900 w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan"
                                    placeholder="Enter the location"
                                />
                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#9ca3af" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" /></svg>
                                </span>
                                {errors.location && touched.location && <div className="text-red-600 text-xs">{errors.location}</div>}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="block w-full text-sm font-medium rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300"
                        >
                            Confirm
                        </button>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default EditProfile