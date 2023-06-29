function CircuitModalInfo({ exerciseInfo }) {
  const maxLength = 13;

  return (
    <>
      <div className='bg-green-50 flex items-center px-4 border-gray-300 border-b dark:bg-gray-800 dark:border-gray-700 '>
        <div className='w-20'>
          <img
            className='w-full h-full'
            src={exerciseInfo.exerciseGift}
            alt='gif'
          />
        </div>

        <div className='px-1 w-36 text-gray-900 dark:text-white capitalize'>
          {exerciseInfo.exerciseName.length <= 13
            ? exerciseInfo.exerciseName
            : `${exerciseInfo.exerciseName.substring(0, maxLength)}...`}
        </div>
        <div className='w-20'></div>

        <div className='w-1'></div>

        <div className='w-44 text-gray-900 dark:text-white'>
          {exerciseInfo.text ? <div>{exerciseInfo.text}</div> : <div>None</div>}
        </div>
        <div className='text-gray-900 dark:text-white'>
          {exerciseInfo.restSecs ? (
            <div>{exerciseInfo.restSecs}</div>
          ) : (
            <div>None</div>
          )}
        </div>
        <div className='py-8 flex gap-3'></div>
      </div>
    </>
  );
}

export default CircuitModalInfo;

// function CircuitsInfo({ exercisesList, setExercisesList, exerciseInfo }) {
//   // console.log('exerciseInfo', exerciseInfo);
//   const maxLength = 13;

//   function handleDeleteExercise(id) {
//     // console.log(arr.map((item) => item.supertests ? item.supertests.map((subItem) => subItem) : item).flat())

//     const updatedExercise = exercisesList.filter(
//       (item) => item.exerciseId !== id,
//     );
//     setExercisesList(updatedExercise);
//   }

//   return (
//     <>
//       <div className='bg-green-200 flex items-center justify-between px-4 border-gray-300 border-b dark:bg-gray-800 dark:border-gray-700 '>
//         <div className='w-20 '>
//           <img
//             className='w-full h-full'
//             src={exerciseInfo.exerciseGift}
//             alt='gif'
//           />
//         </div>
//         <div className='px-1 text-gray-900 dark:text-white capitalize'>
//           {exerciseInfo.exerciseName.length <= 13
//             ? exerciseInfo.exerciseName
//             : `${exerciseInfo.exerciseName.substring(0, maxLength)}...`}
//         </div>
//         <div>
//           <div className='flex items-center space-x-3'>
//             <div>
//               <input
//                 type='number'
//                 className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
//                 placeholder='1'
//                 required
//               />
//             </div>
//           </div>
//         </div>
//         <div className='font-semibold text-gray-900 dark:text-white'>
//           <div>
//             <input
//               type='text'
//               className='bg-gray-50 w-32 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
//               placeholder='reps, weight, time, etc'
//               required
//             />
//           </div>
//         </div>
//         <div className='text-gray-900 dark:text-white'>
//           <div>
//             <select className='bg-gray-50 w-20 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
//               <option>None</option>
//               <option>45 sec</option>
//               <option>90 sec</option>
//             </select>
//           </div>
//         </div>
//         <div className='py-8 flex gap-3'>
//           <FaTrash
//             onClick={() => handleDeleteExercise(exerciseInfo.exerciseId)}
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default CircuitsInfo;
