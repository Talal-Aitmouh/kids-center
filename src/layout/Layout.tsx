import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Topbar from "@/components/TopBar"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="min-h-dvh flex-col flex">
            <Topbar/>
            <Navbar />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout