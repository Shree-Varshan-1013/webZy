import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PlanSchema from '../../schemas/PlanSchema';
import AdminService from '../../services/AdminService';
import { useSelector } from 'react-redux';

const AddPlan = ({ userName }) => {

    const { accessToken } = useSelector(state => state.global);


    const initialData = {
        planName: "",
        planType: "",
        planData: "",
        planPrice: "",
        planDetails: "",
        planValidity: "",
        operatorName: ""
    }

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialData,
        validationSchema: PlanSchema,
        onSubmit: (values, action) => {
            console.log(values);
            eventAction();
            action.resetForm();
        },
    });

    const eventAction = async () => {
        try {
            toast.loading('Creating new Plan...');
            const res = await AdminService.addPlan(values, accessToken);
            console.log(res);
            setTimeout(() => {
                if (res.status === 200) {
                    toast.success("Successfully Plan added")
                }
            }, 2000);
        }
        catch (err) {
            toast.error('Something went wrong !');
            console.log(err);
        }
    }


    return (
        <div className="dark:bg-slate-900" style={{ backgroundImage: "url(/img/bottom3.svg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="w-full">
                <form onSubmit={handleSubmit} className="mb-0 space-y-4 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8">
                    <div className='grid grid-cols-2 gap-4 dark:text-white'>
                        <div>
                            <label className="sr-only font-anuphan">Name</label>
                            <div className="relative">
                                <input
                                    name="planName"
                                    type="text"
                                    value={values.planName}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                    placeholder="Enter Plan Name"
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
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                    placeholder="Enter the data"
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
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                    placeholder="Enter the price"
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
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                    placeholder="Enter description"
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
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                    placeholder="Enter the Validity"
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
                        <div>
                            <label className="sr-only font-anuphan">Plan Type</label>
                            <div className="relative">
                                <input
                                    name="planType"
                                    type="text"
                                    value={values.planType}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                    placeholder="Enter description"
                                />
                                {errors.planType && touched.planType && <div className="text-red-600 text-xs">{errors.planType}</div>}
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button
                            type="submit"
                            className="block w-1/2 text-sm font-medium rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300"
                        >
                            Add Plan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default AddPlan