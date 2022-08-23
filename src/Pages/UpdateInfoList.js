import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const UpdateInfoList = () => {
    const { id } = useParams();
    const [infoList, setInfoList] = useState([]);

    useEffect(() => {
        fetch(`https://shrouded-peak-39009.herokuapp.com/update/${id}`)
            .then(res => res.json())
            .then(data => setInfoList(data));
    }, [])

    const handleUpdateInfo = (e) => {
        e.preventDefault();
        const insertType = e.target.itemType.value;
        const insertName = e.target.itemName.value;
        const insertCategory = e.target.categoryName.value;
        const insertUnitName = e.target.unitName.value;
        const insertStock = e.target.stockInfo.value;
        console.log(insertType, insertName, insertCategory, insertUnitName, insertStock)

        const productInfo = { insertType, insertName, insertCategory, insertUnitName, insertStock };
        fetch(`https://shrouded-peak-39009.herokuapp.com/update/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('update successfully');
            })
        e.target.reset();

    }
    return (
        <div className='container mx-auto h-screen w-9/12'>
            <h2 className='text-3xl font-bold text-center mt-10 mb-10 text-stone-900 '>Updating Item Name: {infoList.insertName}</h2>
            <form className='grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center' onSubmit={handleUpdateInfo}>
                <div>
                    <label htmlFor="" className='text-black font-semibold'>Item type</label>
                    <input type="text"
                        name='itemType'
                        placeholder="Type here"
                        required
                        class="input border-1 border-[#4b5320] bg-white h-10 w-full max-w-xs" />
                </div>
                <div>
                    <label htmlFor="" className='text-black font-semibold'>Item name</label>
                    <input type="text"
                        name='itemName'
                        placeholder="Type here"
                        required
                        class="input border-1 border-[#4b5320] bg-white  h-10 w-full max-w-xs" />
                </div>

                <div>
                    <label htmlFor="" className='text-black font-semibold'>Sub category</label>
                    <input type="text"
                        name='categoryName'
                        placeholder="Type here"
                        required
                        class="input border-1 border-[#4b5320] bg-white  h-10 w-full max-w-xs" />
                </div>
                <div>
                    <label htmlFor="" className='text-black font-semibold'>Unit name</label>
                    <input type="text"
                        name='unitName'
                        placeholder="Type here"
                        required
                        class="input border-1 border-[#4b5320] bg-white  h-10 w-full max-w-xs" />
                </div>
                <div>
                    <label htmlFor="" className='text-black font-semibold'>Stock Limit</label>
                    <input type="text" name='stockInfo' placeholder="Stock limit" required class="input border-1 border-[#4b5320] bg-white  h-10 w-full max-w-xs" />
                </div>
                <div className='mt-5'>
                    <input type="submit" value='Submit' className='btn-sm  bg-[#4b5320] text-white h-10 rounded' />
                    <Link to='/itemlist'><button className='btn-sm border-none bg-red-800 hover:bg-red-700 text-white h-10 rounded ml-2'>Cancle</button></Link>
                </div>
            </form>
        </div>
    );
};

export default UpdateInfoList;