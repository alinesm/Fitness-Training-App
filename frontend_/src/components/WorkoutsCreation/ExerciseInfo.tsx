function ExerciseInfo({ exerciseInfo, index, onSaveExerciseInfo }) {
  return (
    <div className='bg-white flex items-center justify-between px-4 border-gray-300 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
      <div className='w-20'>
        <img
          className='w-full h-full'
          src={exerciseInfo.exerciseGift}
          alt='gif'
        />
      </div>
      <div className='px-1 text-gray-900 dark:text-white capitalize'>
        {exerciseInfo.exerciseName}
      </div>
      <div>
        <div className='flex items-center space-x-3'>
          <div>
            <input
              value={exerciseInfo.sets}
              onChange={(e) => {
                const updatedExerciseInfo = {
                  ...exerciseInfo,
                  sets: e.target.value,
                };
                onSaveExerciseInfo(updatedExerciseInfo, index);
              }}
              type='number'
              className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='1'
              required
            />
          </div>
        </div>
      </div>
      <div className='font-semibold text-gray-900 dark:text-white'>
        <div>
          <input
            value={exerciseInfo.text}
            onChange={(e) => {
              const updatedExerciseInfo = {
                ...exerciseInfo,
                text: e.target.value,
              };
              onSaveExerciseInfo(updatedExerciseInfo, index);
            }}
            type='text'
            className='bg-gray-50 w-32 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='reps, weight, time, etc'
            required
          />
        </div>
      </div>
      <div className='text-gray-900 dark:text-white'>
        <div>
          <select
            value={exerciseInfo.restSecs}
            onChange={(e) => {
              const updatedExerciseInfo = {
                ...exerciseInfo,
                restSecs: e.target.value,
              };
              onSaveExerciseInfo(updatedExerciseInfo, index);
            }}
            className='bg-gray-50 w-20 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value='none'>None</option>
            <option value='45'>45 sec</option>
            <option value='90'>90 sec</option>
          </select>
        </div>
      </div>
    </div>
  );
}

// import React from 'react';
// import { FaTrash } from 'react-icons/fa';

// function ExerciseInfo({
//   exercisesList,
//   setExercisesList,
//   exerciseInfo,
//   teste,
//   setTeste,
//   index,
// }) {
//   const maxLength = 13;

//   function handleDeleteExercise(id) {
//     // console.log(arr.map((item) => item.supertests ? item.supertests.map((subItem) => subItem) : item).flat())

//     const updatedExercise = exercisesList.filter(
//       (item) => item.exerciseId !== id,
//     );
//     setExercisesList(updatedExercise);
//   }

//   const handleSave = () => {
//     // Save the exerciseInfo values to the exercisesList state for the current row
//     const updatedExerciseInfo = {
//       exerciseId: exerciseInfo.exerciseId,
//       exerciseGift: exerciseInfo.exerciseGift,
//       exerciseName: exerciseInfo.exerciseName,
//       sets: teste.sets,
//       text: exerciseInfo.text,
//       restSecs: exerciseInfo.restSecs
//     };
//     handleSaveWorkout(updatedExerciseInfo, index);
//   };
//   console.log('exercisesList', exercisesList);

//   return (
//     <>
//       <button onClick={handleSave}>saveee</button>
//       <div className='bg-white flex items-center justify-between px-4  border-gray-300 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
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
//                 value={exercisesList[index].sets} // Use exercisesList[index].sets
//                 onChange={(e) => {
//                   const newList = [...exercisesList];
//                   newList[index].sets = e.target.value;
//                   setExercisesList(newList);
//                 }}
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
//               value={exercisesList[index].text} // Use exercisesList[index].text
//               onChange={(e) => {
//                 const newList = [...exercisesList];
//                 newList[index].text = e.target.value;
//                 setExercisesList(newList);
//               }}
//               type='text'
//               className='bg-gray-50 w-32 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
//               placeholder='reps, weight, time, etc'
//               required
//             />
//           </div>
//         </div>
//         <div className='text-gray-900 dark:text-white'>
//           <div>
//             <select
//               value={exercisesList[index].restSecs} // Use exercisesList[index].restSecs
//               onChange={(e) => {
//                 const newList = [...exercisesList];
//                 newList[index].restSecs = e.target.value;
//                 setExercisesList(newList);
//               }}
//               className='bg-gray-50 w-20 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
//             >
//               <option value='none'>None</option>
//               <option value='45'>45 sec</option>
//               <option value='90'>90 sec</option>
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

export default ExerciseInfo;

// // function ExerciseInfo({
// //   exercisesList,
// //   setExercisesList,
// //   exerciseInfo,
// //   teste,
// //   setTeste,
// // }) {
// //   const maxLength = 13;

// //   return (
// //     <div className='bg-white flex items-center justify-between px-4  border-gray-300 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
// //       <div className='w-20 '>
// //         <img
// //           className='w-full h-full'
// //           src={exerciseInfo.exerciseGift}
// //           alt='gif'
// //         />
// //       </div>
// //       <div className='px-1 text-gray-900 dark:text-white capitalize'>
// //         {exerciseInfo.exerciseName}
// //       </div>
// //       <div>
// //         <div className='flex items-center space-x-3'>
// //           <div>
// //             <input
// //               value={teste.sets}
// //               type='number'
// //               className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
// //               placeholder='1'
// //               required
// //             />
// //           </div>
// //         </div>
// //       </div>
// //       <div className='font-semibold text-gray-900 dark:text-white'>
// //         <div>
// //           <input
// //             type='text'
// //             className='bg-gray-50 w-32 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
// //             placeholder='reps, weight, time, etc'
// //             required
// //           />
// //         </div>
// //       </div>
// //       <div className='text-gray-900 dark:text-white'>
// //         <div>
// //           <select
// //             className='bg-gray-50 w-20 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
// //           >            <option value='none'>None</option>
// //             <option value='45'>45 sec</option>
// //             <option value='90'>90 sec</option>
// //           </select>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
