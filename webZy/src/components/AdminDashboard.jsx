import AdminSideBar from "./AdminSideBar"
import Card from "./Card"
import DataCard from "./DataCard"

const AdminDashboard = () => {

    return (
        <>
            <div className="flex flex-row">
                <AdminSideBar />
                <DataCard />
            </div>
        </>
    )
}

export default AdminDashboard