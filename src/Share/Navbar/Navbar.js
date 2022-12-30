import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { IoIosListBox } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='h-14 bg-indigo-200 max-w-7xl mx-auto rounded-full flex justify-between items-center px-5 m-2 text-indigo-900'>
            <a href="#a" className='font-bold text-lg'>Milky Tech</a>
            <ul className='flex items-center gap-2'>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/top-rated'>Top Rated</Link>
                </li>
                <li className='bg-indigo-500 p-2 rounded-full'>
                    <Link to='/wishlist'>
                        <IoIosListBox className='text-white' />
                    </Link>
                </li>
                <li className='bg-indigo-500 p-2 rounded-full'>
                    <Link to='/cart'>
                        <BsFillCartFill className='text-white' />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;