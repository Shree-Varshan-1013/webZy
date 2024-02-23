
import { useNavigate } from 'react-router-dom';

const Content = () => {

    const navigate = useNavigate();

    return (
        <div className="select-none">
            <section className="text-gray-600 body-font dark:bg-slate-900" style={{ backgroundImage: "url(/img/bottom3.svg)", backgroundSize: "cover" }} name="services">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs dark:text-caramel tracking-widest mb-1 font-anuphan font-semibold">BUILT WITH AWESOME TECHNOLOGIES</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-caramel font-basker">Rapid Recharge Hub</h1>
                        <p className="font-anuphan lg:w-2/3 mx-auto leading-relaxed text-base dark:text-caramel2 dark:text-md ">convenient and efficient destination for swiftly replenishing mobile devices, making it an appealing choice for users seeking quick and reliable recharge services.</p>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-900 dark:text-caramel font-anuphan title-font mb-2 font-bold">Great Dealings</h2>
                            <p className="leading-relaxed text-base mb-4 font-anuphan dark:text-caramel">Great dealings in mobile recharges often involve personalized offers.</p>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-anuphan title-font mb-2 dark:text-caramel font-bold">Discounts</h2>
                            <p className="leading-relaxed text-base mb-4 font-anuphan dark:text-caramel">Enjoy tangible cost savings and enhanced affordability, service providers benefit from increased user engagement</p>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-anuphan mb-2 dark:text-caramel font-bold">One Tap Recharge</h2>
                            <p className="leading-relaxed text-base mb-4 font-anuphan dark:text-caramel">Streamlines the entire mobile recharge process, empowering users to replenish their talk time, data, or SMS balance.</p>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-anuphan font-bold title-font mb-2 dark:text-caramel">Cashbacks</h2>
                            <p className="leading-relaxed text-base mb-4 font-anuphan dark:text-caramel">Users can enjoy cashback rewards across a wide range of recharge denominations and operators.</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-8'>
                        <a onClick={() => navigate('/mobile-recharge')} className="relative rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300">
                            <span className="relative">Explore Now</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Content