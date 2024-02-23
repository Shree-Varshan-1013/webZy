import { useEffect, useState } from 'react'
import { GiTrashCan } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import AdminService from '../../services/AdminService';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const RechargeHistory = ({ userName }) => {

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
                                            <p className="block antialiased font-anuphan text-sm leading-normal text-black font-normal dark:text-white">Recharge History</p>
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
                        <div className="my-1 flex sm:flex-row flex-col">
                            <div className="flex flex-row mb-1 sm:mb-0">
                                <div className="relative font-anuphan">
                                    <select
                                        className="h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                        <option>All</option>
                                        <option>Admin</option>
                                        <option>Users</option>
                                    </select>
                                    <div
                                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="block relative">
                                <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                        <path
                                            d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                        </path>
                                    </svg>
                                </span>
                                <input
                                    value={searchTerm}
                                    onChange={handleSearchInputChange}
                                    placeholder="Search"
                                    className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                            </div>
                        </div>
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
                                                Created at
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Role
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            currentUsers.map((user) => {
                                                return <tr key={user.id}>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 w-10 h-10">
                                                                <img className="w-full h-full rounded-full"
                                                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                                    alt="" />
                                                            </div>
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
                                                            {user.role[0].roleName}
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
                                                                <span className="relative">USER</span>
                                                            </span>)
                                                        }
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white">
                                                        <div className='flex justify-evenly'>
                                                            <FaRegEye fontSize={29} className='mt-1' />
                                                            <GiTrashCan fontSize={30} />
                                                        </div>
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

RechargeHistory.propTypes = {
    userName: PropTypes.string.isRequired
}


export default RechargeHistory;