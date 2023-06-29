import { useState } from 'react';
import WorkoutsCreation from '../components/WorkoutsCreation';
import { toast } from 'react-toastify';
import Sidebar from '../components/Sidebar';
import WorkoutListByClient from '../components/WorkoutListByClient';
import {
  deleteWorkout,
  getListOfWorkouts,
  getListOfWorkoutsByClientId,
  saveWorkout,
} from '../services/workoutApi';
import ClientsList from '../components/ClientsList';

function Home() {
  const [exercisesList, setExercisesList] = useState([]); //exercises list added to workout
  const [openCreateWorkout, setOpenCreateWorkout] = useState(false);
  const [workoutTobeEdited, setWorkoutTobeEdited] = useState([]);
  const [isEditingWorkout, setIsEditingWorkout] = useState(false);
  const [showWorkoutList, setShowWorkoutList] = useState(false); //circuit list added to workout
  const [clientId, setClientId] = useState({}); //circuit list added to workout
  const [workOutItialInfo, setWorkOutItialInfo] = useState({
    workoutName: '',
    goal: '',
    frequency: '',
    description: '',
  });

  function handleSaveExerciseInfo(updatedExerciseInfo, index) {
    setExercisesList((prevList) => {
      const newList = [...prevList];
      newList[index] = updatedExerciseInfo;
      return newList;
    });
  }

  async function handleEditWorkout(id) {
    try {
      await deleteWorkout(id);
      //remember to change
      // const clientId = 4;
      workoutTobeEdited.forEach((exerciseInfo, index) => {
        setWorkoutTobeEdited((prevList) => {
          const newList = [...prevList];
          newList[index] = exerciseInfo;
          return newList;
        });
      });
      const edited = {
        workout: [{ workOutItialInfo: workOutItialInfo }, workoutTobeEdited],
      };
      await saveWorkout(edited, clientId.id);
      setOpenCreateWorkout(false);
      setWorkOutItialInfo({
        workoutName: '',
        goal: '',
        frequency: '',
        description: '',
      });
      setExercisesList([]);
      setWorkoutTobeEdited([]);
      setIsEditingWorkout(false);
      getListOfWorkoutsByClientId(clientId.id); //change
      console.log('neditedworkeout', edited);
      toast('Reserva realizada!');
    } catch (err) {
      toast('Não foi possível salvar suas informações!');
    }
  }

  async function handleSaveButtonClick(e) {
    e.preventDefault();

    if (exercisesList.length === 0) {
      setOpenCreateWorkout(false);
    }

    exercisesList.forEach((exerciseInfo, index) => {
      handleSaveExerciseInfo(exerciseInfo, index);
    });
    const newData = {
      workout: [{ workOutItialInfo: workOutItialInfo }, exercisesList],
    };

    try {
      // const clientId = 2;
      await saveWorkout(newData, clientId.id);
      setOpenCreateWorkout(false);
      setWorkOutItialInfo({
        workoutName: '',
        goal: '',
        frequency: '',
        description: '',
      });
      setExercisesList([]);
      setWorkoutTobeEdited([]);
      console.log('newData', newData);
      toast('Reserva realizada!');
    } catch (err) {
      toast('Não foi possível salvar suas informações!');
    }
  }

  return (
    <div className='w-full relative'>
      <Sidebar setShowWorkoutList={setShowWorkoutList} />

      {showWorkoutList ? (
        <WorkoutListByClient
          setOpenCreateWorkout={setOpenCreateWorkout}
          openCreateWorkout={openCreateWorkout}
          setWorkoutTobeEdited={setWorkoutTobeEdited}
          setIsEditingWorkout={setIsEditingWorkout}
          setWorkOutItialInfo={setWorkOutItialInfo}
          clientId={clientId}
        />
      ) : (
        <ClientsList
          setClientId={setClientId}
          setShowWorkoutList={setShowWorkoutList}
        />
      )}

      {openCreateWorkout && (
        <WorkoutsCreation
          setOpenCreateWorkout={setOpenCreateWorkout}
          isEditingWorkout={isEditingWorkout}
          setIsEditingWorkout={setIsEditingWorkout}
          workoutTobeEdited={workoutTobeEdited}
          setWorkoutTobeEdited={setWorkoutTobeEdited}
          workOutItialInfo={workOutItialInfo}
          setWorkOutItialInfo={setWorkOutItialInfo}
          handleEditWorkout={handleEditWorkout}
          exercisesList={exercisesList}
          setExercisesList={setExercisesList}
          handleSaveButtonClick={handleSaveButtonClick}
          handleSaveExerciseInfo={handleSaveExerciseInfo}
        />
      )}
    </div>
  );
}

export default Home;
