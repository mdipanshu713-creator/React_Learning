import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {

    const dispatch = useDispatch()

    const LogoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

    return (
        <button
            onClick={LogoutHandler}
            className="border border-red-400 text-red-400 px-5 py-2 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
        >
            Logout
        </button>
    )
}

export default LogoutBtn