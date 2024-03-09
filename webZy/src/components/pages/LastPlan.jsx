import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import Swal from 'sweetalert2'
import CustomerService from '../../services/CustomerService';
const LastPlan = () => {

    const { fullPlan, userDetails, operatorName, planName, internet, validity, details, planType, planPrice, accessToken } = useSelector(state => state.global);


    const makeRechargePlan = async (details, price) => {
        var today = new Date();

        const data = {
            // "rechargeId": 0,
            "rechargePrice": price,
            "status": "string",
            "date": today,
            "plan": details
        }
        const res = await CustomerService.makeRecharge(userDetails.username, accessToken, data);
        console.log(res);
    }

    const onPay = () => {

        const price = fullPlan.planPrice;

        var options = {
            key: "rzp_test_ErrHDhVpplAsdS",
            key_secret: "DUulYAw3CJ05Of3wiSW2jEaQ",
            amount: price * 100,
            currency: "INR",
            name: "Webzy",
            description: "Sample",
            prefill: {
                name: userDetails.username,
                email: userDetails.email,
                contact: userDetails.mobileNumber,
            },
            handler: function (response) {
                console.log(response);
                makeRechargePlan(fullPlan, price);
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

    var url = "";

    if (operatorName === "Airtel") {
        url = "/img/airtel.png";
    }
    else if (operatorName === "Jio") {
        url = "/img/jio.png";
    }
    else if (operatorName === "BSNL") {
        url = "/img/bsnl.png";
    }
    else {
        url = "/img/vi.png";
    }

    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <section className="overflow-hidden bg-gray-50 dark:bg-slate-900 dark:text-white sm:grid sm:grid-cols-2 h-screen font-anuphan">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white pt-5 pb-5">
                            Repeat Last Plan
                        </h2>
                        <article className="rounded-xl bg-white dark:bg-slate-800 p-4 ring ring-fuchsia-100 dark:ring-fuchsia-400 sm:p-6 lg:p-8">
                            <div className="flex items-start sm:gap-8">
                                <div className='flrex'>
                                    <div
                                        className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-fuchsia-500"
                                        aria-hidden="true"
                                    >
                                        <div className="flex items-center gap-5">
                                            <img src={url} width={100} className='rounded-full' />
                                        </div>
                                    </div>
                                    <h1 className='text-xl font-bold'>{planType}</h1>
                                    <h1 className='text-xl font-bold'>₹{planPrice}</h1>
                                </div>
                                <div>
                                    <strong
                                        className="rounded border border-fuchsia-500 bg-fuchsia-800 px-4 py-2.5 text-[15px] font-medium text-white"
                                    >
                                        {userDetails.mobileNumber}
                                    </strong>
                                    <div className='flex align-baseline mt-4'>
                                        <h3 className="text-lg font-medium sm:text-xl mr-14">
                                            Plan
                                        </h3>
                                        <p className="text-lg text-gray-700 dark:text-caramel">
                                            {planName}
                                        </p>
                                    </div>
                                    <div className='flex align-baseline mt-4'>
                                        <h3 className="text-lg font-medium sm:text-xl mr-14">
                                            Data
                                        </h3>
                                        <p className="text-lg text-gray-700 dark:text-caramel">
                                            {internet}
                                        </p>
                                    </div>
                                    <div className='flex align-baseline mt-4'>
                                        <h3 className="text-lg font-medium sm:text-xl mr-7">
                                            Validity
                                        </h3>
                                        <p className="text-lg text-gray-700 dark:text-caramel">
                                            {validity}
                                        </p>
                                    </div>
                                    <div className='flex align-baseline mt-4'>
                                        <h3 className="text-lg font-medium sm:text-xl">
                                            Details
                                        </h3>
                                        <p className="text-lg text-gray-700 dark:text-caramel">
                                            {details}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <div className="mt-4 md:mt-8">
                            <div className="flex justify-evenly items-center mt-5">
                                <a onClick={onPay} className="relative rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300">
                                    <span className="relative">Repeat</span>
                                </a>
                                <a onClick={() => navigate(`/mobile-recharge/${operatorName}/${userDetails.mobileNumber}`)} className="relative rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300">
                                    <span className="relative">Change</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    alt="repeat"
                    src="/img/repeat.svg"
                    className="h-56 w-full object-cover sm:h-full"
                />
            </section>
        </motion.div>
    )
}

export default LastPlan