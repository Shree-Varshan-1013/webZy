import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useFormik } from 'formik';
import { detailSchema } from '../../schemas/detailSchema';
import { motion } from 'framer-motion'

const EditProfile = () => {

    const navigate = useNavigate();

    const initialData = {
        mobileNumber: "",
        operatorName: "",
        location: ""
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialData,
        validationSchema: detailSchema,
        onSubmit: (values, action) => {
            console.log(values);
            eventPlan();
            action.resetForm();
        },
    });

    const eventPlan = () => {
        navigate(`/mobile-recharge/${values.operatorName}`);
    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
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
                            <label className="sr-only font-anuphan">Mobile Number</label>
                            <div className="relative">
                                <input
                                    name="mobileNumber"
                                    type="text"
                                    value={values.mobileNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                    placeholder="Enter mobile number"
                                />
                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#9ca3af" d="m21 15.46l-5.27-.61l-2.52 2.52a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z" /></svg>
                                </span>
                                {errors.mobileNumber && touched.mobileNumber && <div className="text-red-600 text-xs">{errors.mobileNumber}</div>}
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
                        <div>
                            <label className="sr-only">About</label>
                            <div className="relative">
                                <input
                                    name="about"
                                    value={values.about}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    className="dark:bg-slate-900 w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan"
                                    placeholder="Describe yourself"
                                />
                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#9ca3af" d="M11.427 16.615v-6.042c0-.997-.444-1.669-1.541-1.669c-.906 0-1.754.614-2.159 1.228v6.483H5.704v-6.042c0-.997-.423-1.669-1.523-1.669c-.905 0-1.734.633-2.158 1.228v6.483H0V7.351h2.023v1.247C2.428 8.04 3.642 7.12 5.068 7.12c1.386 0 2.235.69 2.543 1.688c.52-.825 1.754-1.688 3.16-1.688c1.697 0 2.68.92 2.68 2.8v6.694zM24 12.163c0-2.925-1.788-5.042-4.604-5.042c-2.777 0-4.759 2.174-4.759 4.869c0 2.945 2.079 4.888 4.913 4.89c1.476 0 2.855-.482 3.807-1.368l-.932-1.328c-.68.673-1.747 1.04-2.68 1.04c-1.768 0-2.815-1.174-2.971-2.56H24zm-7.245-.943c.077-1.116.893-2.444 2.622-2.444c1.845 0 2.602 1.347 2.66 2.444z" /></svg>
                                </span>
                                {errors.about && touched.about && <div className="text-red-600 text-xs">{errors.about}</div>}
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