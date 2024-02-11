import { useState } from "react";
import AdminSideBar from "./AdminSideBar"
import Unauthorize from '../Unauthorize';
import AdminSideBarContent from "./AdminSideContent";

const AdminDashboard = ({ role }) => {

    const [activeLink, setActiveLink] = useState("link1"); 

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="block h-150">
            {
                role === "ADMIN" ? (
                    <div className="flex flex-row">
                        <AdminSideBar setActiveLink={setActiveLink} />
                        <AdminSideBarContent activeLink={activeLink} />
                    </div>
                ) : (
                    <Unauthorize />
                )
            }

        </div>
    )
}

export default AdminDashboard