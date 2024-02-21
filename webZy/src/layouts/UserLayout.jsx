import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { motion } from 'framer-motion';

const UserLayout = ({ component: Component }) => {
    return (
        <>
            <Header />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <Component />
            </motion.div>
            <Footer />
        </>
    );
}

UserLayout.propTypes = {
    component: PropTypes.elementType.isRequired
}

export default UserLayout;

