import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
];



const NavBar = () => {
    const [open, setOpen] = useState(false)

    const links = navLinks.map(route =>
        <li className='mr-5 px-2'>
            <a href={route.path}>{route.name}</a>
        </li>)

    return (
        <nav className='flex justify-between items-center mx-10 m-4'>
            <span className='flex items-center' onClick={() => setOpen(!open)}>
                {
                    open ?
                        <X className='md:hidden'></X> :
                        <Menu className='md:hidden'></Menu>
                }
                <ul className={`md:hidden absolute duration-1000 text-black bg-amber-200 ${open ? 'top-13' : '-top-40'}`}>
                    {
                        links
                    }
                </ul>
                <h3 className='font-bold text-xl ml-2'>My Navbar</h3>
            </span>
            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>
            <button className='btn'>Sign In</button>
        </nav>
    );
};

export default NavBar;