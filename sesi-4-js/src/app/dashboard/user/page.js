"use client"

import AddUserContohModal from '@/components/user-contoh/add-modal-contoh'
import { useEffect, useState } from 'react'
import {api} from '@/lib/axios'

export default function DashboardUserPage(){
    const [users, setUsers] = useState([])
    const [isAddModalShow, setIsModalShow] = useState(false)

    const fetchUsers = async () => {
        try {
            const response = await api.get('/users')
            setUsers(response.data)
        } catch (error) {
            
        }
    }

    // reload halaman 1x kali
    useEffect(() => {
        fetchUsers()
    }, [])

    const handleAddUserModalClose = () => {
        setIsModalShow(false)
    }

    const handleTambahUserButtonClick = () => {
        setIsModalShow(true)
    }

    const addUserData = async(userData) => {
        try {
           const response = await api.post('/users', userData)
           alert(response.message)
           fetchUsers()
        } catch (error) {
            alert(error.message)
        }
    }

    const deleteUserData = async(id, name) => {
        const hasilKonfirmasi = confirm(`yakin ingin menghapus ${name}?`)
        if(hasilKonfirmasi){
            try {
                const response = await api.delete(`/users/${id}`)
                alert(response.message)
                fetchUsers()
            } catch (error) {
                alert(error.message)
            }
        }
    }
    return (
        <div className="p-2">
            Ini Adalah Halaman Users

            <div className="overflow-x-auto p-4">
                <AddUserContohModal isShow={isAddModalShow} onClose={handleAddUserModalClose} onSubmit={addUserData}/>
                <div>
                    <button onClick={handleTambahUserButtonClick} className="bg-green-700 text-white rounded-md border hover:bg-green-800 p-2">Tambah User</button>
                </div>
                <div className="pt-4">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-300 shadow-md rounded-md pt-4">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">No</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Name</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Email</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Role</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Aksi</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {users.map((el, index) => (
                            <tr key={el._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                <td className="px-4 py-2 text-sm text-gray-800">{index + 1}</td>
                                <td className="px-4 py-2 text-sm text-gray-800">{el.name}</td>
                                <td className="px-4 py-2 text-sm text-gray-800">{el.email}</td>
                                <td className="px-4 py-2 text-sm text-gray-800">{el.role}</td>
                                <td className="px-4 py-2 text-sm text-gray-800"><span className="cursor-pointer text-blue-800" onClick={()=>deleteUserData(el._id, el.name)}>[hapus]</span></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}