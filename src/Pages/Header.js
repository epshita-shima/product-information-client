import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItems = <>
        <li><Link to=''>ItemInfo</Link></li>
        <li><Link to='/iteminfocreate'>ItemInfoCreate</Link></li>
        <li><Link to='/itemlist'>ItemInfoList</Link></li>

    </>
    return (
        <div className='bg-secondary'>
            <div class="navbar bg-secondary container mx-auto shadow-lg">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary">
                            {menuItems}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-2xl text-primary font-serif font-bold">information</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 text-primary text-xl font-bold">
                        {menuItems}
                    </ul>
                </div>
                <div class="navbar-end">
                    <a class="btn btn-primary">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Header;