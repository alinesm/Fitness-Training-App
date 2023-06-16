import AddExercises from '../WorkoutsCreation/AddExercises';
import CircuitModal from '../WorkoutsCreation/CircuitModal';
import Table from '../WorkoutsCreation/Table';
import React, { useState, useEffect } from 'react';
import TableEdit from './TableEdit';
import SupertestModal from '../WorkoutsCreation/SupertestModal';

function EditWorkout({ workoutTobeEdited, setWorkoutTobeEdited }) {
  const [openModalSuperset, setOpenModalSuperset] = useState(false);
  const [openModalCircuit, setOpenModalCircuit] = useState(false); //modal for circuit
  const [supersetsList, setSupersetsList] = useState([]);
  const [circuitList, setCircuitList] = useState([]); //circuit list added to workout
  const [exercisesList, setExercisesList] = useState([]); //exercises list added to workout
  const [teste, setTeste] = useState({
    exerciseId: '',
    exerciseGift: '',
    exerciseName: '',
    sets: '',
    text: '',
    restSecs: '',
  });

  function handleSaveExerciseInfo(updatedExerciseInfo, index) {
    setWorkoutTobeEdited((prevList) => {
      const newList = [...prevList];
      newList[index] = updatedExerciseInfo;
      return newList;
    });
  }

  async function handleSaveButtonClick(e) {
    e.preventDefault();
    exercisesList.forEach((exerciseInfo, index) => {
      handleSaveExerciseInfo(exerciseInfo, index);
    });
    const newData = {
      workout: exercisesList,
    };
    console.log('newData', exercisesList);
    // try {
    //   await saveWorkout(newData);
    //   toast('Reserva realizada!');
    // } catch (err) {
    //   toast('Não foi possível salvar suas informações!');
    // }
  }

  console.log('workouttobeedittt', workoutTobeEdited);

  return (
    <>
      <button onClick={(e) => handleSaveButtonClick(e)}>save</button>
      <div className='grid grid-cols-2 bg-slate-600 p-7 w-full'>
        {openModalSuperset ? (
          <div className='w-full h-fit bg-white'>
            <SupertestModal
              supersetsList={supersetsList}
              setOpenModalSuperset={setOpenModalSuperset}
              setSupersetsList={setSupersetsList}
              exercisesList={workoutTobeEdited}
              setExercisesList={setWorkoutTobeEdited}
            />
          </div>
        ) : openModalCircuit ? (
          <div className='w-full bg-white'>
            <CircuitModal
              circuitList={circuitList}
              setOpenModalCircuit={setOpenModalCircuit}
              setCircuitList={setCircuitList}
              exercisesList={workoutTobeEdited}
              setExercisesList={setWorkoutTobeEdited}
            />
          </div>
        ) : (
          <div className='w-full bg-white'>
            <TableEdit
              exercisesList={workoutTobeEdited}
              setExercisesList={setWorkoutTobeEdited}
              setOpenModalSuperset={setOpenModalSuperset}
              supersetsList={supersetsList}
              setOpenModalCircuit={setOpenModalCircuit}
              teste={teste}
              setTeste={setTeste}
              onSaveExerciseInfo={handleSaveExerciseInfo}
              // workoutTobeEdited={workoutTobeEdited}
              // setWorkoutTobeEdited={setWorkoutTobeEdited}
            />
          </div>
        )}

        <AddExercises
          exercisesList={workoutTobeEdited}
          setExercisesList={setWorkoutTobeEdited}
          openModalSuperset={openModalSuperset}
          setSupersetsList={setSupersetsList}
          supersetsList={supersetsList}
          circuitList={circuitList}
          setCircuitList={setCircuitList}
          openModalCircuit={openModalCircuit}
          teste={teste}
          setTeste={setTeste}
        />
      </div>
    </>
  );
}

export default EditWorkout;
