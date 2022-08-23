import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
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
        const addName = e.target.itemName.value;
        const addStock = e.target.stockInfo.value;
        const categoryName = e.target.categoryName.value;
    }
    return (
        <div className='container mx-auto mt-10 w-fit h-screen'>
            <div>
                <h2 className='text-4xl text-zinc-800 font-semibold text-center mb-10'>Create Item Information</h2>
            </div>
            <div>
                {
                    info.map((info, index) => (
                        <div className='mb-8'>
                            <form className='grid grid-cols-6 gap-4 items-center' key={index} onSubmit={handleSubmit}>
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
                                    <button className='btn bg-red-800 text-white ml-4'>Cancle</button>
                                </div>
                            </form>

                        </div>
                    ))
                }
                <div className='mt-4'>
                    <button onClick={addList} className='btn btn-primary text-white'>Add more<FontAwesomeIcon className='text-xl text-white ml-2' icon={faPlus}></FontAwesomeIcon></button>
                    <button onClick={removeList} className='btn bg-red-800 text-white ml-2'>Remove <FontAwesomeIcon className='text-white ml-2 text-xl' icon={faXmark}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ItemInfoCreate;