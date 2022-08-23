import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItems = <>
        <li><Link to=''>ItemInfo</Link></li>
        <li><Link to='/iteminfocreate'>ItemInfoCreate</Link></li>
        <li><Link to='/itemlist'>ItemInfoList</Link></li>

    </>
    return (
        <div className=''>
            <div class="navbar bg-[##D3D3D3] container mx-auto shadow-lg">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 text-[#4b5320]">
                            {menuItems}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl text-[#4b5320] font-serif font-bold">information</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 text-[#4b5320] font-bold">
                        {menuItems}
                    </ul>
                </div>
                <div class="navbar-end">
                    <button className='btn-sm bg-[#4b5320] text-white h-10 rounded'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;