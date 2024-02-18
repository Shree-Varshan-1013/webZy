import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import { signUpSchema } from '../../schemas';
import { toast } from 'sonner';
import AdminService from '../../services/AdminService';
const AddAdmin = ({ eventLogout }) => {

    const initialState = {
        "userFirstName": "",
        "userLastName": "",
        "userName": "",
        "email": "",
        "userPassword": "",
        "confirmPassword": ""
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

    const getToast = () => {
        toast.loading('Validating.....');
        setTimeout(() => {
            toast.success('done');
        }, 3000);
    };

    const eventRegister = async (values) => {

        const res = await AdminService.registerNewAdmin(values);
        console.log(res);

        getToast();

        setTimeout(() => {
            toast.success("Successfully Signed In !")
        }, 2000);

    }


    return (
        <div className=" dark:bg-slate-900 w-full h-screen" style={{ backgroundImage: "url(/img/bottom3.svg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className='pl-4 pr-4'>
                <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
                    <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
                        <div className="capitalize">
                            <nav aria-label="breadcrumb" className="w-max">
                                <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
                                    <li className="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
                                        <a href="#">
                                            <p className="block antialiased font-anuphan text-sm leading-normal dark:text-purple4 text-purple2 font-normal transition-all hover:opacity-100">dashboard</p>
                                        </a>
                                        <span className="text-gray-500 text-sm antialiased font-anuphan font-normal leading-normal mx-2 pointer-events-none select-none">/</span>
                                    </li>
                                    <li className="flex items-center text-white-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-purple3">
                                        <p className="block antialiased font-anuphan text-sm leading-normal text-black font-normal dark:text-white">Add Admin</p>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="flex items-center">
                            <button className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden" type="button">
                                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" strokeWidth="3" className="h-6 w-6 text-blue-gray-500">
                                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                            </button>
                            <a href="#">
                                <button onClick={eventLogout} className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 hidden items-center gap-1 px-4 xl:flex" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1" /></svg><span className="font-anuphan">Logout</span></button>
                                <button className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden" type="button">
                                    <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-blue-gray-500">
                                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </button>
                            </a>
                            <button className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
                                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-blue-gray-500">
                                        <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                            </button>
                            <button aria-expanded="false" id=":r2:" className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
                                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-blue-gray-500">
                                        <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="pl-4 pr-4 flex justify-center">
                <div className='w-full px-6 md:px-8 lg:w-1/2 flex justify-center items-center'>
                    <div className='lg:w-[100%]'>
                        <form onSubmit={handleSubmit}>
                            <p className=' mb-5 text-xl text-center text-gray-600 font-anuphan dark:text-white'>Join <span className='text-purple font-anuphan'>Webzy </span>community</p>
                            <div className=''>
                                <div className="grid grid-cols-2 gap-4 pb-3">
                                    <div className="col-span-1">
                                        <label className="block text-md mb-2 text-gray-700 dark:text-white font-anuphan">
                                            First Name
                                        </label>
                                        <input
                                            id="userFirstName"
                                            type="text"
                                            name="userFirstName"
                                            value={values.userFirstName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className='dark:bg-slate-900 dark:text-white font-anuphan w-full py-2 rounded-lg border border-grey-200 text-grey-darker focus:outline-none focus:border-purple3 focus:ring focus:ring-purple3 focus:ring-opacity-20 pl-4'
                                        />
                                        {errors.userFirstName && touched.userFirstName ? (<div className='text-red-500 text-sm font-anuphan'>{errors.userFirstName}</div>) : null}
                                    </div>
                                    <div className="col-span-1">
                                        <label className="block text-md mb-2 text-gray-700 dark:text-white font-anuphan">
                                            Last Name
                                        </label>
                                        <input
                                            id="userLastName"
                                            type="text"
                                            name="userLastName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.userLastName}
                                            className='dark:bg-slate-900 dark:text-white font-anuphan w-full py-2 rounded-lg border border-grey-200 text-grey-darker focus:outline-none focus:border-purple3 focus:ring focus:ring-purple3 focus:ring-opacity-20 pl-4'
                                        />
                                        {errors.userLastName && touched.userLastName ? (<div className='text-red-500 text-sm font-anuphan'>{errors.userLastName}</div>) : null}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-1">
                                        <label className="block text-md mb-2 text-gray-700 dark:text-white font-anuphan">
                                            Username
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
                                        {errors.userName && touched.userName ? (<div className='text-red-500 text-sm font-anuphan'>{errors.userName}</div>) : null}
                                    </div>
                                    <div className="col-span-1">
                                        <label className="block text-md mb-2 text-gray-700 dark:text-white font-anuphan">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            className='dark:bg-slate-900 dark:text-white font-anuphan w-full py-2 rounded-lg border border-grey-200 text-grey-darker focus:outline-none focus:border-purple3 focus:ring focus:ring-purple3 focus:ring-opacity-20 pl-4'
                                        />
                                        {errors.email && touched.email ? (<div className='text-red-500 text-sm font-anuphan'>{errors.email}</div>) : null}
                                    </div>
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
                                            id="password"
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
                                <button type='submit' className="flex items-center justify-center mt-auto rounded w-full py-2.5 text-center overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300 font-anuphan dark:text-white">Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddAdmin;