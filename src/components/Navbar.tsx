import { useTheme } from "@/context/theme-provider"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ImobileMenuProps } from "@/lib/Interfaces"
import { useLocation } from "react-router-dom"

function Navbar() {
    const { theme } = useTheme()
    const [resolvedTheme, setResolvedTheme] = useState(theme)
    const [isOpen, setIsOpen] = useState(false)
    const path = useLocation().pathname
    const links = [{
        name: 'Home',
        href: '#',
        current: path === '/'
    }, {
        name: 'About us',
        href: '#',
        current: path === '/about'
    }, {
        name: 'Courses',
        href: '#',
        current: path === '/courses'
    }, {
        name: 'Events',
        href: '#',
        current: path === '/events'
    }, {
        name: 'News',
        href: '#',
        current: path === '/news'
    }, {
        name: 'Teams',
        href: '#',
        current: path === '/teams'
    }, {
        name: 'Pages',
        href: '#',
        current: path === '/pages'
    }, {
        name: 'Contact us',
        href: '#',
        current: path === '/contact'
    }]

    useEffect(() => {
        if (theme === "system") {
            const handleSystemThemeChange = () => {
                setResolvedTheme(isSystemDark() ? "dark" : "light")
            }

            handleSystemThemeChange()
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .addEventListener("change", handleSystemThemeChange)

            return () =>
                window
                    .matchMedia("(prefers-color-scheme: dark)")
                    .removeEventListener("change", handleSystemThemeChange)
        } else {
            setResolvedTheme(theme)
        }
    }, [theme])

    const isSystemDark = () =>
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches

    
    return (
        <nav className="w-full max-w-full h-16 flex items-center">
            <div className="w-[50%] h-full flex items-center justify-center md:justify-start lg:justify-center md:px-5 lg:w-[30%]">
                {resolvedTheme === 'dark' ? <img src="/logo-white.png" className="w-[80%] md:w-[50%]" /> : <img src="/logo.png" className="w-[80%] md:w-[50%]" />}
            </div>
            <ul className="hidden lg:flex w-[70%] h-full items-center justify-center">
                {links.map((link, index) => (
                    <Tabs key={index} Active={link.current}>{link.name}</Tabs>
                ))}
            </ul>
            <div className="w-[50%] h-full flex items-center justify-end px-10 lg:hidden">
                <Menu onClick={() => setIsOpen(!isOpen)} className={resolvedTheme === 'dark' ? 'text-white' : 'text-black'} />
            </div>
            {isOpen && <MobileMenu resolvedTheme={resolvedTheme} links={links} click={() => setIsOpen(!isOpen)} className={resolvedTheme === 'dark' ? 'bg-slate-800 text-white' : 'bg-white text-black'} />}
        </nav>
    )
}

export default Navbar

const Tabs = ({ children, className, Active }: { children: React.ReactNode, className?: string, Active?: boolean }) => {
    return (
        <li className={`h-full w-32 flex font-bold uppercase items-center justify-center ${Active ? 'bg-nav-hover' : ''} cursor-pointer hover:bg-primary transition-all duration-150 ease-in-out ${className}`}>
            {children}
        </li>
    )
}

const MobileTabs = ({ children, className, Active }: { children: React.ReactNode, className?: string, Active?: boolean }) => {
    return (
        <li className={`text-xl font-semibold hover:border-b-2 hover:border-primary transition-all duration-200 ease-in-out uppercase ${Active ? 'border-b-2 border-primary' : ''} ${className}`}>
            {children}
        </li>
    )
}
const MobileMenu = ({ click, className, links, resolvedTheme }: ImobileMenuProps) => {

    return (
        <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            exit={{ height: 0 }}
            className={`w-full z-[100] h-[100dvh] absolute top-0 left-0 ${className} flex flex-col px-10`}>
            <div className="w-full h-28 flex items-center justify-between">
                {resolvedTheme === 'dark' ? <img src="/logo-white.png" className="w-[50%] md:w-[30%]" /> : <img src="/logo.png" className="w-[50%] md:w-[30%]" />}
                <X onClick={click} className="cursor-pointer" size={24} />
            </div>
            <ul className="w-full h-[60%] justify-center flex flex-col gap-10">
                {links.map((link, index) => (
                    <MobileTabs key={index} Active={link.current}>{link.name}</MobileTabs>
                ))}
            </ul>
        </motion.div>
    )

}
