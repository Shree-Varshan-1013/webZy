import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import CustomerService from '../../services/CustomerService';
import { Toaster, toast } from 'sonner';
import { useSelector } from 'react-redux';

const UserPaymentHistory = () => {

    const { userDetails, accessToken } = useSelector(state => state.global);

    const [data, setData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 4;

    const fetchPayment = async () => {
        try {
            const res = await CustomerService.getPayments(userDetails.username, accessToken);
            const payment = res.data;
            console.log(payment);
            setData(payment)
        } catch (error) {
            console.error("Error fetching recharges:", error);
        }
    };
    useEffect(() => {
        fetchPayment();
    }, [currentPage]);


    // Calculate indexes for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPayment = data.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    useEffect(() => {
        fetchPayment();
    }, []);


    const eventShowAddon = (addon) => {
        toast(
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">{addon.addonName}</h2>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Price:</span> ${addon.addonPrice}</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Validity:</span> {addon.addonValidity}</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Data:</span> {addon.data}</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Operator:</span> {addon.operatorName}</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Details:</span> {addon.addonDetails}</p>
            </div>
            , {
                action: {
                    label: "Ok"
                },
            })
    }

    const eventShowPlan = (plan) => {
        toast(
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">{plan.planName}</h2>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Price:</span> ${plan.planPrice}</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Validity:</span> {plan.planValidity}</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Data:</span> {plan.planData}</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Operator:</span> {plan.operatorName}</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Details:</span> {plan.planDetails}</p>
            </div>);
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Toaster position="top-center" theme="light" visibleToasts={2} richColors closeButton />
            <section className="py-1 bg-blueGray-50 h-screen font-anuphan">
                <div className="w-full h-screen xl:w-8/12  xl:mb-0 px-4 mx-auto mt-20">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div className="container mx-auto px-4 sm:px-8 mt-5">
                            <div className="overflow-y-auto max-h-screen">
                                <table className="min-w-full leading-normal font-anuphan">
                                    <thead>
                                        <tr>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Mode of Payment
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Price
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Date
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Operator
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Details
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentPayment.map((payment) => (
                                            <tr key={payment.rechargeId}>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{payment.modeOfPayment}</td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">₹{payment.totalAmount}</td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{payment.paymentDate}</td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"><span
                                                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <span aria-hidden
                                                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                    <span className="relative">{payment.status}</span>
                                                </span></td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{payment.recharge && payment.recharge.plan.operatorName}</td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="flex justify-evenly">
                                                        {
                                                            payment.recharge.plan && <div className='flex justify-center items-center'>
                                                                <button
                                                                    onClick={() => eventShowPlan(payment.recharge.plan)}
                                                                    className="block text-sm font-medium rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300"
                                                                >
                                                                    Plan
                                                                </button>
                                                            </div>
                                                        }
                                                        {
                                                            payment.recharge.addon && <button
                                                                onClick={() => eventShowAddon(payment.recharge.addon)}
                                                                className="block text-sm font-medium rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300"
                                                            >
                                                                Addon
                                                            </button>
                                                        }
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div
                                    className="px-5 py-2 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                    <span className="text-xs xs:text-sm text-gray-900">
                                        Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, data.length)} of {data.length} Entries
                                    </span>
                                    <div className="inline-flex mt-2 xs:mt-0">
                                        <button
                                            onClick={prevPage} disabled={currentPage === 1}
                                            className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                            Prev
                                        </button>
                                        <button
                                            onClick={nextPage} disabled={indexOfLastItem >= data.length}
                                            className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default UserPaymentHistory