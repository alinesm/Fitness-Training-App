import React, { useEffect, useState } from 'react';
import avatar from '../assets/avatar.jpg';
import { FaEdit, FaTrash } from 'react-icons/fa';
import {
  deleteWorkout,
  getListOfWorkoutsByClientId,
  getWorkoutById,
} from '../services/workoutApi';
import { toast } from 'react-toastify';

function WorkoutListByClient({
  setOpenCreateWorkout,
  openCreateWorkout,
  setWorkoutTobeEdited,
  workoutTobeEdited,
  setIsEditingWorkout,
  setWorkOutItialInfo,
}) {
  const [workoutsListByClient, setWorkoutsListByClient] = useState([]);

  async function getWorkouts() {
    const data = await getListOfWorkoutsByClientId(2);
    setWorkoutsListByClient(data);
  }
  async function handleDeleteWorkout(id) {
    try {
      await deleteWorkout(id);
      await getWorkouts();
      toast('deleted!');
    } catch (err) {
      toast('Não foi possível salvar suas informações!');
    }
  }

  useEffect(() => {
    //include client id
    getWorkouts();
  }, [openCreateWorkout]);

  async function handleGetWorkoutsByClient() {
    //pegar os exercicios do workout e renderizar direitinho
  }

  async function handleEditWorkout(id) {
    setIsEditingWorkout(true);
    setOpenCreateWorkout(true);
    const editWorkout = await getWorkoutById(id);
    setWorkOutItialInfo(editWorkout[0].workOutItialInfo);
    setWorkoutTobeEdited(editWorkout.slice(1));
  }

  console.log('workoutTobeEdited', workoutTobeEdited);

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
              <span className='hidden md:grid'>Last Done</span>
              <span>Actions</span>
            </div>
            {workoutsListByClient.length === 0 && (
              <div className='h-32 flex items-center justify-center text-base text-gray-700'>
                <p className='text-center'>
                  No workouts yet, please start to create workout plans
                </p>
              </div>
            )}

            <ul>
              {workoutsListByClient?.map((workout) => (
                <li
                  key={workout.id}
                  className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
                >
                  <p
                    onClick={handleGetWorkoutsByClient}
                    className='cursor-pointer'
                  >
                    {workout.name}
                  </p>

                  <p>
                    {
                      workout?.exercises.filter(
                        (exercise) => exercise.exerciseId !== null,
                      ).length
                    }
                  </p>
                  <p>{workout.goal}</p>
                  <p>{workout.frequency}</p>
                  <p className='hidden md:flex'>{workout.lastDone}</p>
                  <div className='flex gap-3'>
                    <button onClick={() => handleDeleteWorkout(workout.id)}>
                      <FaTrash color='gray' />
                    </button>
                    <button onClick={() => handleEditWorkout(workout.id)}>
                      <FaEdit color='gray' />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutListByClient;
