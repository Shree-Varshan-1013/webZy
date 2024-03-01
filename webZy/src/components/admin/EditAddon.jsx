import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import PlanSchema from '../../schemas/PlanSchema';
import { useEffect, useState } from 'react';
import AdminService from '../../services/AdminService';
import { AddOnSchema } from './../../schemas/AddOnSchema';

const EditAddon = ({ AddonId, accessToken }) => {

    const [tar, setTar] = useState({});
    const [initialData, setInitialData] = useState({});

    useEffect(() => {
        fetchPlan();
    }, [AddonId, accessToken]);

    const fetchPlan = async () => {
        try {
            const res = await AdminService.getAddOnById(AddonId, accessToken);
            console.log(res);
            setTar(res.data);
            setInitialData({
                addonName: res.data.planName,
                addonType: res.data.planType,
                addonData: res.data.planData,
                addonPrice: res.data.planPrice,
                addonDetails: res.data.planDetails,
                addonValidity: res.data.planValidity,
                operatorName: res.data.operatorName
            });
        } catch (error) {
            console.error('Error fetching plan:', error);
        }
    }

    console.log(tar);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: () => initialData,
        validationSchema: AddOnSchema,
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
        <div className=" dark:bg-slate-900 w-full h-screen" style={{ backgroundImage: "url(/img/bottom3.svg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="">
                <h1 className="text-center text-2xl font-bold font-anuphan dark:text-purple3 sm:text-3xl pt-5">Edit Addon</h1>
                <form onSubmit={handleSubmit} className="mb-0 space-y-4 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8">
                    <div className='grid grid-cols-2 gap-4 dark:text-white'>
                        <div>
                            <label className="sr-only font-anuphan">Name</label>
                            <div className="relative">
                                <input
                                    name="addonName"
                                    type="text"
                                    value={values.addonName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder={tar.addonName}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
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
                                    placeholder={tar.data}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
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
                                    placeholder={tar.addonPrice}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
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
                                    placeholder={tar.addonDetails}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
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
                                    placeholder={tar.addonValidity}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
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
                                    <option value="Airtel" selected={tar.operatorName === "Airtel"}>Airtel</option>
                                    <option value="Bsnl" selected={tar.operatorName === "Bsnl"}>Bsnl</option>
                                    <option value="Jio" selected={tar.operatorName === "Jio"}>Jio</option>
                                    <option value="Vi" selected={tar.operatorName === "Vi"}>Vi</option>
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

EditAddon.propTypes = {
    username: PropTypes.string.isRequired
}

export default EditAddon