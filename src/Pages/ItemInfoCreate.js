import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const ItemInfoCreate = () => {

    const [info, setInfo] = useState([{ typeName: '', itemName: '', categoryName: '', unitName: '', stockinfo: '' }]);
    // const itemRef = useRef('');
    console.log(info);

    const addList = () => {
        setInfo([...info, { typeName: '', itemName: '', categoryName: '', unitName: '', stockinfo: '' }])
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
        const insertUnitName = e.target.unitName.value;
        const insertStock = e.target.stockInfo.value;
        console.log(insertType, insertName, insertCategory, insertUnitName, insertStock)

        const productInfo = { insertType, insertName, insertCategory, insertUnitName, insertStock };

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
                <h2 className='text-4xl text-zinc-800 font-bold text-center mb-10'>Create Item Information</h2>
            </div>
            <div>
                {
                    info.map((info, index) => (
                        <div className='mb-8 sm:p-2'>
                            <form className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center' key={index} onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="" className='text-xl font-semibold'>Item type</label>
                                    <input type="text"
                                        name='itemType'
                                        placeholder="Type here"
                                        class="input input-bordered input-primary w-full max-w-xs" />
                                </div>
                                <div>
                                    <label htmlFor="" className='text-xl font-semibold'>Item name</label>
                                    <input type="text"
                                        name='itemName'
                                        placeholder="Type here"
                                        class="input input-bordered input-primary w-full max-w-xs" />
                                </div>

                                <div>
                                    <label htmlFor="" className='text-xl font-semibold'>Sub category</label>
                                    <input type="text"
                                        name='categoryName'
                                        placeholder="Type here"
                                        class="input input-bordered input-primary w-full max-w-xs" />
                                </div>
                                <div>
                                    <label htmlFor="" className='text-xl font-semibold'>Unit name</label>
                                    <input type="text"
                                        name='unitName'
                                        placeholder="Type here"
                                        class="input input-bordered input-primary w-full max-w-xs" />
                                </div>
                                <div>
                                    <label htmlFor="" className='text-xl font-semibold'>Stock Limit</label>
                                    <input type="text" name='stockInfo' placeholder="Stock limit" class="input input-bordered input-primary w-full max-w-xs" />
                                </div>
                                <div className='mt-5'>
                                    <input type="submit" className='btn btn-primary text-white w-18 h-10' />
                                    <Link to='/itemlist'><button className='btn bg-red-800 hover:bg-red-700 text-white ml-4'>Cancle</button></Link>
                                </div>
                            </form>

                        </div>
                    ))
                }
                <div className='mt-4'>
                    <button onClick={addList} className='btn btn-primary text-white'>Add more<FontAwesomeIcon className='text-xl text-white ml-2' icon={faPlus}></FontAwesomeIcon></button>
                    <button onClick={removeList} className='btn bg-red-800 hover:bg-red-700 text-white ml-2'>Remove <FontAwesomeIcon className='text-white ml-2 text-xl' icon={faXmark}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ItemInfoCreate;