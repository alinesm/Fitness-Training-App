import { useContext, useEffect, useState } from 'react';
import avatar from '../assets/avatar.jpg';
import { FaAngleDown, FaTrash } from 'react-icons/fa';
import {
  deleteClient,
  getListOfClientsByUserId,
  getListOfWorkoutsByClientId,
} from '../services/workoutApi';
import { toast } from 'react-toastify';
import MyLineChart from './MyLineChart';
import UserContext from '../contexts/UserContext';

function ClientsList({ setShowWorkoutList, setClientId }) {
  //chart color map is good to see the density of the workouts other weeks and months
  const [clientsList, setClientsList] = useState([]);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [deletingClient, setDeletingClient] = useState(false);

  const { userData } = useContext(UserContext);

  function openAccordion() {
    setIsAccordionOpen(!isAccordionOpen);
  }

  useEffect(() => {
    async function getListOfClients() {
      const data = await getListOfClientsByUserId(userData.user.id);
      setClientsList(data);
    }
    setDeletingClient(false);
    getListOfClients();
  }, [deletingClient]);

  async function handleGoToWorkout(client) {
    setShowWorkoutList(true);
    setClientId(client);
  }

  async function handleDeleteClient(id) {
    try {
      await deleteClient(id);
      setDeletingClient(true);
      toast('Reserva realizada!');
    } catch (err) {
      toast('Não foi possível salvar suas informações!');
    }
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
              Client's List
            </h2>
          </div>{' '}
        </div>{' '}
        <div className=''>
          <div className=' p-4 border rounded-lg bg-white overflow-y-auto'>
            <div className='my-3 text-center p-2 font-semibold text-gray-700 grid md:grid-cols-custom gap-8 sm:grid-cols-3 grid-cols-2 items-center'>
              <span className='col-span-1'>Name</span>
              <span className='col-span-1 pl-6 text-center  flex items-center'>
                Main Goal
              </span>
              <span className='col-span-1 md:grid'>Current Phase</span>
              <span className='sm:text-left col-span-1 text-center'>
                Status
              </span>
              <span className='md:grid col-span-1'>Last Workout</span>
              <span className='md:grid col-span-1'>Monthly Fee</span>
              <span className='md:grid col-span-1'>Location</span>
              <span className='text-center pl-4'>Actions</span>
            </div>
            {clientsList.length === 0 && (
              <div className='h-32 flex items-center justify-center text-base text-gray-700'>
                <p className='text-center capitalize'>
                  you have no clients yet{' '}
                </p>
              </div>
            )}

            <ul>
              {clientsList.map((client) => {
                return (
                  <li className='bg-gray-50 capitalize text-center text-sm text-gray-600 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-custom gap-8 sm:grid-cols-3 grid-cols-2 items-center '>
                    <div className='col-span-1'>
                      <p className='flex flex-col text-center'>
                        <p className=''>{client.name}</p>
                        <p className='text-xs'>{client.email}</p>
                      </p>
                    </div>
                    <p className='col-span-1 '>{client.goal}</p>
                    <p className='col-span-1'>Benniger</p>

                    {client.status === 'active' ? (
                      <div className='flex items-center gap-2 col-span-1'>
                        {' '}
                        <div className='w-3 h-3 rounded-full bg-green-500 '></div>
                        <p>{client.status}</p>
                      </div>
                    ) : (
                      <div className='flex items-center gap-2 col-span-1'>
                        {' '}
                        <div className='w-3 h-3 rounded-full bg-red-500 '></div>
                        <p>{client.status}</p>
                      </div>
                    )}

                    <div className='col-span-1 flex items-center flex-col'>
                      <p className='hidden md:flex'>Cardio workout</p>
                      <p className='hidden md:flex text-xs'>15 mins ago</p>
                    </div>
                    <p className='col-span-1'>$50</p>
                    <p className='col-span-1'>{client.location}</p>

                    <div className='col-span-1 flex justify-end   gap-3'>
                      <button
                        onClick={() => handleGoToWorkout(client)}
                        className='shadow-sm text-gray-500 text-xs py-1 px-1.5 border-2 border-red-300 hover:bg-red-200 rounded-lg tracking-tighter '
                      >
                        workouts
                      </button>
                      <button onClick={() => handleDeleteClient(client.id)}>
                        <FaTrash color='gray' />
                      </button>
                    </div>
                    <button onClick={openAccordion} className='col-span-1'>
                      <FaAngleDown size={19} color='gray' />
                    </button>
                  </li>
                );
              })}
            </ul>

            {isAccordionOpen && (
              <div className='text-sm border-gray-100 border-x-2 border-b-2 rounded-b-lg py-8 text-gray-500 h-fit w-full flex justify-between '>
                <div className='flex flex-col border-gray-200 gap-3 border-r-2 px-6'>
                  <h1 className='font-bold text-center mb-2'>
                    Basic Information
                  </h1>{' '}
                  <div className='flex gap-3'>
                    <div className='flex flex-col gap-1'>
                      <p>Age:</p>
                      <p>Initial Weight: </p>
                      <p>Gender:</p>
                      <p>Frequency Goal: </p>
                      <p>Hired Data: </p>
                      <p>Workout Place: </p>
                      <p>Initial Ativity Level: </p>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <p>33anos</p>
                      <p>90kg</p>
                      <p>Male</p>
                      <p>3 times a week</p>
                      <p>2023-03-21</p>
                      <p>At Home</p>
                      <p>Beginner</p>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col items-center'>
                  <p className='font-bold text-center '>2 Weeks ago</p>
                  <div className='text-xs flex items-center gap-2 mt-1 mb-2'>
                    <h1>Total workouts: 6</h1>
                    <p className='text-xs tracking-tighter bg-green-400 px-1 py-0.5 rounded-sm text-white'>
                      On Track
                    </p>
                  </div>
                  <div className='flex gap-3  text-xs'>
                    <div className=' flex flex-col gap-3'>
                      <div className='bg-gray-100 px-2 py-1 rounded-sm'>
                        <p className='font-semibold'>Cardio trainer</p>
                        <p>12 Mon - 10:15 </p>
                      </div>
                      <div className='bg-gray-100 px-2 py-1 rounded-sm'>
                        <p className='font-semibold'>Cardio trainer</p>
                        <p>12 Mon - 10:15 </p>
                      </div>
                      <div className='bg-gray-100 px-2 py-1 rounded-sm'>
                        <p className='font-semibold'>Cardio trainer</p>
                        <p>12 Mon - 10:15 </p>
                      </div>
                      <div className='bg-gray-100 px-2 py-1 rounded-sm'>
                        <p className='font-semibold'>Cardio trainer</p>
                        <p>12 Mon - 10:15 </p>
                      </div>
                    </div>
                    <div className=' flex flex-col gap-3'>
                      <div className=' flex flex-col gap-3'>
                        <div className='bg-gray-100 px-2 py-1 rounded-sm'>
                          <p className='font-semibold'>Cardio trainer</p>
                          <p>12 Mon - 10:15 </p>
                        </div>
                        <div className='bg-gray-100 px-2 py-1 rounded-sm'>
                          <p className='font-semibold'>Cardio trainer</p>
                          <p>12 Mon - 10:15 </p>
                        </div>
                        <div className='bg-gray-100 px-2 py-1 rounded-sm'>
                          <p className='font-semibold'>Cardio trainer</p>
                          <p>12 Mon - 10:15 </p>
                        </div>
                        <div className='bg-gray-100 px-2 py-1 rounded-sm'>
                          <p className='font-semibold'>Cardio trainer</p>
                          <p>12 Mon - 10:15 </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* -------------- */}
                <div className=' border-gray-200 flex flex-col items-center border-x-2 px-6'>
                  {' '}
                  <p className='font-bold text-center '>This Week</p>
                  <div className='text-xs flex items-center gap-2 mt-1 mb-2'>
                    <h1>Total workouts: 6</h1>
                    <p className='text-xs tracking-tighter bg-green-400 px-1 py-0.5 rounded-sm text-white'>
                      On Track
                    </p>
                  </div>
                  <div className='flex gap-3  text-xs'>
                    <div className=' flex flex-col gap-3'>
                      <div className='bg-gray-100 px-2 py-1 rounded-sm'>
                        <p className='font-semibold'>Cardio trainer</p>
                        <p>12 Mon - 10:15 </p>
                      </div>
                      <div className='bg-gray-100 px-2 py-1 rounded-sm'>
                        <p className='font-semibold'>Cardio trainer</p>
                        <p>12 Mon - 10:15 </p>
                      </div>
                      <div className='bg-gray-100 px-2 py-1 rounded-sm'>
                        <p className='font-semibold'>Cardio trainer</p>
                        <p>12 Mon - 10:15 </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='pr-6 '>
                  <h1 className='font-bold text-center mb-2'>
                    Body Weight Progress
                  </h1>
                  <MyLineChart />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientsList;
