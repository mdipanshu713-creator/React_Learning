import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Home from './components/Home/Home'

// import { Outlet } from 'react-router-dom' का इस्तेमाल Parent Layout के अंदर Child component (पेज) को दिखाने के लिए किया जाता है।
// यह Nested Routing (एक पेज के अंदर दूसरा पेज) बनाने के काम आता है। इसकी मदद से Header, Sidebar या Navbar स्क्रीन पर अपनी जगह रहते हैं, और सिर्फ बीच का कंटेंट बदलता है।

function Layout() {
    return (
        <>

     <Header/>
     
     <Outlet/>
     <Footer/>

        </>
    )
}

export default Layout
