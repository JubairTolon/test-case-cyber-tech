import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';


const Sidebar = ({ children, setSidebarOpen, sidebarOpen }) => {
    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(false);
    const [item3, setItem3] = useState(false);

    return (
        <div className='flex'>
            <div className={`bg-primary sm:w-5/12 md:w-4/12 lg:w-3/12 h-screen pl-6 pr-2 pt-2 md:scale-x-100 origin-left  ease-in-out duration-150 sm:fixed md:static ${sidebarOpen}`}>
                <div className=''>
                    <span
                        className='text-text-primary justify-end text-2xl sm:flex md:hidden'
                        onClick={() => setSidebarOpen('scale-x-0')}>
                        <RxCross2 />
                    </span>
                    <div className='mt-12 font-semibold'>
                        <h1 className='mb-6 text-xl'>Sidebar</h1>
                        <div onClick={() => setItem1(!item1)} className='flex items-center px-3 py-2 bg-text-primary justify-between'>Item 1 <span className='text-2xl'>{!item1 ? <IoIosArrowDown /> : <IoIosArrowUp />}</span></div>
                        {item1 && <div className='flex justify-end'>
                            <div className='mt-2 flex flex-col gap-y-2 w-1/2'>
                                <Link className='px-4 py-2 bg-secondary' to='/'>Item 1 </Link>
                                <Link className='px-4 py-2 bg-secondary' to='/'>Item 2 </Link>
                            </div>
                        </div>}
                        <div onClick={() => setItem2(!item2)} className='flex items-center px-3 py-2 mt-2 bg-text-primary justify-between'>Item 2 <span className='text-2xl'>{!item2 ? <IoIosArrowDown /> : <IoIosArrowUp />}</span></div>
                        {item2 && <div className='flex justify-end'>
                            <div className='mt-2 flex flex-col gap-y-2 w-1/2'>
                                <Link className='px-4 py-2 bg-secondary' to='/'>Item 1 </Link>
                                <Link className='px-4 py-2 bg-secondary' to='/'>Item 2 </Link>
                            </div>
                        </div>}
                        <div onClick={() => setItem3(!item3)} className='flex items-center px-3 py-2 mt-2 bg-text-primary justify-between'>Item 3 <span className='text-2xl'>{!item3 ? <IoIosArrowDown /> : <IoIosArrowUp />}</span></div>
                        {item3 && <div className='flex justify-end'>
                            <div className='mt-2 flex flex-col gap-y-2 w-1/2'>
                                <Link className='px-4 py-2 bg-secondary' to='/'>Item 1 </Link>
                                <Link className='px-4 py-2 bg-secondary' to='/'>Item 2 </Link>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
            <main className='w-full'>{children}</main>
        </div>
    );
}
Sidebar.propTypes = {
    children: PropTypes.node.isRequired,
    setSidebarOpen: PropTypes.func.isRequired,
    sidebarOpen: PropTypes.string.isRequired
};
export default Sidebar;