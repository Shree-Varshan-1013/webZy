import React from 'react';
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { Toaster } from 'sonner';

function ProfilePage() {

    const { userDetails } = useSelector((state) => state.global);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <main className="profile-page lg:pt-[350px] dark:bg-slate-900 dark:text-white font-anuphan">
                <Toaster position="top-center" theme="light" visibleToasts={2} richColors style={{ zIndex: 9999, marginTop: "50px" }} />
                <section className="block h-500-px">
                    <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url(/img/hearts.svg)" }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                    </div>
                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0px)" }}>
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </section>
                <section className="relative py-16 bg-blueGray-200">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-xl rounded-lg -mt-64">
                            <div className="px-6 dark:bg-slate-800">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-gray-300 bg-purple3 dark:!border-navy-700">
                                            <span className="text-white text-4xl font-bold">{userDetails.userName ? userDetails.userName.charAt(0).toUpperCase() : ''}</span>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                            <button className="bg-purple2 active:bg-fuchsia-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className="mr-4 p-3 text-center" style={{ width: "120px", whiteSpace: "nowrap" }}>
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600 text-purple3">JIO</span><span className="text-sm text-blueGray-400">Sim</span>
                                            </div>
                                            <div className="mr-2 p-3 text-center" style={{ width: "120px", whiteSpace: "nowrap" }}>
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600 text-purple3">Prepaid</span><span className="text-sm text-blueGray-400">Plan Type</span>
                                            </div>
                                            <div className="lg:mr-4 p-3 text-center" style={{ width: "160px", whiteSpace: "nowrap" }}>
                                                <span className="text-lg font-bold font-anuphan block uppercase tracking-wide text-blueGray-600 text-purple3">2 GB/Day</span><span className="text-sm text-blueGray-400">Data</span>
                                            </div>
                                            <div className="lg:mr-4 p-3 text-center" style={{ width: "120px", whiteSpace: "nowrap" }}>
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600 text-purple3">5 days</span><span className="text-sm text-blueGray-400">Expiring in</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-12">
                                    <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                                        {userDetails.userName}
                                    </h3>
                                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                        Coimbatore, TamilNadu
                                    </div>
                                    <div className="mb-2 text-blueGray-600 mt-10">
                                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Phone Number - 6369442740
                                    </div>
                                    <div className="mb-2 text-blueGray-600">
                                        <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>Write Something
                                    </div>
                                </div>
                                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="text-xl text-purple3">Have a smile :)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </motion.div>
    );
}

export default ProfilePage;
