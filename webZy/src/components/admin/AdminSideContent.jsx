import React, { useState, useEffect } from 'react';
import DataCard from './DataCard';
import UserData from './UserData';
import Search from './Search';
import { motion, AnimatePresence } from 'framer-motion';
import AddAdmin from './AddAdmin';

const AdminSideBarContent = ({ activeLink, eventLogout }) => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        const contentMap = {
            link1: <DataCard eventLogout={eventLogout}/>,
            link2: <AddAdmin eventLogout={eventLogout}/>,
            link3: <UserData eventLogout={eventLogout}/>,
            link4: <Search  eventLogout={eventLogout}/>
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

export default AdminSideBarContent;
