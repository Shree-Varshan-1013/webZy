import Pricing from "./Pricing"

const Blogs = () => {
    return (
        <div>
            {/* <Pricing /> */}
            <section className="select-none text-gray-600 body-font overflow-hidden dark:bg-slate-900" style={{ backgroundImage: "url(/img/trio.svg)", backgroundSize: "cover", backgroundPositionY: "center" }} name="about">
                <div className="container px-5 py-24 mx-auto backdrop-blur-lg">
                    <div className="flex flex-wrap -m-12">
                        <div className="p-12 md:w-1/2 flex flex-col items-start dark:text-caramel font-anuphan">
                            <span className="py-1 px-2 rounded bg-purple-50 text-purple-500 text-2xl font-medium tracking-widest">Operators</span>
                            <h2 className="sm:text-3xl text-2xl title-font text-gray-900 font-bold dark:text-caramel mt-4 mb-4">Power up with seamless connectivity recharge with ease, anytime, anywhere!</h2>
                            <p className="leading-relaxed mb-8 dark:text-white">
                                In the fast-paced world of telecommunications, mobile recharge operators serve as the backbone, ensuring uninterrupted connectivity for millions of users worldwide. These operators facilitate the essential process of adding credit to mobile accounts, enabling individuals to make calls, send messages, and access mobile data services.</p>
                            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                            </div>
                        </div>
                        <div className="p-12 md:w-1/2 flex flex-col items-start dark:text-white font-anuphan">
                            <span className="inline-block py-1 px-2 rounded bg-purple-50 text-purple-500 text-2xl font-medium tracking-widest k">Plans</span>
                            <h2 className="sm:text-3xl text-2xl title-font text-gray-900 font-bold mt-4 mb-4 dark:text-caramel">
                                Connect with our diverse range of prepaid and postpaid mobile plans</h2>
                            <p className="leading-relaxed mb-8">Encapsulates the idea of enhancing your ability to stay connected through our mobile recharge plans. Whether you opt for prepaid or postpaid, our plans are designed to meet your communication needs effectively. With prepaid plans, you have the flexibility to control your usage and expenses, while postpaid plans offer convenience with monthly billing cycles. </p>
                            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="select-none relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-basker">Subscribe to our Newsletter</h2>
                            <p className="mt-4 text-lg leading-8 text-gray-300 font-anuphan">Join our community of enthusiasts! Subscribe now for the latest updates delivered straight to your inbox.</p>
                            <div className="mt-6 flex max-w-md gap-x-4 font-anuphan">
                                <label className="sr-only">Email address</label>
                                <input id="email-address" name="email" type="email" autoComplete="email" required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm  ring-white/10 focus:ring-2 focus:ring-offset-4 focus:ring-offset-purple2 focus:ring-purple sm:text-sm sm:leading-6" placeholder="Enter your email" />
                                <a href="#_" className="relative rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300">
                                    <span className="relative">Subscribe Now</span>
                                </a>
                            </div>
                        </div>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                    </svg>
                                </div>
                                <dt className="mt-4 font-semibold text-white">Weekly Updates</dt>
                                <dd className="mt-2 leading-7 text-gray-400">We will update the status on time or any other relevant updates or announcements</dd>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                                    </svg>
                                </div>
                                <dt className="mt-4 font-semibold text-white">No spam</dt>
                                <dd className="mt-2 leading-7 text-gray-400">
                                    Avoiding spam involves refraining from sending unsolicited or irrelevant messages to recipients</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                    <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                </div>
            </div>
        </div>
    )
}

export default Blogs