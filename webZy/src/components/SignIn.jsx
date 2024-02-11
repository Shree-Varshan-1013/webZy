import { useState } from 'react'
import { motion } from 'framer-motion';
import { useFormik } from "formik";
import { signInSchema } from "../schemas/index2";
import Swal from "sweetalert2";
import Authentication from '../services/auth/Authentication';
import { Toaster, toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { addUserDetails, addToken, addRole, toggleLogin } from '../config/GlobalSlice';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();


    const initialState = {
        "userName":"",
        "userPassword":"",
    }

    const { values, errors, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialState,
            validationSchema: signInSchema,
            onSubmit: (values, action) => {
                console.log(values);
                eventLogin();
                action.resetForm();
            },
        });

    const getToast = () => {
        // toast('My toast message', {
        //     action: {
        //         label: "Close",
        //         onClick: () => {
        //             console.log("clicked");
        //         },
        //     }
        // });
        toast.loading('Validating.....');
        setTimeout(() => {
            toast.success('done');
        }, 3000);
    };

    const eventLogin = async () => {

        try {
            const response = await Authentication.login(values.userName, values.userPassword);

            const user = response.data.user;
            const token = response.data.jwtToken;
            const role = response.data.user.role[0].roleName;

            getToast();

            setTimeout(() => {
                toast.success("Successfully Signed In !")
                dispatch(addUserDetails(user));
                dispatch(toggleLogin());
                dispatch(addRole(role));
                dispatch(addToken(token));

                if (role === "ADMIN") {
                    navigate("/admin-dash");
                }
                else {
                    navigate("/");
                }
            }, 2000);
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Bad Credentials !",
            });
        }

    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className='block dark:bg-slate-900 sm:h-screen backdrop-blur-lg' style={{ backgroundImage: "url(/img/trio-new.svg)", backgroundSize: "cover" }}>
                <Toaster position='top-right' />
                <div className='flex lg:justify-between w-full overflow-hidden bg-white dark:bg-slate-900 border-none p-10 backdrop-blur-lg' style={{ backgroundImage: "inherit", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className="items-center hidden lg:flex lg:w-[40%] justify-center">
                        <img src="/img/login-lap.svg" width="85%" />
                    </div>
                    <div className='w-full px-6 py-8 md:px-8 lg:w-1/2 lg:flex justify-center items-center'>
                        <div className='lg:w-[75%]'>
                            <form onSubmit={handleSubmit}>
                                <h2 className='text-2xl text-center text-gray-700 font-semibold font-anuphan dark:text-white'>Welcome back</h2>
                                <p className='mt-2 text-xl text-center text-gray-600 font-anuphan dark:text-white'>We are <span className='text-purple font-anuphan'>Happy </span>to see you back</p>
                                <div className=''>
                                    <div className="mt-1">
                                        <label className="block text-md mb-2 text-gray-700 font-anuphan dark:text-white">
                                            Username or Email
                                        </label>
                                        <input
                                            id="email"
                                            type="text"
                                            name="userName"
                                            value={values.userName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className='dark:bg-slate-900 dark:text-white font-anuphan w-full py-2 rounded-lg border border-grey-200 text-grey-darker focus:outline-none focus:border-purple3 focus:ring focus:ring-purple3 focus:ring-opacity-20 pl-4'
                                        />
                                    </div>
                                    <div className='block mt-3'>
                                        <label className="block text-md mb-2 text-gray-700 font-anuphan dark:text-white">
                                            Password
                                        </label>
                                        <div className='mb-1'>
                                            <input
                                                id="password"
                                                type="password"
                                                name="userPassword"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.userPassword}
                                                className='dark:bg-slate-900 dark:text-white font-anuphan w-full py-2 rounded-lg border border-grey-200 text-grey-darker focus:outline-none focus:border-purple3 focus:ring focus:ring-purple3 focus:ring-opacity-20 pl-4'
                                            />
                                        </div>
                                    </div>
                                    <div className='mb-5 text-gray-500 font-anuphan dark:text-white'>
                                        <p>Forget password ?</p>
                                    </div>
                                    <button className="flex items-center justify-center mt-auto rounded w-full py-2.5 text-center overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300 font-anuphan dark:text-white">Sign In
                                    </button>
                                    <div className='flex items-center justify-between mt-4'>
                                        <span className='w-1/5 border'></span>
                                        <a className='text-sm font-medium text-gray-500 font-anuphan dark:text-white cursor-pointer' onClick={() => navigate("/sign-up ")}>CREATE ACCOUNT</a>
                                        <span className='w-1/5 border'></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default SignIn;