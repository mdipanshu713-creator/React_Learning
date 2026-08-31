import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Outlet } from 'react-router-dom' // FIXED: Added this import

import './App.css'
import { Footer, Header } from './components'

function App() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        authService.getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login(userData))
                } else {
                    dispatch(logout())
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }, [dispatch])

    return !loading ? (
        <div className='min-h-screen flex flex-col justify-between bg-gray-400'>
            <div className='w-full'>
                <Header />
                <main className='py-4'>
                    <Outlet /> {/* FIXED: Uncommented this so your sub-pages actually display */}
                </main>
                <Footer />
            </div>
        </div>
    ) : null
}

export default App
