import { Search, Mail, Phone, Sun } from 'lucide-react'
import { ModeToggle } from './mode-toggle'

export default function Topbar() {
  return (
    <div className="bg-[#222222] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-2">
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544A8.127 8.127 0 015.5 16.898a5.778 5.778 0 004.252-1.189 2.879 2.879 0 01-2.684-1.995 2.88 2.88 0 001.298-.049c-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359a2.877 2.877 0 01-.889-3.835 8.153 8.153 0 005.92 3.001 2.876 2.876 0 014.895-2.62 5.73 5.73 0 001.824-.697 2.884 2.884 0 01-1.262 1.588 5.73 5.73 0 001.649-.453 5.765 5.765 0 01-1.434 1.49z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Search Bar - Hidden on Mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Enter Your search..."
                className="w-full py-1 px-4 pr-10 rounded bg-[#333333] text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Contact Info - Hidden on Mobile */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+12522445566" className="flex items-center space-x-2 hover:text-gray-300">
              <Phone className="w-4 h-4" />
              <span>+1252224455666</span>
            </a>
            <a href="mailto:info@kidscenter.com" className="flex items-center space-x-2 hover:text-gray-300">
              <Mail className="w-4 h-4" />
              <span>info@kidscenter.com</span>
            </a>
           <ModeToggle className='bg-[#222222] hover:bg-[#222222]/80 !text-white !outline-none !border-none'/>
          </div>

          {/* Logo */}
          <div className="text-xl font-bold text-pink-500 md:hidden ">
          <ModeToggle className='bg-[#222222] hover:bg-[#222222]/80 !text-white !outline-none !border-none'/>
          </div>
        </div>
      </div>
    </div>
  )
}

