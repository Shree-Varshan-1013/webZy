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
        userName: "",
        userPassword: "",
    };

    const initialUserData = {
        "userFirstName": "",
        "userLastName": "",
        "userName": ""
    };

    const [userData, setUser] = useState(initialUserData);

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
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
        setTimeout(()=>{
            toast.success('done');
        }, 3000);
    };

    const eventLogin = async () => {

        try {
            const response = await Authentication.login(values.userName, values.userPassword);

            const user = response.data.user;
            const token = response.data.jwtToken;
            const role = response.data.user.role[0].roleName;

            console.log(user)
            console.log(token)
            console.log(role)

            setUser({
                "userFirstName": user.userFirstName,
                "userLastName": user.userLastName,
                "userName": user.userName,
            });

            console.log(userData)

            getToast();

            setTimeout(() => {
                toast.success("Successfully Signed In !")
                dispatch(addUserDetails(userData));
                dispatch(toggleLogin());
                dispatch(addRole(role));
                dispatch(addToken(token));
                navigate("/");
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
            <div className='m-10'>
            <Toaster position='top-right' />
                <div className='flex max-w-lg mx-auto overflow-hidden bg-white rounded-lg lg:space-x-8 lg:max-w-5xl'>
                    <div className="items-center hidden lg:flex lg:w-1/2">
                        <img src="/img/login.svg" width="85%" />
                    </div>
                    <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                        <form onSubmit={handleSubmit}>
                            <h2 className='text-2xl text-center text-gray-700 font-semibold'>Welcome back</h2>
                            <p className='mt-2 text-xl text-center text-gray-600'>We are <span className='text-purple'>Happy </span>to see you back</p>
                            <div className=''>
                                <div className="mt-1">
                                    <label className="block text-md mb-2 text-gray-700">
                                        Username
                                    </label>
                                    <input
                                        id="email"
                                        type="text"
                                        name="userName"
                                        value={values.userName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className='w-full py-2 rounded-lg border border-grey-200 text-grey-darker focus:border-primary focus:outline-none focus:ring focus:ring-purple2 focus:ring-opacity-20 pl-4'
                                        placeholder='Enter Username'
                                    />
                                    {errors.userName && touched.userName ? (
                                        <p style={{ color: "red" }}>{errors.userName}</p>
                                    ) : null}
                                </div>
                                <div className='block mt-3'>
                                    <label className="block text-md mb-2 text-gray-700">
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
                                            className='rounded-lg border border-gray-200 text-grey-darker w-full py-2 focus:border-primary focus:outline-none focus:ring focus:ring-purple2 focus:ring-opacity-20 pl-4'
                                            placeholder='Enter password' />
                                    </div>
                                    {errors.userPassword && touched.userPassword ? (
                                        <p style={{ color: "red" }}>{errors.userPassword}</p>
                                    ) : null}
                                </div>
                                <div className='mb-5 text-gray-500'>
                                    <p>Forget password ?</p>
                                </div>
                                <div>
                                    <button type="submit" className='w-full bg-purple2 py-2 px-4 rounded-lg hover:bg-purple text-white'>Sign in</button>
                                </div>
                                <div className='flex items-center justify-between mt-4'>
                                    <span className='w-1/5 border'></span>
                                    <a className='text-sm font-medium text-gray-500'>CREATE ACCOUNT</a>
                                    <span className='w-1/5 border'></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default SignIn;