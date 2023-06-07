import React from 'react';
import { FaRegHandPaper } from 'react-icons/fa';

function RestRow({ setRest }) {
  return (
    <div className='bg-blue-50 flex items-center justify-between px-4 border-gray-300 border-b dark:bg-gray-800 dark:border-gray-700 '>
      <FaRegHandPaper />
      <div className='text-gray-900 dark:text-white'>
        <div>
          <select
            onChange={(e) => setRest(e.target.value)}
            className='bg-gray-50 w-20 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value='90'>90 sec</option>
            <option value='80'>80 sec</option>
            <option value='45'>45 sec</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default RestRow;
