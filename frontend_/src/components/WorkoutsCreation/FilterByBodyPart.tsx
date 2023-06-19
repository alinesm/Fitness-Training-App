import React from 'react';

function FilterByBodyPart({ bodyPartsList, setBodyPart }) {
  return (
    <div class='bg-white dark:bg-gray-800 pr-3'>
      <select
        onChange={(e) => setBodyPart(e.target.value)}
        class='inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
      >
        {bodyPartsList.map((bodyPart) => (
          <option
            key={bodyPart}
            value={bodyPart}
            class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
          >
            {bodyPart}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterByBodyPart;
