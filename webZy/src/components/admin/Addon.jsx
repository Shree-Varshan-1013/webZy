import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import PlanSchema from '../../schemas/PlanSchema';

const Addon = ({ userName }) => {

    const initialData = {
        addonName: "",
        data: "",
        addonPrice: "",
        addonDetails: "",
        addonValidity: "",
        operatorName: ""
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialData,
        validationSchema: PlanSchema,
        onSubmit: (values, action) => {
            console.log(values);
            eventAction();
            action.resetForm();
        },
    });

    const eventAction = () => {
        console.log(values);
    }

    return (
        <div className=" dark:bg-slate-900 w-full h-screen" style={{ backgroundImage: "url(/img/bottom3.svg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="pl-4 pr-4">
                <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
                    <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center p-3">
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
                                        <p className="block antialiased font-anuphan text-sm leading-normal text-black font-normal dark:text-white">Add Plan</p>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="flex items-center">
                            <a>
                                <span className="font-anuphan">{userName}</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 dark:bg-slate-900" style={{ backgroundImage: "url(/img/bottom3.svg)", backgroundSize: "cover" }}>
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold font-anuphan dark:text-purple3 sm:text-3xl">Enter Details</h1>
                    <form onSubmit={handleSubmit} className="mb-0 space-y-4 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8">
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <label className="sr-only font-anuphan">Name</label>
                                <div className="relative">
                                    <input
                                        name="addonName"
                                        type="text"
                                        value={values.addonName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                        placeholder="Enter Add on Name"
                                    />
                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#9ca3af" d="m21 15.46l-5.27-.61l-2.52 2.52a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z" /></svg>
                                    </span>
                                    {errors.addonName && touched.addonName && <div className="text-red-600 text-xs">{errors.addonName}</div>}
                                </div>
                            </div>
                            <div>
                                <label className="sr-only font-anuphan">Data</label>
                                <div className="relative">
                                    <input
                                        name="data"
                                        type="text"
                                        value={values.data}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                        placeholder="Enter the data"
                                    />
                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#9ca3af" d="m21 15.46l-5.27-.61l-2.52 2.52a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z" /></svg>
                                    </span>
                                    {errors.data && touched.data && <div className="text-red-600 text-xs">{errors.data}</div>}
                                </div>
                            </div>
                            <div>
                                <label className="sr-only font-anuphan">Price</label>
                                <div className="relative">
                                    <input
                                        name="addonPrice"
                                        type="text"
                                        value={values.addonPrice}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                        placeholder="Enter the price"
                                    />
                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#9ca3af" d="m21 15.46l-5.27-.61l-2.52 2.52a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z" /></svg>
                                    </span>
                                    {errors.addonPrice && touched.addonPrice && <div className="text-red-600 text-xs">{errors.addonPrice}</div>}
                                </div>
                            </div>
                            <div>
                                <label className="sr-only font-anuphan">Details</label>
                                <div className="relative">
                                    <input
                                        name="addonDetails"
                                        type="text"
                                        value={values.addonDetails}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                        placeholder="Enter description"
                                    />
                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#9ca3af" d="m21 15.46l-5.27-.61l-2.52 2.52a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z" /></svg>
                                    </span>
                                    {errors.addonDetails && touched.addonDetails && <div className="text-red-600 text-xs">{errors.addonDetails}</div>}
                                </div>
                            </div>
                            <div>
                                <label className="sr-only font-anuphan">Validity</label>
                                <div className="relative">
                                    <input
                                        name="addonValidity"
                                        type="text"
                                        value={values.addonValidity}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                        placeholder="Enter the Validity"
                                    />
                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#9ca3af" d="m21 15.46l-5.27-.61l-2.52 2.52a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z" /></svg>
                                    </span>
                                    {errors.addonValidity && touched.addonValidity && <div className="text-red-600 text-xs">{errors.addonValidity}</div>}
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
                                        <option value="Jio">Jio</option>
                                        <option value="Airtel">Airtel</option>
                                    </select>
                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4 mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><g fill="#9ca3af"><path d="M5 4.5a.5.5 0 0 1 .5-.5h2v2H5zM8.5 6V4h2a.5.5 0 0 1 .5.5V6zM5 7h6v2H5zm3.5 3H11v1.5a.5.5 0 0 1-.5.5h-2zm-1 0v2h-2a.5.5 0 0 1-.5-.5V10z" /><path d="M3.5 0A1.5 1.5 0 0 0 2 1.5v13A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5V3.414a1.5 1.5 0 0 0-.44-1.06L11.647.439A1.5 1.5 0 0 0 10.586 0zm2 3h5A1.5 1.5 0 0 1 12 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 11.5v-7A1.5 1.5 0 0 1 5.5 3" /></g></svg>
                                    </span>
                                    {errors.operatorName && touched.operatorName && <div className="text-red-600 text-xs">{errors.operatorName}</div>}
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="block w-full text-sm font-medium rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300"
                        >
                            Next
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

Addon.propTypes = {
    username: PropTypes.string.isRequired
}

export default Addon