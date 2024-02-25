import React, { useState } from 'react';
import Card from '../Card';

const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        "Tab No.1",
        "Tab No.2",
        "Tab No.3",
    ];

    return (
        <div className="flex justify-center items-center w-full">
            <div style={{width:"100%"}}>
                <ul className="flex justify-center items-center my-4 ">
                    {tabs.map((tab, index) => (
                        <li key={index} className={`cursor-pointer py-3 px-15 rounded transition text-center ${activeTab === index ? 'bg-green-500 text-white' : ' text-gray-500'}`} onClick={() => setActiveTab(index)} style={{width:"100%"}}>
                            {tab}
                        </li>
                    ))}
                </ul>
                <div className="w- bg-white p-16 text-center mx-auto border">
                    {tabs.map((tab, index) => (
                        <div key={index} style={{ display: activeTab === index ? 'block' : 'none' }}>
                            {activeTab === index && <Card />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TabsComponent;
