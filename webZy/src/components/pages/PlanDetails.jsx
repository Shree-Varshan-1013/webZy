import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomerService from '../../services/CustomerService'
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import { motion } from 'framer-motion';
import SignIn from '../SignIn';
const TabsComponent = ({ openTab, setOpenTab, operatorName, accessToken }) => {

    const [records, setRecords] = useState([]);

    const { userDetails } = useSelector(state => state.global);

    const navigate = useNavigate();

    var orderDetails = {
        "userId": 1,
        "price": 599 - 100,
        "providerId": 0,
        "providerFirstName": "",
        "providerLastName": "",
        "providerEmail": "",
        "providerExperience": 0,
        "providerAddress": "",
        "providerGender": "",
        "providerPhoneNumber": 0
    }

    const onPay = () => {

        // dispatch(setPaymentSuccess("true"));
        var options = {
            key: "rzp_test_ErrHDhVpplAsdS",
            key_secret: "DUulYAw3CJ05Of3wiSW2jEaQ",
            amount: (599 - 100) * 100,
            currency: "INR",
            name: "Webzy",
            description: "Sample",
            prefill: {
                name: userDetails.userName,
                email: userDetails.email,
                contact: 6369442740,
            },
            handler: function (response) {
                console.log(response);
                // dispatch(setPaymentSuccess(true));

                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Payment Done",
                    showConfirmButton: false,
                    timer: 3000,
                }).then(navigate("/payment-success"));
            },
            notes: {
                address: "Razorpay Corporate office",
            },
            theme: {
                color: "#AC61BD",
            },
        };

        var pay = new window.Razorpay(options);
        pay.open();
    };

    useEffect(() => {

        if (openTab === 1) {

            // const fetchData = async () => {
            //     try {
            //         const data = await fetchPlans();
            //         console.log(data);
            //         setRecords(data);
            //     } catch (error) {
            //         console.error('Error fetching plans:', error);
            //     }
            // };

            // fetchData();
            setRecords([
                { id: 1, name: "Record 1 for Add on" },
                { id: 2, name: "Record 2 for Add on" },
                { id: 3, name: "Record 3 for Add on" },
                { id: 3, name: "Record 4 for Add on" },
                { id: 3, name: "Record 5 for Add on" },
                { id: 3, name: "Record 6 for Add on" },
            ]);

        } else if (openTab === 2) {
            setRecords([
                { id: 1, name: "Record 1 for Add on" },
                { id: 2, name: "Record 2 for Add on" },
                { id: 3, name: "Record 3 for Add on" },
                { id: 3, name: "Record 4 for Add on" },
                { id: 3, name: "Record 5 for Add on" },
                { id: 3, name: "Record 6 for Add on" },
            ]);
        } else if (openTab === 3) {
            setRecords([
                { id: 1, name: "Record 1 for Exclusive" },
                { id: 2, name: "Record 2 for Exclusive" },
                { id: 3, name: "Record 3 for Exclusive" },
            ]);
        }
    }, [openTab]);

    const fetchPlans = async () => {
        console.log(operatorName, accessToken)
        const res = await CustomerService.getPlans(operatorName, accessToken);
        console.log(res.data);
        return res.data;
    }

    const openModal = (record) => {
        Swal.fire({
            title: `${record.planName}`,
            text: `${record.planDetails}`,
            icon: "info"
        });
    }

    return (

        <div className="max-w-full mx-auto">
            <div className="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md">
                <button onClick={() => setOpenTab(1)} className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 1 ? 'bg-purple3 text-white' : ''}`}>Recommended</button>
                <button onClick={() => setOpenTab(2)} className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 2 ? 'bg-purple3 text-white' : ''}`}>Add on</button>
                <button onClick={() => setOpenTab(3)} className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 3 ? 'bg-purple3 text-white' : ''}`}>Exclusive</button>
            </div>

            <div style={{ display: openTab === 1 ? 'block' : 'none' }}>
                {records.map(record => (
                    <>
                        <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-purple3 mb-2">
                            <div className="flex justify-between items-center">
                                <div className='flex'>
                                    <div className='md:mr-20'>
                                        <div className="text-2xl font-semibold text-purple3">₹ 199</div>
                                        <div className="text-gray-700">Unlimited Calls</div>
                                    </div>
                                    <div className='md:mr-20'>
                                        <div className="text-2xl font-semibold text-purple3">28</div>
                                        <div className="text-gray-700">Validity</div>
                                    </div>
                                    <div className='md:mr-10'>
                                        <div className="text-2xl font-semibold text-purple3">3 GB/Day</div>
                                        <div className="text-gray-700">Data</div>
                                    </div>
                                    <div className='md:mr-10'>
                                        <div className="text-2xl font-semibold text-purple3">PREPAID</div>
                                        <div className="text-gray-700">Plan Type</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center">
                                        <a onClick={onPay} className="relative rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300">
                                            <span className="relative">Apply</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>

            <div style={{ display: openTab === 2 ? 'block' : 'none' }}>
                {records.map(record => (
                    <>
                        <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-purple3 mb-2">
                            <div className="flex justify-between items-center">
                                <div className='flex'>
                                    <div className='md:mr-20'>
                                        <div className="text-2xl font-semibold text-purple3">₹ 349</div>
                                        <div className="text-gray-700">Unlimited Calls</div>
                                    </div>
                                    <div className='md:mr-20'>
                                        <div className="text-2xl font-semibold text-purple3">30</div>
                                        <div className="text-gray-700">Validity</div>
                                    </div>
                                    <div className='md:mr-20'>
                                        <div className="text-2xl font-semibold text-purple3">1.5 GB/Day</div>
                                        <div className="text-gray-700">Data</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center">
                                        <a onClick={() => navigate(`/mobile-recharge/${operatorName}/payment`)} className="relative rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300">
                                            <span className="relative">Apply</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <div style={{ display: openTab === 3 ? 'block' : 'none' }}>
                {records.map(record => (
                    <>
                        <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-purple3 mb-2">
                            <div className="flex justify-between items-center">
                                <div className='flex'>
                                    <div className='md:mr-40'>
                                        <div className="text-2xl font-semibold text-purple3">₹ 499</div>
                                        <div className="text-gray-700">Unlimited Calls</div>
                                    </div>
                                    <div className='md:mr-40'>
                                        <div className="text-2xl font-semibold text-purple3">28</div>
                                        <div className="text-gray-700">Validity</div>
                                    </div>
                                    <div className='md:mr-10'>
                                        <div className="text-2xl font-semibold text-purple3">2 GB/Day</div>
                                        <div className="text-gray-700">Data</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center">
                                        <a onClick={() => navigate(`/mobile-recharge/${operatorName}/payment`)} className="relative rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300">
                                            <span className="relative">Apply</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div >
    );
};

const PlanDetails = () => {


    const [openTab, setOpenTab] = useState(1);

    const { operatorName } = useParams();

    const { accessToken, isLoggedIn } = useSelector((state) => state.global);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {
                isLoggedIn ? <div className='flex flex-col md:flex-row h-screen pt-20 dark:bg-slate-900'>
                    <div className='md:w-2/4 bg-gray-100 flex justify-center p-3 items-center dark:bg-slate-900'>
                        <article className="rounded-xl bg-white w-full sm:p-6 lg:p-8 overflow-hidden dark:bg-slate-800">
                            <div className="flex items-start sm:gap-8">
                                <div
                                    className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-fuchsia-500"
                                    aria-hidden="true"
                                >
                                    <div className="flex items-center">
                                        {
                                            operatorName === "Airtel" && <img src="/img/airtel.png" className="rounded-full" />
                                        }
                                        {
                                            operatorName === "Jio" && <img src="/img/jio.png" className="rounded-full" />
                                        }
                                        {
                                            operatorName === "BSNL" && <img src="/img/bsnl.png" className="rounded-full" />
                                        }
                                        {
                                            operatorName === "Vi" && <img src="/img/vi.png" height={100} className="rounded-full bg-cover" />
                                        }
                                    </div>
                                </div>
                                <div>
                                    <strong
                                        className="rounded border border-purple bg-purple px-3 py-1.5 text-[10px] font-medium text-white font-anuphan"
                                    >
                                        6369442740
                                    </strong>

                                    <h3 className="mt-4 text-lg font-medium sm:text-xl dark:text-white">
                                        <p className="font-poppins">{operatorName}</p>
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-700 font-anuphan dark:text-white">
                                        {operatorName} Prepaid | Tamil Nadu
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="md:w-full bg-gray-200 py-4 px-4 overflow-y-auto dark:bg-slate-800">
                        <div className="mb-4">
                            <input type="text" placeholder="Search for a plan,eg.199" className="w-full p-2 border border-gray-300 rounded-lg" />
                        </div>
                        <TabsComponent openTab={openTab} setOpenTab={setOpenTab} operatorName={operatorName} accessToken={accessToken} />
                    </div>
                </div> : <SignIn />
            }
        </motion.div>
    );
};

export default PlanDetails;
