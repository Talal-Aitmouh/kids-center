import { FaFacebook, FaGooglePlus, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa"

const TopBar = () => {
    return (
        <>
            <header className="flex flex-col md:flex-row gap-4 bg-[hsla(0,0%,20%,1)] h-12 px-10 py-3 items-center justify-between">
                <div className="socials">
                    <div className="flex gap-4 border-x text-white px-3 py-2 border-gray-400">
                       <a href="" className="text-[18px]" target="_blank"><FaFacebook/></a>
                       <a href="" className="text-[18px]" target="_blank"><FaInstagram/></a>
                       <a href="" className="text-[18px]" target="_blank"><FaGooglePlus/></a>
                       <a href="" className="text-[18px]" target="_blank"><FaTwitter/></a>
                    </div>
                </div>
                <div className="info flex flex-1 justify-end flex-col md:flex-row gap-4 items-center">
                    <input type="text" placeholder="search" />
                    <div className="phone">
                        <FaPhone/>
                        <span className="text-white">+234 123 456 789</span>
                    </div>
<div className="email">
    
</div>

                </div>
            </header>
        </>
    )
}

export default TopBar