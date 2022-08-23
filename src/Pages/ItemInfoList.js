import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
const ItemInfoList = () => {

    const [infoList, setInfoList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/info')
            .then(res => res.json())
            .then(data => setInfoList(data));
    }, [])


    return (
        <div className='container mx-auto'>
            <h3 className='text-4xl font-bold text-center mt-10 mb-10 text-stone-900 uppercase'>Total info length: {infoList.length}</h3>
            <div class="overflow-x-auto">
                <table class="table w-full text-center">
                    <thead className=''>
                        <tr>
                            <th className='bg-zinc-800 text-white'>Sl no.</th>
                            <th className='bg-zinc-800 text-white'>Item type</th>
                            <th className='bg-zinc-800 text-white'>Item Name</th>
                            <th className='bg-zinc-800 text-white'>Sub category</th>
                            <th className='bg-zinc-800 text-white'>Unit name</th>
                            <th className='bg-zinc-800 text-white'>Stcok Info</th>
                            <th className='bg-zinc-800 text-white'>Update</th>
                            <th className='bg-zinc-800 text-white'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            infoList.map((a, index) => <tr>
                                <th className='bg-primary text-white'>{index + 1}</th>
                                <td className='bg-accent text-white'>{a.insertType}</td>
                                <td className='bg-primary text-white'>{a.insertName}</td>
                                <td className='bg-accent text-white'>{a.insertCategory}</td>
                                <td className='bg-primary text-white'>{a.insertUnitName}</td>
                                <td className='bg-accent text-white'>{a.insertStock}</td>
                                <td className='bg-primary text-white'><button>Update</button></td>
                                <td className='bg-red-800 text-white'><button className='ml-4'>X</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ItemInfoList;