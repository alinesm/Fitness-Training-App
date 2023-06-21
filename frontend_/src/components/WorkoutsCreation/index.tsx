import React, { useState } from 'react';
import AddExercises from './AddExercises';
import Table from './Table';
import { toast } from 'react-toastify';
import { saveWorkout } from '../../services/workoutApi';
import { FaWindowClose } from 'react-icons/fa';

function WorkoutsCreation({ setOpenCreateWorkout }) {
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
      const clientId = 2;
      await saveWorkout(newData, clientId);
      setOpenCreateWorkout(false);
      console.log('newData', newData);
      toast('Reserva realizada!');
    } catch (err) {
      toast('Não foi possível salvar suas informações!');
    }
  }

  return (
    <div className='flex flex-col absolute h-fit w-full inset-0 z-40 bg-black bg-opacity-70'>
      <div className='px-4 rounded-t-lg justify-between flex gap-3 bg-gray-400 mt-10  items-center text-white  mx-auto w-11/12 '>
        <button
          className='uppercase text-white px-3 text-center my-1 bg-gray-500 rounded-md'
          onClick={(e) => handleSaveButtonClick(e)}
        >
          save
        </button>
        <div
          onClick={() => setOpenCreateWorkout(false)}
          className='cursor-pointer'
        >
          <FaWindowClose size={25} />
        </div>
      </div>

      <div className='h-fit rounded-b-lg mx-auto w-11/12 overflow-y-auto bg-white transition-transform'>
        <div className='grid grid-cols-2  w-full'>
          <Table
            exercisesList={exercisesList}
            setExercisesList={setExercisesList}
            setOpenModalSuperset={setOpenModalSuperset}
            openModalSuperset={openModalSuperset}
            setOpenModalCircuit={setOpenModalCircuit}
            openModalCircuit={openModalCircuit}
            circuitList={circuitList}
            setCircuitList={setCircuitList}
            supersetsList={supersetsList}
            setSupersetsList={setSupersetsList}
            onSaveExerciseInfo={handleSaveExerciseInfo}
            workOutItialInfo={workOutItialInfo}
            setWorkOutItialInfo={setWorkOutItialInfo}
          />

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
      </div>
    </div>
  );
}

export default WorkoutsCreation;

// [
//   {
//       "exerciseId": "0001",
//       "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
//       "exerciseName": "3/4 sit-up",
//       "sets": "1",
//       "text": "1",
//       "restSecs": "45"
//   },
//   {
//       "exerciseId": "0002",
//       "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
//       "exerciseName": "45° side bend",
//       "sets": "2",
//       "text": "2",
//       "restSecs": "45"
//   },
//   {
//       "supertests": [
//           {
//               "supersetOf": "3"
//           },
//           {
//               "exerciseId": "1512",
//               "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/1512.gif",
//               "exerciseName": "all fours squad stretch",
//               "sets": "",
//               "text": "1",
//               "restSecs": "45"
//           },
//           {
//               "exerciseId": "0006",
//               "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0006.gif",
//               "exerciseName": "alternate heel touchers",
//               "sets": "",
//               "text": "2",
//               "restSecs": "90"
//           }
//       ]
//   },
//   {
//       "rest": "90"
//   },
//   {
//       "exerciseId": "1512",
//       "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/1512.gif",
//       "exerciseName": "all fours squad stretch",
//       "sets": "3",
//       "text": "3",
//       "restSecs": "45"
//   },
//   {
//       "exerciseId": "0006",
//       "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0006.gif",
//       "exerciseName": "alternate heel touchers",
//       "sets": "4",
//       "text": "4",
//       "restSecs": "90"
//   },
//   {
//       "circuits": [
//           {
//               "circuitOf": "4"
//           },
//           {
//               "exerciseId": "1512",
//               "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/1512.gif",
//               "exerciseName": "all fours squad stretch",
//               "sets": "",
//               "text": "1",
//               "restSecs": "45"
//           },
//           {
//               "exerciseId": "0006",
//               "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0006.gif",
//               "exerciseName": "alternate heel touchers",
//               "sets": "",
//               "text": "2",
//               "restSecs": "45"
//           },
//           {
//               "exerciseId": "0007",
//               "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
//               "exerciseName": "alternate lateral pulldown",
//               "sets": "",
//               "text": "3",
//               "restSecs": "90"
//           }
//       ]
//   },
//   {
//       "rest": "90"
//   },
//   {
//       "exerciseId": "1368",
//       "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/1368.gif",
//       "exerciseName": "ankle circles",
//       "sets": "5",
//       "text": "5",
//       "restSecs": "90"
//   },
//   {
//       "exerciseId": "3293",
//       "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
//       "exerciseName": "archer pull up",
//       "sets": "6",
//       "text": "6",
//       "restSecs": "45"
//   }
// ]
