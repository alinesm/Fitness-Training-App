import React, { useState } from 'react';
import AddExercises from './AddExercises';
import Table from './Table';
import SupertestModal from './SupertestModal';
import CircuitModal from './CircuitModal';
import { toast } from 'react-toastify';
import { saveWorkout } from '../../services/workoutApi';

function WorkoutsCreation() {
  const [openModalSuperset, setOpenModalSuperset] = useState(false);
  const [openModalCircuit, setOpenModalCircuit] = useState(false); //modal for circuit
  const [supersetsList, setSupersetsList] = useState([]);
  const [circuitList, setCircuitList] = useState([]); //circuit list added to workout
  const [workoutsList, setWorkoutsList] = useState([]);
  const [exercisesList, setExercisesList] = useState([]); //exercises list added to workout
  const [teste, setTeste] = useState({
    exerciseId: '',
    exerciseGift: '',
    exerciseName: '',
    sets: '',
    text: '',
    restSecs: '',
  });

  // async function handleSaveWorkout(e) {
  //   e.preventDefault();
  //   console.log('exercisesList', exercisesList);
  //   const newData = {
  //     workout: exercisesList,
  //   };
  //   // try {
  //   //   await saveWorkout(newData);
  //   //   toast('Reserva realizada!');
  //   // } catch (err) {
  //   //   toast('Não foi possível salvar suas informações!');
  //   // }
  // }
  function handleSaveExerciseInfo(updatedExerciseInfo, index) {
    setExercisesList((prevList) => {
      const newList = [...prevList];
      newList[index] = updatedExerciseInfo;
      return newList;
    });
  }

  function handleSaveButtonClick() {
    exercisesList.forEach((exerciseInfo, index) => {
      handleSaveExerciseInfo(exerciseInfo, index);
    });
  }

  console.log('exercisesList', exercisesList);

  return (
    <>
      <button onClick={handleSaveButtonClick}>save</button>
      <div className='grid grid-cols-2 bg-slate-600 p-7 w-full'>
        {openModalSuperset ? (
          <div className='w-full h-fit bg-white'>
            <SupertestModal
              supersetsList={supersetsList}
              setOpenModalSuperset={setOpenModalSuperset}
              setSupersetsList={setSupersetsList}
              exercisesList={exercisesList}
              setExercisesList={setExercisesList}
            />
          </div>
        ) : openModalCircuit ? (
          <div className='w-full bg-white'>
            <CircuitModal
              circuitList={circuitList}
              setOpenModalCircuit={setOpenModalCircuit}
              setCircuitList={setCircuitList}
              exercisesList={exercisesList}
              setExercisesList={setExercisesList}
            />
          </div>
        ) : (
          <div className='w-full bg-white'>
            <Table
              exercisesList={exercisesList}
              setExercisesList={setExercisesList}
              setOpenModalSuperset={setOpenModalSuperset}
              supersetsList={supersetsList}
              setOpenModalCircuit={setOpenModalCircuit}
              teste={teste}
              setTeste={setTeste}
              onSaveExerciseInfo={handleSaveExerciseInfo}
            />
          </div>
        )}

        <AddExercises
          exercisesList={exercisesList}
          setExercisesList={setExercisesList}
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

export default WorkoutsCreation;
