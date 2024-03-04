import { toast } from 'sonner'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import AdminService from '../../services/AdminService';

const EditAddon = ({ AddonId, accessToken }) => {

    const [tar, setTar] = useState({
        addonName: "",
        data: "",
        addonPrice: "",
        addonDetails: "",
        operatorName: ""
    });

    useEffect(() => {
        fetchPlan();
    }, [AddonId, accessToken]);

    const fetchPlan = async () => {
        try {
            const res = await AdminService.getAddOnById(AddonId, accessToken);
            console.log(res);
            setTar(res.data);
        } catch (error) {
            console.error('Error fetching addon:', error);
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
        try {
            toast.loading('Adding changes.....');
            const res = await AdminService.updateAddon(AddonId, tar, accessToken);
            console.log(res);

            setTimeout(() => {
                if (res.status === 200) {
                    toast.success("Successfully updated the record")
                }
            }, 2000);
        }
        catch (err) {
            toast.error('Something went wrong !');
            console.log(err);
        }
    }

    return (
        <div className=" dark:bg-slate-900 w-full h-screen" style={{ backgroundImage: "url(/img/bottom3.svg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="">
                <h1 className="text-center text-2xl font-bold font-anuphan dark:text-purple3 sm:text-3xl pt-5">Edit Addon</h1>
                <form onSubmit={eventAction} className="mb-0 space-y-4 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8">
                    <div className='grid grid-cols-2 gap-4 dark:text-white'>
                        <div>
                            <label className="sr-only font-anuphan">Name</label>
                            <div className="relative">
                                <input
                                    name="addonName"
                                    type="text"
                                    value={tar.addonName}
                                    onChange={eventChange}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Data</label>
                            <div className="relative">
                                <input
                                    name="data"
                                    type="text"
                                    value={tar.data}
                                    onChange={eventChange}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Price</label>
                            <div className="relative">
                                <input
                                    name="addonPrice"
                                    type="text"
                                    value={tar.addonPrice}
                                    onChange={eventChange}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan dark:bg-slate-900"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Details</label>
                            <div className="relative">
                                <input
                                    name="addonDetails"
                                    type="text"
                                    value={tar.addonDetails}
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
                                    <option value="" disabled>Select Operator</option>
                                    <option value="Airtel" selected={tar.operatorName === "Airtel"}>Airtel</option>
                                    <option value="Bsnl" selected={tar.operatorName === "Bsnl"}>Bsnl</option>
                                    <option value="Jio" selected={tar.operatorName === "Jio"}>Jio</option>
                                    <option value="Vi" selected={tar.operatorName === "Vi"}>Vi</option>
                                </select>
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
    AddonId: PropTypes.number.isRequired,
    accessToken: PropTypes.string.isRequired
}


export default EditAddon