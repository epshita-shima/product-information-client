import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
const ItemInfoList = () => {

    const [infoList, setInfoList] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-peak-39009.herokuapp.com/info')
            .then(res => res.json())
            .then(data => setInfoList(data));
    }, [])

    const handleDelete = (id) => {
        const procced = window.confirm('are you sure want to delete?');
        if (procced) {
            console.log('delete item', id)
            const url = `https://shrouded-peak-39009.herokuapp.com/info/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('delete successful');
                        const remaining = infoList.filter(infoList => infoList._id != id);
                        setInfoList(remaining);
                    }
                })
        }
    }
    return (
        <div className='container mx-auto w-11/12 h-screen'>
            <h2 className='text-3xl font-bold text-center mt-10 mb-10 text-stone-900 '>Products Information</h2>
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
                                <th className='bg-[#4b5320] text-white'>{index + 1}</th>
                                <td className='bg-[#ffa6c8] text-white'>{a.insertType}</td>
                                <td className='bg-[#4b5320] text-white'>{a.insertName}</td>
                                <td className='bg-[#ffa6c8] text-white'>{a.insertCategory}</td>
                                <td className='bg-[#4b5320] text-white'>{a.unitData}</td>
                                <td className='bg-[#ffa6c8] text-white'>{a.insertStock}</td>
                                <td className='bg-[#4b5320] text-white'><Link to={`/update/${a._id}`}><button>Update</button></Link></td>
                                <td className='bg-red-800 text-white'><button onClick={() => handleDelete(a._id)} className='ml-4'>X</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ItemInfoList;