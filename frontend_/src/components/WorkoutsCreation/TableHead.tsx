function TableHead() {
  return (
    <div class=' w-full text-xs bg-gray-200 border-gray-300 border-y text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400'>
      <div className='flex items-center justify-between px-4'>
        <p class=' w-16'></p>
        <p class='px-1 py-3'>Exercise Name</p>
        <p class=' py-3'>Sets</p>
        <p class='py-3'>Target</p>
        <p class='py-3'>Rest Period</p>
        <p class='py-3'>Action</p>
      </div>
    </div>
  );
}

export default TableHead;
