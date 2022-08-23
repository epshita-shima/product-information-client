import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
const ItemInfo = () => {
    const [infoList, setInfoList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/info')
            .then(res => res.json())
            .then(data => setInfoList(data));
    }, [])
    return (
        <div className='container mx-auto h-screen '>
            <h2 className='text-4xl text-zinc-800 font-semibold text-center mt-10'>Category and Unit Dropdown List</h2>
            <div className='grid grid-cols-2 gap-4 items-center mt-10'>
                <div class="dropdown">
                    <label tabindex="0" class="btn-ghost bg-gray-200 m-1 p-3 text-black block text-center">Sub-Category name <FontAwesomeIcon className='text-black ml-2 text-xl text-center' icon={faSortDown}></FontAwesomeIcon></label>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full">

                        {
                            infoList.map(category => <li className='hover:bg-primary hover:text-white mb-3 p-3 text-xl border'>{category.insertCategory}</li>)
                        }

                    </ul>
                </div>
                <div class="dropdown">
                    <label tabindex="0" class="btn-ghost bg-gray-200 m-1 p-3 text-black block text-center">Sub-Category name <FontAwesomeIcon className='text-black ml-2 text-xl text-center' icon={faSortDown}></FontAwesomeIcon></label>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full">
                        {
                            infoList.map(category => <li className='hover:bg-primary hover:text-white mb-3 p-3 text-xl border'>{category.insertUnitName}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ItemInfo;