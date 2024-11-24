import { useState } from 'react';
import { Facebook, Twitter, Linkedin, Search, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTopBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-slate-800 text-white py-2 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={toggleTopBar}
          className="sm:hidden text-white focus:outline-none"
        >
          {isOpen ? 'Close' : 'Open'} Menu
        </button>
        <div className={`flex-col sm:flex-row items-center justify-between gap-4 ${isOpen ? 'flex' : 'hidden'} sm:flex`}></div>
          <div className="flex space-x-4 mb-2 md:mb-0">
            <Link to="#" className="hover:text-slate-300">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link to="#" className="hover:text-slate-300">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link to="#" className="hover:text-slate-300">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-4 items-center">
            <div className="relative mb-2 md:mb-0 w-full md:w-auto">
              <input
                type="text"
                placeholder="Enter your search..."
                className="bg-white text-slate-800 rounded-sm py-1 px-4 pr-10 w-full md:w-64 lg:w-80"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            </div>
            <div className="flex items-center mb-1 md:mb-0">
              <Phone size={16} className="mr-2" />
              <span>+12125224566</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <span>info@kidscenter.com</span>
            </div>
          </div>
        </div>
      </div>
  );
}
