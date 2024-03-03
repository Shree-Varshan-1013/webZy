import { useEffect, useState } from 'react'
import { GiTrashCan } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import AdminService from '../../services/AdminService';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
const UserData = ({ userName }) => {

    const { accessToken } = useSelector(state => state.global);

    const [searchTerm, setSearchTerm] = useState('');

    const [users, setUsers] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 4;

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const triggerSearch = () => {
        // const res = AdminService
    };

    useEffect(() => {
        fetchUsers();
    }, [currentPage]);

    const fetchUsers = async () => {
        try {
            const res = await AdminService.getUsersInfos(accessToken);
            setUsers(res.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    // Calculate indexes for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <>
            <div className=" dark:bg-slate-900 w-full h-screen" style={{ backgroundImage: "url(/img/bottom3.svg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className='pl-4 pr-4'>
                    <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
                        <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center p-3">
                            <div className="capitalize">
                                <nav aria-label="breadcrumb" className="w-max">
                                    <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
                                        <li className="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
                                            <a href="#">
                                                <p className="block antialiased font-anuphan text-sm leading-normal dark:text-purple4 text-purple2 font-normal transition-all hover:opacity-100">dashboard</p>
                                            </a>
                                            <span className="text-gray-500 text-sm antialiased font-anuphan font-normal leading-normal mx-2 pointer-events-none select-none">/</span>
                                        </li>
                                        <li className="flex items-center text-white-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-purple3">
                                            <p className="block antialiased font-anuphan text-sm leading-normal text-black font-normal dark:text-white">User</p>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="flex items-center">
                                <a>
                                    <span className="font-anuphan">{userName}</span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="">
                        <div className="container mx-auto px-4 sm:px-8 mt-5">
                            <div className="overflow-y-auto max-h-screen">
                                <table className="min-w-full leading-normal font-anuphan">
                                    <thead>
                                        <tr>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                UserName
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Mobile Number
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Role
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            currentUsers.map((user) => {
                                                return <tr key={user.id}>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className="flex items-center">
                                                            <div className="ml-3">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                    {user.userName}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">{user.email}</p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {user.mobileNumber}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        {
                                                            user.role[0].roleName === "ADMIN" ? <span
                                                                className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                                                <span aria-hidden
                                                                    className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                                                <span className="relative">ADMIN</span>
                                                            </span> : (<span
                                                                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                <span aria-hidden
                                                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                                <span className="relative">CUSTOMER</span>
                                                            </span>)
                                                        }
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                                <div
                                    className="px-5 py-2 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                    <span className="text-xs xs:text-sm text-gray-900">
                                        Showing 1 to 4 of 50 Entries
                                    </span>
                                    <div className="inline-flex mt-2 xs:mt-0">
                                        <button
                                            onClick={prevPage} disabled={currentPage === 1}
                                            className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                            Prev
                                        </button>
                                        <button
                                            onClick={nextPage} disabled={indexOfLastItem >= users.length}
                                            className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserData;