"use client"

import { useEffect, useMemo, useState } from "react";
import LoginModal from "../login-contoh";

export default function LaySidebar(){
    const [isLoginModalShow, setIsLoginModalShow] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleSuccessLogin = () => {
        console.log("login berhasil")
        setIsLoggedIn(true)
    }

    const handleSuccessLogout = () => {
        console.log("logout berhasil")
        localStorage.removeItem('token')
        setIsLoggedIn(false)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            setIsLoggedIn(true)
        }
    }, [])

    const handleLogClick = () => {
        if(isLoggedIn){
            handleSuccessLogout()
        }else{
            setIsLoginModalShow(true)
        }
    }

    return (
        <aside className="w-64 bg-gray-100 p-4">
            <LoginModal isShow={isLoginModalShow} onClose={() => setIsLoginModalShow(false)} onSuccessLogin={handleSuccessLogin} />
            <h2 className="font-bold mb-4">Sidebar</h2>
            <div className="flex-row">
                <ul className="space-y-2">
                    <li><a href="/">HomePage</a></li>
                    <li><a href="/dashboard/profil">Profil</a></li>
                    <li><span className="cursor-pointer" onClick={handleLogClick}>{isLoggedIn? 'Logout' : 'Login'}</span></li>
                </ul>
                <div className="flex-auto">

                </div>
            </div>
        </aside>
    )
}