import { useState } from "react";
import AdminSideBar from "./AdminSideBar"
import Unauthorize from '../Unauthorize';
import AdminSideBarContent from "./AdminSideContent";
import { useDispatch, useSelector } from "react-redux";
import { Toaster, toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { deleteRole, toggleLogin } from "../../config/GlobalSlice";
import { motion } from "framer-motion";
import PropTypes from 'prop-types'
const AdminDashboard = ({ role }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { userDetails } = useSelector(state => state.global);

    const [activeLink, setActiveLink] = useState("link1");

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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="block h-150">
                <Toaster position="top-center" theme="light" visibleToasts={2} richColors closeButton/>
                {
                    role === "ADMIN" ? (
                        <div className="flex flex-row dark:bg-slate-900" style={{ backgroundImage: "url(/img/bottom3.svg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                            <AdminSideBar setActiveLink={setActiveLink} eventLogout={eventLogout} />
                            <AdminSideBarContent activeLink={activeLink} userName={userDetails.userName} />
                        </div>
                    ) : (
                        <Unauthorize />
                    )
                }
            </div>
        </motion.div>
    )
}

AdminDashboard.propTypes = {
    role: PropTypes.string.isRequired
}


export default AdminDashboard