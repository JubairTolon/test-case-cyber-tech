import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { CgMenuRightAlt } from 'react-icons/cg';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';

const Navbar = ({ setSidebarOpen }) => {
    const [menuOpen, setMenuOpen] = useState('sm:scale-x-0');

    const navMenus = [
        {
            title: 'Home',
            pathname: '/'
        },
        {
            title: 'About',
            pathname: '/about'
        },
        {
            title: 'Blog',
            pathname: '/blog'
        },
        {
            title: 'Contact',
            pathname: '/contact'
        },
    ]
    return (
        <>
            <nav className='bg-navback lg:h-20 sm:h-16 sticky top-0 w-full flex items-center justify-between px-8 z-10'>
                <button
                    onClick={() => { setMenuOpen('sm:scale-x-100'); setSidebarOpen('sm:scale-x-0') }}
                    className='text-text-primary text-md flex items-center sm:visible md:invisible active:text-gray-600'>
                    Menu<span className='text-2xl ml-1'><HiMenu /></span></button>
                <div className={`md:text-text-primary sm:text-navback sm:h-screen md:h-full text-center md:items-center sm:gap-y-6 sm:absolute md:static top-16 right-0 sm:bg-secondary md:bg-opacity-0 sm:w-5/12 mx-auto sm:flex sm:flex-col md:flex-row  md:justify-between text-xl md:flex md:w-3/6 lg:w-2/6 xl:w-2/6 sm:pt-20 md:pt-0 md:scale-x-100 ${menuOpen} duration-150 origin-right`}>
                    <span
                        onClick={() => setMenuOpen('scale-x-0')}
                        className='text-text-primary sm:block md:hidden text-2xl sm:absolute right-5 top-3'>
                        <RxCross2 />
                    </span>

                    {
                        navMenus.map((item, index) => {
                            return <NavLink
                                key={index}
                                onClick={() => { setMenuOpen('sm:scale-x-0') }}
                                to={item.pathname}
                                className={({ isActive }) => isActive ? "text-tertiary transition ease-in duration-150 w-full" : "w-full"
                                }>
                                {item.title}
                            </NavLink>
                        })
                    }
                </div>
                <button
                    onClick={() => { setSidebarOpen('scale-x-100'); setMenuOpen('sm:scale-x-0') }}
                    className='text-text-primary text-md flex items-center sm:visible md:invisible active:text-gray-600'>
                    Sidebar<span className='text-2xl ml-1'><CgMenuRightAlt /></span>
                </button>
            </nav >
        </>
    );
};

Navbar.propTypes = {
    setSidebarOpen: PropTypes.func.isRequired,
    sidebarOpen: PropTypes.string.isRequired
};

export default Navbar;