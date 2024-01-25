import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import { logo } from '../assets'
import { links } from '../assets/constants'

const NavLinks = ( handleClick ) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink className="flex flex-row justify-start item-center my-8 text-sm font-medium text-gray-500 transition-colors duration-300 hover:text-green-300"
      key={item.name}
      to={item.to}
      onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2"/>
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  return (
    <>
    <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-gradient-to-br from-[#232345] to-[#0a1128]">
      <img src={logo} alt="logo" className="w-full h-20 object-contain"/>
      <NavLinks />
    </div>

    <div className="absolute md:hidden block top-6 right-3 transition-all duration-300 hover:text-yellow-400 hover:scale-110">
  {mobileMenuOpen ? (
    <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(false)} />
  ) : (
    <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(true)} />
  )}

    </div>
    <div className={`absolute top-0 h-screen w2/3 bg-gradient-to-tl from-white/10 to-[#232345] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
    <Link to="/" className="block">
      <img src={logo} alt="logo" className="w-full h-20 object-contain"/> 
      </Link>
      <NavLinks />
    </div>

    </>
  )
};

export default Sidebar;
