import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Speedometer from './Speedometer';
import { useSelector } from 'react-redux';
import SignIn from './SignIn';

const VerifyRecharge = () => {

  const navigate = useNavigate();

  const { isLoggedIn } = useSelector(state => state.global);

  return (
    <motion.div
      initial={{ opacity: 0 }
      }
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {
        isLoggedIn ? (
          <section
            className="relative select-none"
            style={{ backgroundImage: "url(/img/top-up.svg)", backgroundSize: "cover" }}
          >
            <div
              className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
              style={{ backdropFilter: "blur(1px)" }}
            ></div>
            <div
              className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
              <div className="flex justify-between w-full">
                <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right bg-white dark:bg-slate-800 p-5 rounded-lg shadow-md">
                  <h1 className="sm:text-5xl text-2xl font-alfa dark:text-white">
                    Refill your balance
                    <strong className="block font-extrabold text-fuchsia-700 dark:text-fuchsia-500 mt-3"> With WebzY. </strong>
                  </h1>
                  <p className="mt-4 max-w-lg sm:text-xl/relaxed font-anuphan dark:text-white">
                    Ready to recharge? Who's the lucky recipient?
                  </p>
                  <div className='cursor-pointer mt-8 flex flex-wrap gap-4 text-center'>
                    <a onClick={() => navigate("/mobile-recharge/Jio")} className="relative rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300">
                      <span className="relative font-anuphan">Myself</span>
                    </a>
                    <a onClick={() => navigate("/mobile-recharge")} className="relative rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300">
                      <span className="relative font-anuphan">Others</span>
                    </a>
                  </div>
                </div>
                <div className=" bg-white dark:bg-slate-800 p-5 rounded-lg shadow-md ml-4">
                  <Speedometer />
                </div>
              </div>
            </div>
          </section>
        ) : (<SignIn />)
      }
    </motion.div >
  );
};

export default VerifyRecharge;
