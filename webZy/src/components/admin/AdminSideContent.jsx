import React from 'react'
import DataCard from './DataCard';
import UserData from './UserData';
import Search from './Search';

const AdminSideBarContent = ({ activeLink }) => {

    const contentMap = {
        link1: <DataCard />,
        link2: <UserData />,
        link3: <Search />
    };

    return <div className="w-full block dark:bg-slate-900">{contentMap[activeLink]}</div>;

}

export default AdminSideBarContent;