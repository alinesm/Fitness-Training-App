import React, { useState } from 'react';
import AddExercises from './AddExercises';
import Table from './Table';
import SupertestModal from './SupertestModal';
import CircuitModal from './CircuitModal';

function WorkoutsCreation() {
  const [openModalSuperset, setOpenModalSuperset] = useState(false);
  const [openModalCircuit, setOpenModalCircuit] = useState(false); //modal for circuit
  const [supersetsList, setSupersetsList] = useState([]);
  const [circuitList, setCircuitList] = useState([]); //circuit list added to workout
  const [workoutsList, setWorkoutsList] = useState([]);
  const [exercisesList, setExercisesList] = useState([]); //exercises list added to workout

  return (
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
      />
    </div>
  );
}

export default WorkoutsCreation;
