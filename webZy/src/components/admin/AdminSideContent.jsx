import { useState, useEffect } from 'react';
import DataCard from './DataCard';
import UserData from './UserData';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import PaymentHistory from './RechargeHistory';
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
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }} 
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
