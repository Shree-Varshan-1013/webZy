import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import PlanSchema from '../../schemas/PlanSchema';
import { useEffect, useState } from 'react';
import AdminService from '../../services/AdminService';

const EditPlan = ({ PlanId, accessToken }) => {
    const [tar, setTar] = useState({});
    const [initialData, setInitialData] = useState({});

    useEffect(() => {
        fetchPlan();
    }, [PlanId, accessToken]);

    const fetchPlan = async () => {
        try {
            const res = await AdminService.getPlanById(PlanId, accessToken);
            console.log(res);
            setTar(res.data);
            setInitialData({
                planName: res.data.planName,
                planType: res.data.planType,
                planData: res.data.planData,
                planPrice: res.data.planPrice,
                planDetails: res.data.planDetails,
                planValidity: res.data.planValidity,
                operatorName: res.data.operatorName
            });
        } catch (error) {
            console.error('Error fetching plan:', error);
        }
    }

    console.log(tar);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: () => initialData,
        validationSchema: PlanSchema,
        onSubmit: (values, action) => {
            console.log(values);
            eventAction();
            // action.resetForm();
        },
    });

    const eventAction = () => {
        console.log(values);
    }

    return (
        <div className="dark:bg-slate-900" style={{ backgroundImage: "url(/img/bottom3.svg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="w-full">
                <h1 className="text-center text-2xl font-bold font-anuphan dark:text-purple3 sm:text-3xl pt-5">Edit Plan</h1>
                <form onSubmit={handleSubmit} className="mb-0 space-y-4 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8">
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label className="sr-only font-anuphan">Name</label>
                            <div className="relative">
                                <input
                                    name="planName"
                                    type="text"
                                    value={values.planName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                />
                                {errors.planName && touched.planName && <div className="text-red-600 text-xs">{errors.planName}</div>}
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Data</label>
                            <div className="relative">
                                <input
                                    name="planData"
                                    type="text"
                                    value={values.planData}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                />
                                {errors.planData && touched.planData && <div className="text-red-600 text-xs">{errors.planData}</div>}
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Price</label>
                            <div className="relative">
                                <input
                                    name="planPrice"
                                    type="text"
                                    value={values.planPrice}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                />
                                {errors.planPrice && touched.planPrice && <div className="text-red-600 text-xs">{errors.planPrice}</div>}
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Details</label>
                            <div className="relative">
                                <input
                                    name="planDetails"
                                    type="text"
                                    value={values.planDetails}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                />
                                {errors.planDetails && touched.planDetails && <div className="text-red-600 text-xs">{errors.planDetails}</div>}
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Validity</label>
                            <div className="relative">
                                <input
                                    name="planValidity"
                                    type="text"
                                    value={values.planValidity}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                />
                                {errors.planValidity && touched.planValidity && <div className="text-red-600 text-xs">{errors.planValidity}</div>}
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
                            Confirm
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