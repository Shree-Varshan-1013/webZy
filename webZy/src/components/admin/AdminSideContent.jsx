import React, { useState, useEffect } from 'react';
import DataCard from './DataCard';
import UserData from './UserData';
import Search from './Search';
import { motion, AnimatePresence } from 'framer-motion';
import AddAdmin from './AddAdmin';

const AdminSideBarContent = ({ activeLink }) => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        const contentMap = {
            link1: <DataCard />,
            link2: <AddAdmin />,
            link3: <UserData />,
            link4: <Search />
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
                className="w-full block dark:bg-slate-900 overflow-hidden">
                {content}
            </motion.div>
        </AnimatePresence>
    );
}

export default AdminSideBarContent;
