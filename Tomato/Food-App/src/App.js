import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../src/components/Navbar/Navbar'
import Home from '../src/pages/Home/Home'
import Cart from '../src/pages/Cart/Cart'
import PlaceOrder from '../src/pages/PlaceOder/PlaceOrder'
import Footer from '../src/components/Footer/Footer'
import Login from '../src/components/loginpopup/Login'

export default function App() {

    const [showLogin, setShowLogin] = useState(false)
    console.log(showLogin)
    return (
        <>
            <Navbar setState={setShowLogin} />
            {showLogin ? <Login setState={setShowLogin} /> : <></>}
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/order" element={<PlaceOrder />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
