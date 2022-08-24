import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSortDown } from '@fortawesome/free-solid-svg-icons';
const UpdateInfoList = () => {
    const { id } = useParams();
    const [infoList, setInfoList] = useState([]);

    useEffect(() => {
        fetch(`https://shrouded-peak-39009.herokuapp.com/update/${id}`)
            .then(res => res.json())
            .then(data => setInfoList(data));
    }, [])

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

    const handleUpdateInfo = (e) => {
        e.preventDefault();
        const insertType = e.target.itemType.value;
        const insertName = e.target.itemName.value;
        const insertCategory = e.target.categoryName.value;
        const insertStock = e.target.stockInfo.value;
        console.log(insertType, insertName, insertCategory, unitData, insertStock)

        const productInfo = { insertType, insertName, insertCategory, unitData, insertStock };
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
        <div className='container mx-auto h-screen w-10/12'>
            <h2 className='text-3xl font-bold text-center mt-10 mb-10 text-stone-900 '>Update a single product</h2>
            <form className='grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center' onSubmit={handleUpdateInfo}>
                <div>
                    <label htmlFor="" className='text-black font-semibold'>Item type</label>
                    <input type="text"
                        name='itemType'
                        placeholder={infoList.insertType}
                        required
                        class="input border-1 border-[#4b5320] bg-white h-10 w-full max-w-xs" />
                </div>
                <div>
                    <label htmlFor="" className='text-black font-semibold'>Item name</label>
                    <input type="text"
                        name='itemName'
                        placeholder={infoList.insertName}
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
                                    placeholder={infoList.categoryData}
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
                                        placeholder={infoList.categoryData}
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
                                    placeholder={infoList.unitData}
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
                                        placeholder={infoList.unitData}
                                        class="input input-bordered input-primary w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="" className='text-black font-semibold'>Stock Limit</label>
                    <input type="text"
                        name='stockInfo'
                        placeholder={infoList.insertStock}
                        required class="input border-1 border-[#4b5320] bg-white  h-10 w-full max-w-xs" />
                </div>
                <div className='mt-4'>
                    <input type="submit" value='Update' className='btn-sm  bg-[#4b5320] text-white h-10 rounded' />
                    <Link to='/itemlist'><button className='btn-sm border-none bg-red-800 hover:bg-red-700 text-white h-10 rounded ml-2'>Cancle</button></Link>
                </div>
            </form>
        </div>
    );
};

export default UpdateInfoList;