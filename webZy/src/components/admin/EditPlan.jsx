import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import PlanSchema from '../../schemas/PlanSchema';

const EditPlan = ({ userName }) => {

    const initialData = {
        planName: "",
        planType: "",
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
        <div className="dark:bg-slate-900" style={{ backgroundImage: "url(/img/bottom3.svg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="w-full">
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
                                    placeholder="Enter Plan Name"
                                />
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
                                    <option value="Airtel">Airtel</option>
                                    <option value="Bsnl">Bsnl</option>
                                    <option value="Jio">Jio</option>
                                    <option value="Vi">Vi</option>
                                </select>
                                {errors.operatorName && touched.operatorName && <div className="text-red-600 text-xs">{errors.operatorName}</div>}
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button
                            type="submit"
                            className="block w-1/2 text-sm font-medium rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300"
                        >
                            Edit Plan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

EditPlan.propTypes = {
    username: PropTypes.string.isRequired
}

export default EditPlan