import React from 'react';
import { FaRegHandPaper, FaTrash } from 'react-icons/fa';

function RestRow({ setRest, handleDelete, index }) {
  return (
    <div className='bg-red-50 flex py-2 items-center justify-between px-4 border-gray-300 border-b dark:bg-gray-800 dark:border-gray-700 '>
      <div className='w-20 '>
        <FaRegHandPaper size={24} color='rgb(248 113 113)' />
      </div>
      <div className='flex items-center'>
        <div className=' text-gray-900 dark:text-white'>
          <select
            onChange={(e) => setRest(e.target.value)}
            className='bg-gray-50 w-24 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value='90'>90 secs</option>
            <option value='80'>80 secs</option>
            <option value='45'>45 secs</option>
          </select>
        </div>
        <button onClick={() => handleDelete(index)} className='mr-3 ml-12'>
          <FaTrash color='gray' size={16} style={{ cursor: 'pointer' }} />
        </button>
      </div>
    </div>
  );
}

export default RestRow;
