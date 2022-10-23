import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [users, seUsers] = useState();
    const [query, setQuery] = useState('')

    useEffect(() => {
        const postLoad = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            seUsers(res)
        }
        postLoad();
    }, [])
    return (
        <div class="drawer drawer-mobile bg-white">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <div className='w-full px-4 mt-0 lg:mt-6'>
                    <div className="p-4 shadow flex mt-4 lg:mt-12 gap-2 justify-center">
                        <input onChange={(e) => setQuery(e.target.value)} type="text" id='myInput' placeholder="Search by name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="overflow-y-auto block max-h-screen w-full mt-2">
                        <table className="table w-full ">
                            <thead className="sticky top-0 bg-white">
                                <tr className="text-black ">
                                    <th>No</th>
                                    <th>name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.data?.filter(user => user.name.toLowerCase().includes(query)).map((user) => (
                                    <tr key={user.id} className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {user.id}
                                        </th>
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {user.name}
                                        </th>
                                        <td className="py-4 px-6">
                                            {user.username}
                                        </td>
                                        <td className="py-4 px-6">
                                            {user.email}
                                        </td>
                                        <td className="py-4 px-6 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>

                                        </td>

                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="drawer-side ">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 mb-2  overflow-y-auto w-80 bg-base-300 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li className='mb-2'><a >Searhcing name</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;