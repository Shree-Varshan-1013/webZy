import { useEffect, useState } from 'react';
import AddPlan from './AddPlan';
import Addon from './Addon';
import EditPlan from './EditPlan';
import EditAddon from './EditAddon';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import AdminService from '../../services/AdminService'; import { Toaster, toast } from 'sonner';
import PropTypes from 'prop-types';

const OverAll = ({ userName }) => {

    const [selectedTab, setSelectedTab] = useState('plans');

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);
    const [records, setRecords] = useState([]);

    // Pagination logic
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const { accessToken } = useSelector(state => state.global);

    const [showForm, setShowForm] = useState(false);

    const [showEditForm, setShowEditForm] = useState(false);

    const [showEditPlanForm, setShowEditPlanForm] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');

    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        console.log(term);

        const results = term.trim() !== '' ? currentRecords.filter(record => {
            return (
                record.planName.toLowerCase().includes(term) ||
                record.planType.toLowerCase().includes(term) ||
                record.planData.toLowerCase().includes(term) ||
                record.planDetails.toLowerCase().includes(term) ||
                (record.planPrice && record.planPrice.toString().toLowerCase().includes(term)) ||
                record.planValidity.toLowerCase().includes(term) ||
                record.operatorName.toLowerCase().includes(term)
            );
        }) : [];

        setSearchResults(results);
    };

    console.log(searchResults);

    const [id, setId] = useState(null);

    useEffect(() => {
        if (selectedTab === "plans") {
            const fetchData = async () => {
                try {
                    const data = await fetchPlans();
                    setRecords(data);
                } catch (error) {
                    console.error('Error fetching plans:', error);
                }
            };

            fetchData();
        } else if (selectedTab === "addon") {
            const fetchData1 = async () => {
                try {
                    const data = await fetchAddon();
                    console.log(data);
                    setRecords(data);
                } catch (error) {
                    console.error('Error fetching plans:', error);
                }
            };
            fetchData1();
        }
    }, [currentPage, selectedTab]);

    const handleEditButtonClick = () => {
        setShowEditForm(true);
        setSelectedTab(null);
    };

    const handleEditPlanButtonClick = (item) => {
        setId(item);
        setShowEditPlanForm(true);
        setSelectedTab(null);
    }

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
        setShowEditForm(false); // Reset edit form state
        setShowEditPlanForm(false); // Reset edit plan form state
        setShowForm(false);
    };

    const handleAddButtonClick = (tab) => {
        setSelectedTab(tab);
        setShowForm(true);
        setShowEditForm(false);
        setShowEditPlanForm(false);
    };

    const renderEditContent = () => {
        if (showEditPlanForm) {
            return <EditPlan PlanId={id} accessToken={accessToken} />;
        }
        if (showEditForm) {
            return <EditAddon AddonId={id} accessToken={accessToken} />;
        }
    }

    const fetchPlans = async () => {
        const res = await AdminService.getPlans(accessToken);
        return res.data;
    }

    const fetchAddon = async () => {
        const res = await AdminService.getAddon(accessToken);
        return res.data;
    }

    const handleDeleteButtonClick = async (id) => {
        toast("Are you sure to delete the item?", {
            action: {
                label: "Delete",
                onClick: async () => {
                    if (selectedTab === "plans") {
                        const res = await AdminService.deletePlanById(id, accessToken);
                        console.log(res);
                    } else {
                        const res = await AdminService.deleteAddonById(id, accessToken);
                        console.log(res);
                    }
                    setRecords(prevRecords => prevRecords.filter(record => record.planId !== id));
                    toast.success("Successfully deleted !");
                }
            }
        })
    }

    const renderContent = () => {
        if (showForm) {
            return (
                <>
                    {
                        selectedTab === "plans" ? <AddPlan /> : <Addon />
                    }
                </>
            );
        }

        if (selectedTab === 'plans') {
            return (
                <>
                    {
                        currentRecords.length === 0 ? <div className='h-screen'><h1 className='text-3xl font-anuphan dark:text-white text-center pt-5'>No records found</h1></div> : (<div>
                            <table className="w-full whitespace-nowrap">
                                <thead>
                                    <tr className='dark:text-fuchsia-400'>
                                        <th className="px-4 py-2 text-left">Name</th>
                                        <th className="px-4 py-2 text-left">Data</th>
                                        <th className="px-4 py-2 text-left">Price</th>
                                        <th className="px-4 py-2 text-left">Validity</th>
                                        <th className="px-4 py-2 text-left">Plan Type</th>
                                        <th className="px-4 py-2 text-left">Operator</th>
                                        <th className="px-4 py-2 text-left">Description</th>
                                        <th className="px-4 py-2 text-left">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        currentRecords.map((record) => {
                                            return (
                                                <>
                                                    <tr key={record.id} tabIndex="0" className="focus:outline-none h-16 rounded">
                                                        <td className="px-4 py-2">
                                                            <div className="flex items-center">
                                                                <p className="text-base font-medium leading-none text-gray-700 dark:text-white">{record.planName}</p>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <div className="flex items-center">
                                                                <p className="text-sm leading-none text-gray-600 dark:text-white">{record.planData}</p>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <div className="flex items-center">
                                                                <p className="text-sm leading-none text-gray-600 dark:text-white">₹ {record.planPrice}</p>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <div className="flex items-center">
                                                                <p className="text-sm leading-none text-gray-600 dark:text-white">{record.planValidity}</p>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-purple3 bg-fuchsia-200 rounded">{record.planType}</button>
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">{record.operatorName}</button>
                                                        </td>
                                                        <td className="px-4 py-2 max-w-md">
                                                            <div className="flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="#B65FCF" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-4 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m12 112a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 0 16" /></svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <div className="flex items-center">
                                                                <button className="mr-2" onClick={() => handleEditPlanButtonClick(record.planId)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="#B65FCF" fillRule="evenodd" clipRule="evenodd"><path d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z" /><path d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1a2 2 0 0 0-2.2.4l-.6.6l2.9 3l.5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8m-2.4 4.4l-2.8-3l-4.8 5l-.1.3l-.7 3c0 .3.3.7.6.6l2.7-.6l.3-.1l4.7-5Z" /></g></svg>
                                                                </button>
                                                                <button onClick={() => handleDeleteButtonClick(record.planId)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#B65FCF" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" /></svg>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="h-3"></tr>
                                                </>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                            <div className='flex justify-center'>
                                <button onClick={prevPage} disabled={currentPage === 1} className="relative rounded px-3 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300 mr-4">
                                    <span className="relative">Previous</span>
                                </button>
                                <button onClick={nextPage} disabled={indexOfLastRecord >= records.length} className="relative rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300">
                                    <span className="relative">Next</span>
                                </button>
                            </div>
                        </div>)
                    }
                </>
            );
        }
        else if (selectedTab === 'addon') {
            return (
                <>
                    {
                        currentRecords.length === 0 ? <div className='h-screen'><h1 className='text-3xl font-anuphan dark:text-white text-center pt-5'>No records found</h1></div> : (<div>
                            <table className="w-full whitespace-nowrap">
                                <thead>
                                    <tr className='dark:text-fuchsia-400'>
                                        <th className="px-4 py-2 text-left">Name</th>
                                        <th className="px-4 py-2 text-left">Data</th>
                                        <th className="px-4 py-2 text-left">Price</th>
                                        <th className="px-4 py-2 text-left">Operator</th>
                                        <th className="px-4 py-2 text-left">Description</th>
                                        <th className="px-4 py-2 text-left">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        currentRecords.map((record) => {
                                            return (
                                                <>
                                                    <tr key={record.id} tabIndex="0" className="focus:outline-none h-16 rounded">
                                                        <td className="px-4 py-2">
                                                            <div className="flex items-center">
                                                                <p className="text-base font-medium leading-none text-gray-700 dark:text-white">{record.addonName}</p>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <div className="flex items-center">
                                                                <p className="text-sm leading-none text-gray-600 dark:text-white">{record.data}</p>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <div className="flex items-center">
                                                                <p className="text-sm leading-none text-gray-600 dark:text-white">₹ {record.addonPrice}</p>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-purple3 bg-fuchsia-200 rounded">{record.operatorName}</button>
                                                        </td>
                                                        <td className="px-4 py-2 max-w-md">
                                                            <div className="flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="#B65FCF" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-4 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m12 112a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 0 16" /></svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <div className="flex items-center">
                                                                <button className="mr-2" onClick={() => handleEditButtonClick(record.addonId)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="#B65FCF" fillRule="evenodd" clipRule="evenodd"><path d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z" /><path d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1a2 2 0 0 0-2.2.4l-.6.6l2.9 3l.5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8m-2.4 4.4l-2.8-3l-4.8 5l-.1.3l-.7 3c0 .3.3.7.6.6l2.7-.6l.3-.1l4.7-5Z" /></g></svg>
                                                                </button>
                                                                <button>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#B65FCF" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" /></svg>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="h-3"></tr>
                                                </>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                            <div className='flex justify-center'>
                                <button onClick={prevPage} disabled={currentPage === 1} className="relative rounded px-3 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300 mr-4">
                                    <span className="relative">Previous</span>
                                </button>
                                <button onClick={nextPage} disabled={indexOfLastRecord >= records.length} className="relative rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300">
                                    <span className="relative">Next</span>
                                </button>
                            </div>
                        </div>)
                    }
                </>
            );
        }
        return null;
    };

    return (
        <div className="dark:bg-slate-900 font-anuphan" style={{ backgroundImage: "url(/img/bottom3.svg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
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
                                        <p className="block antialiased font-anuphan text-sm leading-normal text-black font-normal dark:text-white">Details</p>
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
            </div >
            <div className="bg-white dark:bg-slate-900 py-4 md:py-0 px-4 md:px-8 xl:px-10" style={{ backgroundImage: "inherit", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                {/* Tab buttons */}
                <div className="sm:flex items-center justify-between">
                    <div className="flex items-center">
                        <button onClick={() => handleTabClick('plans')} className={`rounded-full focus:outline-none focus:ring-2  focus:bg-fuchsia-50 focus:ring-fuchsia-800 ${selectedTab === 'plans' ? 'bg-fuchsia-100 text-fuchsia-700' : 'text-gray-600 dark:text-white hover:text-fuchsia-700 hover:bg-fuchsia-100'} py-2 px-8 rounded-full`}>
                            <p>Plans</p>
                        </button>
                        <button onClick={() => handleTabClick('addon')} className={`rounded-full focus:outline-none focus:ring-2 focus:bg-fuchsia-50 focus:ring-fuchsia-800 ml-4 sm:ml-8 ${selectedTab === 'addon' ? 'bg-fuchsia-100 text-fuchsia-700' : 'text-gray-600 dark:text-white hover:text-fuchsia-700 hover:bg-fuchsia-100'} py-2 px-8 rounded-full`}>
                            <p>Addon</p>
                        </button>
                        <div className="pl-10">
                            <input type="text"
                                value={searchTerm}
                                onChange={handleSearch}
                                placeholder="Search for a plan, e.g. 199"
                                className="w-full p-2 border border-gray-300 rounded-lg" />
                            <ul>
                                {/* {searchResults.map((result, index) => (
                                    <li key={index}>{result.planName}{result.planData}</li>
                                ))} */}
                            </ul>
                        </div>
                    </div>
                    {selectedTab === 'plans' && !showForm && (
                        <button onClick={() => handleAddButtonClick("plans")} className="relative rounded px-5 py-1.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300">
                            <span className="relative">Add</span>
                        </button>
                    )}
                    {selectedTab === 'addon' && !showForm && (
                        <button onClick={() => handleAddButtonClick("addon")} className="relative rounded px-5 py-1.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300">
                            <span className="relative">Add</span>
                        </button>
                    )}
                </div>
                <div className="mt-7 overflow-x-auto">
                    {renderContent()}
                    {renderEditContent()}
                </div>
            </div>
        </div>
    );
};

OverAll.propTypes = {
    userName: PropTypes.string.isRequired
}


export default OverAll;
