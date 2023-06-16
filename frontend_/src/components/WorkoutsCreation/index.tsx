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
  const [exercisesList, setExercisesList] = useState([]); //exercises list added to workout
  const [numRounds, setNumRounds] = useState('');
  const [indexCircuitEdit, setIndexCircuitEdit] = useState(null); //index of circuit to be edited
  const [isEditing, setIsEditing] = useState(false); //index of circuit to be edited
  const [teste, setTeste] = useState({
    exerciseId: '',
    exerciseGift: '',
    exerciseName: '',
    sets: '',
    text: '',
    restSecs: '',
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
    exercisesList.forEach((exerciseInfo, index) => {
      handleSaveExerciseInfo(exerciseInfo, index);
    });
    const newData = {
      workout: exercisesList,
    };
    console.log('newData', exercisesList);
    try {
      await saveWorkout(newData);
      toast('Reserva realizada!');
    } catch (err) {
      toast('Não foi possível salvar suas informações!');
    }
  }

  // console.log('exercisesList', exercisesList);

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
              exercisesList={exercisesList}
              setExercisesList={setExercisesList}
            />
          </div>
        ) : openModalCircuit ? (
          <div className='w-full bg-white'>
            <CircuitModal
              circuitList={circuitList}
              setCircuitList={setCircuitList}
              setOpenModalCircuit={setOpenModalCircuit}
              exercisesList={exercisesList}
              setExercisesList={setExercisesList}
              numRounds={numRounds}
              setNumRounds={setNumRounds}
              indexCircuitEdit={indexCircuitEdit}
              setIndexCircuitEdit={setIndexCircuitEdit}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          </div>
        ) : (
          <div className='w-full bg-white'>
            <Table
              exercisesList={exercisesList}
              setExercisesList={setExercisesList}
              setOpenModalSuperset={setOpenModalSuperset}
              setOpenModalCircuit={setOpenModalCircuit}
              onSaveExerciseInfo={handleSaveExerciseInfo}
              circuitList={circuitList}
              setCircuitList={setCircuitList}
              numRounds={numRounds}
              setNumRounds={setNumRounds}
              indexCircuitEdit={indexCircuitEdit}
              setIndexCircuitEdit={setIndexCircuitEdit}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
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
