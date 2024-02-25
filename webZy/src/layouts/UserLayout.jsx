import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const UserLayout = ({ component: Component }) => {

    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scrolling behavior
            });
        };
        scrollToTop();
    });

    return (
        <>
            <Header />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <div className='dark:bg-slate-900' style={{ backgroundImage: "url(/img/banner.svg)", backgroundSize: "cover" }}>
                    <Component />
                </div>
            </motion.div>
            <Footer />
        </>
    );
}

UserLayout.propTypes = {
    component: PropTypes.elementType.isRequired
}

export default UserLayout;

