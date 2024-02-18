import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { Toaster } from 'sonner';

const Profile = () => {

    const { userDetails } = useSelector((state) => state.global);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="flex flex-col justify-center items-center h-[100vh] dark:bg-slate-900" style={{ backgroundImage: "url(/img/circles.svg)", backgroundSize: "cover" }}>
                <Toaster position="top-center" theme="light" visibleToasts={2} richColors style={{ zIndex: 9999, marginTop: "50px" }} />
                <div className="relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white dark:bg-slate-800 border shadow-2xl dark:border-slate-800 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
                    <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
                        <img src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' className="absolute flex h-32 w-full justify-center rounded-xl bg-cover" />
                        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-purple3 dark:!border-navy-700">
                            <span className="text-white text-4xl font-bold">{userDetails.userName ? userDetails.userName.charAt(0).toUpperCase() : ''}</span>
                        </div>
                    </div>
                    <div className="mt-16 flex flex-col items-center">
                        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                            {userDetails.userName}
                        </h4>
                        <p className="text-base font-normal text-gray-600">{userDetails.role[0].roleName}</p>
                    </div>
                    <div className="mt-6 mb-3 flex flex-col">
                        <div className="flex flex-row items-center justify-center">
                            <p className="text-lg font-normal text-gray-600 pr-5">Email </p>
                            <p className="text-xl font-bold text-navy-700 dark:text-white">{userDetails.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Profile