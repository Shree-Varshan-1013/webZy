import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import AdminService from '../../services/AdminService';

const EditPlan = ({ PlanId, accessToken }) => {
    const [tar, setTar] = useState({
        planName: "",
        planType: "",
        planData: "",
        planPrice: "",
        planDetails: "",
        planValidity: "",
        operatorName: ""
    });

    useEffect(() => {
        fetchPlan();
    }, [PlanId, accessToken]);

    const fetchPlan = async () => {
        try {
            const res = await AdminService.getPlanById(PlanId, accessToken);
            console.log(res);
            setTar(res.data);
        } catch (error) {
            console.error('Error fetching plan:', error);
        }
    }

    const eventChange = (e) => {
        const { name, value } = e.target;
        setTar(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const eventAction = (e) => {
        e.preventDefault();
        console.log(tar);
        eventSave();
    }

    const eventSave = async () => {
        const res = await AdminService.updatePlan(PlanId, tar, accessToken);
        console.log(res);
    }

    return (
        <div className="dark:bg-slate-900" style={{ backgroundImage: "url(/img/bottom3.svg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="w-full">
                <h1 className="text-center text-2xl font-bold font-anuphan dark:text-purple3 sm:text-3xl pt-5">Edit Plan</h1>
                <form className="mb-0 space-y-4 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8">
                    <div className='grid grid-cols-2 gap-4  dark:text-white'>
                        <div>
                            <label className="sr-only font-anuphan">Name</label>
                            <div className="relative">
                                <input
                                    name="planName"
                                    type="text"
                                    value={tar.planName}
                                    onChange={eventChange}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Data</label>
                            <div className="relative">
                                <input
                                    name="planData"
                                    type="text"
                                    value={tar.planData}
                                    onChange={eventChange}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Price</label>
                            <div className="relative">
                                <input
                                    name="planPrice"
                                    type="text"
                                    value={tar.planPrice}
                                    onChange={eventChange}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Details</label>
                            <div className="relative">
                                <input
                                    name="planDetails"
                                    type="text"
                                    value={tar.planDetails}
                                    onChange={eventChange}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Validity</label>
                            <div className="relative">
                                <input
                                    name="planValidity"
                                    type="text"
                                    value={tar.planValidity}
                                    onChange={eventChange}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Operator</label>
                            <div className="relative">
                                <select
                                    name="operatorName"
                                    value={tar.operatorName}
                                    onChange={eventChange}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan appearance-none dark:bg-slate-900 dark:text-white"
                                >
                                    <option value="" key="default" disabled>Select Operator</option>
                                    <option value="Airtel" key="airtel">Airtel</option>
                                    <option value="Bsnl" key="bsnl">Bsnl</option>
                                    <option value="Jio" key="jio">Jio</option>
                                    <option value="Vi" key="vi">Vi</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button
                            onClick={eventAction}
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
    PlanId: PropTypes.number.isRequired,
    accessToken: PropTypes.string.isRequired
}

export default EditPlan;
