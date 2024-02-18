import { useState } from "react";
import AdminSideBar from "./AdminSideBar"
import Unauthorize from '../Unauthorize';
import AdminSideBarContent from "./AdminSideContent";
import { useDispatch } from "react-redux";
import {Toaster, toast} from 'sonner';
import { useNavigate } from 'react-router-dom';
import { deleteRole, toggleLogin } from "../../config/GlobalSlice";

const AdminDashboard = ({ role }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [activeLink, setActiveLink] = useState("link1");

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const getToast = () => {
        toast.loading("Logging you out !");
        setTimeout(() => {
            toast.success("Successfully logged out see you next time !");
            dispatch(toggleLogin());
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }, 2000);
    }

    const eventLogout = () => {
        getToast();
        setTimeout(() => {
            dispatch(deleteRole());
            navigate('/');
        }, 5000);
    }

    return (
        <div className="block h-150">
             <Toaster position="top-center" theme="light" visibleToasts={2} richColors />
            {
                role === "ADMIN" ? (
                    <div className="flex flex-row dark:bg-slate-900" style={{ backgroundImage: "url(/img/bottom3.svg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                        <AdminSideBar setActiveLink={setActiveLink} />
                        <AdminSideBarContent activeLink={activeLink} eventLogout={eventLogout}/>
                    </div>
                ) : (
                    <Unauthorize />
                )
            }

        </div>
    )
}

export default AdminDashboard