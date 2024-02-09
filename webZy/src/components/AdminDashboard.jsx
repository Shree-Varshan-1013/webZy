import AdminSideBar from "./AdminSideBar"
import Card from "./Card"
import DataCard from "./DataCard"
import Unauthorize from './Unauthorize';
import MyChart from './MyChart';

const AdminDashboard = ({ role }) => {

    return (
        <div className="block h-150">
            {
                role === "ADMIN" ? (
                    <div className="flex flex-row">
                        <AdminSideBar />
                        <DataCard />
                    </div>
                ) : (
                    <Unauthorize /> 
                )
            }

        </div>
    )
}

export default AdminDashboard