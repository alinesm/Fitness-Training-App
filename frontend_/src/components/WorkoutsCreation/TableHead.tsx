function TableHead() {
  return (
    <div class=' w-full text-xs font-semibold bg-gray-200 border-gray-300 border-y text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400'>
      <div className='flex items-center px-4'>
        <p class=' w-20'></p>
        <p class='py-3 pl-3 w-36 '>Exercise Name</p>
        <p class='py-3 w-20 '>Sets</p>
        <p className='w-8 '></p>
        <p class='py-3 w-48 '>Target</p>
        <p class='py-3 w-32'>Rest Period</p>
        <p class='py-3'>Action</p>
      </div>
    </div>
  );
}

export default TableHead;
