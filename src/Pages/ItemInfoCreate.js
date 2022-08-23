import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSortDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const ItemInfoCreate = () => {


    const [info, setInfo] = useState([{ typeName: '', itemName: '', categoryName: '', unitName: '', stockinfo: '' }]);
    console.log(info);

    const addList = () => {
        setInfo([...info, { typeName: '', itemName: '', categoryName: '', unitName: '', stockinfo: '' }])
    }

    const [data, setData] = useState('');
    const [unitData, setUnitData] = useState('');

    function getData(val) {
        const listData = val.target.value
        setData(listData)
        console.log(listData)

    }

    function getUnitData(e) {
        const unitDataList = e.target.value;
        setUnitData(unitDataList);
        console.log(unitDataList);

    }

    const removeList = (index) => {
        const infoList = [...info];
        infoList.splice(index, 1);
        setInfo(infoList);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const insertType = e.target.itemType.value;
        const insertName = e.target.itemName.value;
        const insertCategory = e.target.categoryName.value;
        const insertStock = e.target.stockInfo.value;
        console.log(insertType, insertName, insertCategory, unitData, insertStock)

        const productInfo = { insertType, insertName, insertCategory, unitData, insertStock };

        fetch(' https://shrouded-peak-39009.herokuapp.com/info', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('added successfully');
            })
        e.target.reset();
    }
    return (
        <div className='container mx-auto mt-10 w-fit h-screen'>
            <div>
                <h2 className='text-3xl text-zinc-800 font-bold text-center mb-4'>Create Item Information</h2>
            </div>
            <div className='p-4'>
                {
                    info.map((info, index) => (
                        <div className='mb-2'>
                            <form className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center' key={index} onSubmit={handleSubmit}>
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
                                <div className='flex justify-center items-center '>
                                    <div className='flex items-center'>
                                        <div class="dropdown">
                                            <label tabindex="0" class=" bg-gray-200 m-1 p-2 mt-6 text-black block text-center">Sub-Category <FontAwesomeIcon className='text-black ml-2 text-center' icon={faSortDown}></FontAwesomeIcon></label>
                                            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44">
                                                <li><input type="text"
                                                    name='categoryName'
                                                    className='input border-1 border-[#4b5320] h-10 w-36'
                                                    value={data} /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <label
                                            for="my-modal-6" class="modal-button  w-6 h-6 rounded-full border-4 border-[#4b5320]">
                                            <FontAwesomeIcon className='text-[#4b5320]' icon={faPlus}></FontAwesomeIcon>
                                        </label>
                                        <div>
                                            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                                            <div class="modal modal-bottom sm:modal-middle">
                                                <div class="modal-box">
                                                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                                    <input type="text"
                                                        name='categoryname'
                                                        onChange={getData}
                                                        placeholder="add category"
                                                        class="input input-bordered input-primary w-full" />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center '>
                                    <div className='flex items-center'>
                                        <div class="dropdown">
                                            <label tabindex="0" class=" bg-gray-200 m-1 p-2 mt-6 text-black block text-center">Unit name <FontAwesomeIcon className='text-black ml-2 text-center' icon={faSortDown}></FontAwesomeIcon></label>
                                            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44">
                                                <li><input type="text"
                                                    name='unitName'
                                                    className='input border-1 border-[#4b5320] h-10 w-36'
                                                    value={unitData} /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <label
                                            for="my-modal-4" class="modal-button w-6 h-6 rounded-full border-4 border-[#4b5320]">
                                            <FontAwesomeIcon className='text-[#4b5320]' icon={faPlus}></FontAwesomeIcon>
                                        </label>
                                        <div>
                                            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                                            <div class="modal modal-bottom sm:modal-middle">
                                                <div class="modal-box">
                                                    <label for="my-modal-4" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                                    <input type="text"
                                                        name='unitName'
                                                        onChange={getUnitData}
                                                        placeholder="add unit name"
                                                        class="input input-bordered input-primary w-full" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="" className='text-black font-semibold'>Stock Limit</label>
                                    <input type="text" name='stockInfo' placeholder="Stock limit" required class="input border-1 border-[#4b5320] bg-white  h-10 w-full max-w-xs" />
                                </div>
                                <div className='mt-5'>
                                    <input type="submit"
                                        value='Submit' className='btn-sm  bg-[#4b5320] text-white h-10 rounded' />
                                    <Link to='/itemlist'><button className='btn-sm border-none bg-red-800 hover:bg-red-700 text-white h-10 rounded ml-2'>Cancle</button></Link>
                                </div>
                            </form>

                        </div>
                    ))
                }
                <div className='mt-4'>
                    <button onClick={addList} className='btn-sm bg-[#4b5320] text-white h-10 rounded'>Add more<FontAwesomeIcon className='text-xl text-white ml-2' icon={faPlus}></FontAwesomeIcon></button>
                    <button onClick={removeList} className='btn-sm bg-red-800 hover:bg-red-700 border-none text-white h-10 rounded ml-2 '>Remove <FontAwesomeIcon className='text-white ml-2 text-xl' icon={faXmark}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ItemInfoCreate;