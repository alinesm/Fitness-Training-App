import React from 'react';
import avatar from '../assets/avatar.jpg';
import { FaEdit, FaTrash } from 'react-icons/fa';

function WorkoutListByClient({ setOpenCreateWorkout }) {
  function handleDeleteWorkout(id) {
    console.log('id', id);
  }

  function handleDeleteEdit(id) {
    console.log('id', id);
  }

  return (
    <div className='pt-6 bg-gray-100 ml-20 h-screen'>
      <div className='w-10/12 mx-auto '>
        <div className='flex items-center justify-between mb-10'>
          <div className='flex items-center gap-3 '>
            <div className='w-fit '>
              <img
                className='rounded-full h-12 w-12'
                src={avatar}
                alt='user-profile'
              />
            </div>

            <h2 className='font-bold text-lg capitalize text-gray-700'>
              Jimmy's, workouts
            </h2>
          </div>{' '}
          <button
            onClick={() => setOpenCreateWorkout(true)}
            className='uppercase bg-red-400 text-white px-4 py-2 rounded-md shadow-lg '
          >
            Add new
          </button>
        </div>{' '}
        <div className=''>
          <div className='  p-4 border rounded-lg bg-white overflow-y-auto'>
            <div className='my-3 p-2 font-semibold text-gray-700 grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 items-center'>
              <span>Name</span>
              <span className='sm:text-left text-right'>Qty Exercises</span>
              <span className='hidden md:grid'>Goal</span>
              <span className='sm:text-left text-right'>Frequency</span>
              <span className='hidden md:grid'>Last time</span>
              <span>Actions</span>
            </div>
            <ul>
              <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                <p className=''>workout nameeee</p>
                <p>8</p>
                <p>training superior part</p>
                <p>once a week</p>
                <p className='hidden md:flex'>15 min ago</p>
                <div className='flex gap-2'>
                  <button onClick={() => handleDeleteWorkout(workout.id)}>
                    <FaTrash color='gray' />
                  </button>
                  <button onClick={() => handleDeleteEdit(workout.id)}>
                    <FaEdit color='gray' />
                  </button>
                </div>
              </li>
              <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                <p className=''>workout name</p>
                <p>8</p>
                <p>training superior part</p>
                <p>once a week</p>
                <p className='hidden md:flex'>15 min ago</p>
                <div className='flex gap-2'>
                  <button>
                    <FaTrash color='gray' />
                  </button>
                  <button>
                    <FaEdit color='gray' />
                  </button>
                </div>
              </li>
              <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                <p className=''>workout name</p>
                <p>8</p>
                <p>training superior part</p>
                <p>once a week</p>
                <p className='hidden md:flex'>15 min ago</p>
                <div className='flex gap-2'>
                  <button>
                    <FaTrash color='gray' />
                  </button>
                  <button>
                    <FaEdit color='gray' />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutListByClient;
