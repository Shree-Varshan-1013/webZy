import { useState, useEffect } from 'react';
import DataCard from './DataCard';
import UserData from './UserData';
// import Search from './Search';
import { motion, AnimatePresence } from 'framer-motion';
// import AddAdmin from './AddAdmin';
import PropTypes from 'prop-types';
import AddPlan from './AddPlan';
import PaymentHistory from './RechargeHistory';
import Addon from './Addon';
import OverAll from './OverAll';

const AdminSideBarContent = ({ activeLink, userName }) => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        const contentMap = {
            link1: <DataCard userName={userName} />,
            link2: <OverAll userName={userName} />,
            link4: <PaymentHistory userName={userName} />,
            link5: <UserData userName={userName} />,
        };
        setContent(contentMap[activeLink]);
    }, [activeLink]);

    return (
        <AnimatePresence mode='wait'>
            <motion.div key={activeLink}
                initial={{ opacity: 0, y: 50 }} // Start from bottom
                animate={{ opacity: 1, y: 0 }} // Move up to original position
                exit={{ opacity: 0, y: -50 }} // Exit by moving back down
                transition={{ duration: 0.5 }}
                className="w-full block dark:bg-slate-900">
                {content}
            </motion.div>
        </AnimatePresence>
    );
}

AdminSideBarContent.propTypes = {
    activeLink: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired
}

export default AdminSideBarContent;
