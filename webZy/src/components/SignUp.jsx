import { motion } from 'framer-motion'
import { Toaster, toast } from 'sonner';
import { signUpSchema } from '../schemas';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import Authentication from '../services/auth/Authentication';
import { useSelector } from 'react-redux';
const SignUp = () => {

    const navigate = useNavigate();

    const { isDark } = useSelector((state) => state.global);

    const initialState = {
        "userName": "",
        "email": "",
        "mobileNumber": "",
        "userPassword": "",
        "confirmPassword": "",
        "location": "",
    };


    const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
        useFormik({
            initialValues: initialState,
            validationSchema: signUpSchema,
            onSubmit: (values, action) => {
                console.log(values);
                eventRegister(values);
                action.resetForm();
            },
        });

    const eventRegister = async (values) => {
        try {
            const data = {
                userName: values.userName,
                email: values.email,
                userPassword: values.userPassword,
                mobileNumber: values.mobileNumber,
                location: values.location,
            }
            console.log(values);
            const res = await Authentication.register(data);
            console.log(res);

            toast.loading('Registering Please wait !');
            setTimeout(() => {
                toast.success("Successfully Registered !", {
                    icon: <FaCheck style={{ color: "green", fontSize: "1rem" }} />
                });
                setTimeout(() => {
                    navigate('/webzy/sign-in');
                }, 2000);
            }, 2000);
        }
        catch (err) {
            console.log(err);
            toast.loading('Registering Please wait !');
            setTimeout(() => {
                toast.error('Email or Username already Exists !');
            }, 4000);
        }
    }
    const imageUrl = isDark ? "/img/falls.svg" : "/img/falls-light.svg";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className='dark:bg-slate-900' style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}>
                <Toaster position="top-center" theme="light" visibleToasts={1} richColors />
                <div className='flex max-w-lg lg:justify-between mx-auto overflow-hidden bg-white dark:bg-slate-900 rounded-lg lg:space-x-8 lg:max-w-5xl' style={{ background: "inherit" }}>
                    <div className="items-center hidden lg:flex lg:w-[40%] justify-center">
                        <img src="/img/welcome.svg" width="85%" />
                    </div>
                    <div className='w-full px-6 py-[80px] md:px-8 lg:w-1/2 lg:flex lg:justify-center lg:items-center'>
                        <div className='lg:w-[80%] '>
                            <form onSubmit={handleSubmit}>
                                <h2 className='text-2xl text-center text-gray-700 font-semibold font-anuphan dark:text-white'>Welcome</h2>
                                <p className='mt-2 text-xl text-center text-gray-600 font-anuphan dark:text-white'>Join <span className='text-purple font-anuphan'>Webzy </span>community</p>
                                <div className=''>
                                    <div className="mt-1">
                                        <label className="block text-md mb-2 text-gray-700 dark:text-white font-anuphan">
                                            UserName
                                        </label>
                                        <input
                                            id="userName"
                                            type="text"
                                            name="userName"
                                            value={values.userName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className='dark:bg-slate-900 dark:text-white font-anuphan w-full py-2 rounded-lg border border-grey-200 text-grey-darker focus:outline-none focus:border-purple3 focus:ring focus:ring-purple3 focus:ring-opacity-20 pl-4'
                                        />
                                    </div>
                                    {errors.userName && touched.userName ? (<div className='text-red-500 text-sm font-anuphan'>{errors.userName}</div>) : null}
                                    <div className='block mt-3'>
                                        <label className="block text-md mb-2 text-gray-700 dark:text-white font-anuphan">
                                            E-mail
                                        </label>
                                        <div className='mb-1'>
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                className='dark:bg-slate-900 dark:text-white font-anuphan w-full py-2 rounded-lg border border-grey-200 text-grey-darker focus:outline-none focus:border-purple3 focus:ring focus:ring-purple3 focus:ring-opacity-20 pl-4'
                                            />
                                        </div>
                                        {errors.email && touched.email ? (<div className='text-red-500 text-sm font-anuphan'>{errors.email}</div>) : null}
                                    </div>
                                    <div className='block mt-3'>
                                        <label className="block text-md mb-2 text-gray-700 dark:text-white font-anuphan">
                                            Mobile Number
                                        </label>
                                        <div className='mb-1'>
                                            <input
                                                id="mobileNumber"
                                                type="text"
                                                name="mobileNumber"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.mobileNumber}
                                                className='dark:bg-slate-900 dark:text-white font-anuphan w-full py-2 rounded-lg border border-grey-200 text-grey-darker focus:outline-none focus:border-purple3 focus:ring focus:ring-purple3 focus:ring-opacity-20 pl-4'
                                            />
                                        </div>
                                        {errors.mobileNumber && touched.mobileNumber ? (<div className='text-red-500 text-sm font-anuphan'>{errors.mobileNumber}</div>) : null}
                                    </div>
                                    <div className='block mt-3'>
                                        <label className="block text-md mb-2 text-gray-700 dark:text-white font-anuphan">
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
                                        {errors.userPassword && touched.userPassword ? (<div className='text-red-500 text-sm font-anuphan'>{errors.userPassword}</div>) : null}
                                    </div>
                                    <div className='block mt-3 mb-5'>
                                        <label className="block text-md mb-2 text-gray-700 dark:text-white font-anuphan">
                                            Confirm Password
                                        </label>
                                        <div className='mb-1'>
                                            <input
                                                id="confirmpassword"
                                                type="password"
                                                name="confirmPassword"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.confirmPassword}
                                                className='dark:bg-slate-900 dark:text-white font-anuphan w-full py-2 rounded-lg border border-grey-200 text-grey-darker focus:outline-none focus:border-purple3 focus:ring focus:ring-purple3 focus:ring-opacity-20 pl-4'
                                            />
                                        </div>
                                        {errors.confirmPassword && touched.confirmPassword ? (<div className='text-red-500 text-sm font-anuphan'>{errors.confirmPassword}</div>) : null}
                                    </div>
                                    <div className='block mt-3 mb-5'>
                                        <label className="block text-md mb-2 text-gray-700 dark:text-white font-anuphan">
                                            Location
                                        </label>
                                        <div className='mb-1'>
                                            <input
                                                id="location"
                                                type="text"
                                                name="location"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.location}
                                                className='dark:bg-slate-900 dark:text-white font-anuphan w-full py-2 rounded-lg border border-grey-200 text-grey-darker focus:outline-none focus:border-purple3 focus:ring focus:ring-purple3 focus:ring-opacity-20 pl-4'
                                            />
                                        </div>
                                        {errors.location && touched.location ? (<div className='text-red-500 text-sm font-anuphan'>{errors.location}</div>) : null}
                                    </div>
                                    <button type='submit' className="flex items-center justify-center mt-auto rounded w-full py-2.5 text-center overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300 font-anuphan dark:text-white">Sign Up
                                    </button>
                                    <div className='flex items-center justify-between mt-4'>
                                        <span className='w-1/5 border'></span>
                                        <a className='text-sm font-medium text-gray-500 font-anuphan dark:text-white cursor-pointer' onClick={() => navigate("/webzy/sign-in")}>DO YOU HAVE AN ACCOUNT?</a>
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

export default SignUp