import { Exercise, Supertest, Circuit } from '@prisma/client';
import workoutRepository from '@/repositories/workout-repository';

async function postWorkout(workout: any) {
  const workoutDataId = await workoutRepository.createWorkoutData(workout);
  console.log('workoutDataId', workoutDataId);
  return workoutDataId;
}

async function getWorkoutById(workoutId: number) {
  const data = await workoutRepository.getWorkoutById(workoutId);
  const result: {
    circuits?: any[];
    supertests?: any[];
    rest?: string;
    exerciseId?: string;
    exerciseGift?: string;
    exerciseName?: string;
    sets?: string;
    text?: string;
    restSecs?: string;
  }[] = [];

  const exercises = data.exercises.sort((a, b) => a.workoutOrder - b.workoutOrder);
  console.log(exercises);

  // exercises.map((exercise) => {
  //   if (exercise.circuitId) {
  //     const circuitExercises = exercises.filter((exercise) => exercise.circuitId !== null);
  //     const circuitGroups = groupBy(circuitExercises, 'circuitId');
  //     for (const circuitId in circuitGroups) {
  //       result.push({
  //         circuits: [
  //           {
  //             rounds: circuitGroups[circuitId][0].Circuit.rounds,
  //           },
  //           ...circuitGroups[circuitId].map(formatExercise),
  //         ],
  //       });
  //     }
  //   } else if (exercise.supertestId) {
  //     const supertestExercises = exercises.filter((exercise) => exercise.supertestId !== null);
  //     const supertestGroups = groupBy(supertestExercises, 'supertestId');

  //     for (const supertestId in supertestGroups) {
  //       result.push({
  //         supertests: [
  //           {
  //             rounds: supertestGroups[supertestId][0].Supertest.rounds,
  //           },
  //           ...supertestGroups[supertestId].map(formatExercise),
  //         ],
  //       });
  //     }
  //   } else if (exercise.exerciseId === null) {
  //     const restExercises = exercises.filter(
  //       (exercise) => exercise.circuitId === null && exercise.supertestId === null,
  //     );

  //     for (const restExercise of restExercises) {
  //       if (restExercise.exerciseName === 'restTime') {
  //         result.push({
  //           rest: restExercise.restSecs,
  //         });
  //       } else {
  //         result.push(formatExercise(restExercise));
  //       }
  //     }
  //   }
  // });

  // return result;
  // }

  const circuitExercises = exercises.filter((exercise) => exercise.circuitId !== null);
  const circuitGroups = groupBy(circuitExercises, 'circuitId');

  for (const circuitId in circuitGroups) {
    result.push({
      circuits: [
        {
          rounds: circuitGroups[circuitId][0].Circuit.rounds,
        },
        ...circuitGroups[circuitId].map(formatExercise),
      ],
    });
  }

  const supertestExercises = exercises.filter((exercise) => exercise.supertestId !== null);
  const supertestGroups = groupBy(supertestExercises, 'supertestId');

  for (const supertestId in supertestGroups) {
    result.push({
      supertests: [
        {
          rounds: supertestGroups[supertestId][0].Supertest.rounds,
        },
        ...supertestGroups[supertestId].map(formatExercise),
      ],
    });
  }

  const restExercises = exercises.filter((exercise) => exercise.circuitId === null && exercise.supertestId === null);

  for (const restExercise of restExercises) {
    if (restExercise.exerciseName === 'restTime') {
      result.push({
        rest: restExercise.restSecs,
        ...restExercise,
      });
    } else {
      result.push(formatExercise(restExercise));
    }
  }

  const compareWorkoutOrder = (
    a: { circuits: any[]; supertests: any[] },
    b: { circuits: any[]; supertests: any[] },
  ) => {
    const orderA =
      (a.circuits && a.circuits.find((circuit) => circuit.workoutOrder !== undefined)) ||
      (a.supertests && a.supertests.find((supertest) => supertest.workoutOrder !== undefined)) ||
      a;

    const orderB =
      (b.circuits && b.circuits.find((circuit) => circuit.workoutOrder !== undefined)) ||
      (b.supertests && b.supertests.find((supertest) => supertest.workoutOrder !== undefined)) ||
      b;

    return orderA.workoutOrder - orderB.workoutOrder;
  };

  result.sort(compareWorkoutOrder);

  return result;
}

function groupBy(array: any[], property: string) {
  return array.reduce((acc: { [x: string]: any[] }, obj: { [x: string]: any }) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

function formatExercise(exercise: Exercise & { Supertest: Supertest; Circuit: Circuit }) {
  return {
    exerciseId: exercise.exerciseId,
    exerciseGift: exercise.exerciseGift,
    exerciseName: exercise.exerciseName,
    sets: exercise.sets,
    text: exercise.text,
    restSecs: exercise.restSecs,
    workoutOrder: exercise.workoutOrder,
  };
}

// async function getWorkoutById(workoutId: number) {
//   const data = await workoutRepository.getWorkoutById(workoutId);
//   let result = [];

//   let exercises = data.exercises.sort((a, b) => a.workoutOrder - b.workoutOrder);

//   let circuitExercises = exercises.filter((exercise) => exercise.circuitId !== null);
//   let circuitGroups = groupBy(circuitExercises, 'circuitId');

//   for (let circuitId in circuitGroups) {
//     result.push({
//       circuits: [
//         {
//           rounds: circuitGroups[circuitId][0].Circuit.rounds,
//         },
//         ...circuitGroups[circuitId].map(formatExercise),
//       ],
//     });
//   }

//   let supertestExercises = exercises.filter((exercise) => exercise.supertestId !== null);
//   let supertestGroups = groupBy(supertestExercises, 'supertestId');

//   for (let supertestId in supertestGroups) {
//     result.push({
//       supertests: [
//         {
//           rounds: supertestGroups[supertestId][0].Supertest.rounds,
//         },
//         ...supertestGroups[supertestId].map(formatExercise),
//       ],
//     });
//   }

//   let restExercises = exercises.filter((exercise) => exercise.circuitId === null && exercise.supertestId === null);

//   for (let restExercise of restExercises) {
//     if (restExercise.exerciseName === 'restTime') {
//       result.push({
//         rest: restExercise.restSecs,
//       });
//     } else {
//       result.push(formatExercise(restExercise));
//     }
//   }

//   return result;
// }

// function groupBy(array: any[], property: string) {
//   return array.reduce((acc: { [x: string]: any[] }, obj: { [x: string]: any }) => {
//     let key = obj[property];
//     if (!acc[key]) {
//       acc[key] = [];
//     }
//     acc[key].push(obj);
//     return acc;
//   }, {});
// }

// function formatExercise(exercise: Exercise & { Supertest: Supertest; Circuit: Circuit }) {
//   return {
//     exerciseId: exercise.exerciseId,
//     exerciseGift: exercise.exerciseGift,
//     exerciseName: exercise.exerciseName,
//     sets: exercise.sets,
//     text: exercise.text,
//     restSecs: exercise.restSecs,
//   };
// }

// async function getWorkoutById(workoutId: number) {
//   const workout = await workoutRepository.getWorkoutById(workoutId);

//   const output = [{ workoutId: workout.id }];
//   workout.exercises.sort((a, b) => a.workoutOrder - b.workoutOrder);

//   const supertestsMap = new Map();
//   const circuitsMap = new Map();

//   // Iterate over the sorted exercises and transform each exercise object
//   workout.exercises.forEach((exercise) => {
//     if (exercise.supertestId) {
//       if (!supertestsMap.has(exercise.supertestId)) {
//         supertestsMap.set(exercise.supertestId, {
//           supertestId: exercise.Supertest.id,
//           rounds: exercise.Supertest.rounds,
//           workoutOrder: exercise.workoutOrder,
//           exercises: [],
//         });
//       }

//       supertestsMap.get(exercise.supertestId).exercises.push({
//         id: exercise.id,
//         exerciseId: exercise.exerciseId,
//         exerciseGift: exercise.exerciseGift,
//         exerciseName: exercise.exerciseName,
//         sets: exercise.sets,
//         text: exercise.text,
//         restSecs: exercise.restSecs,
//       });
//     } else if (exercise.circuitId) {
//       if (!circuitsMap.has(exercise.circuitId)) {
//         circuitsMap.set(exercise.circuitId, {
//           circuitId: exercise.Circuit.id,
//           rounds: exercise.Circuit.rounds,
//           workoutOrder: exercise.workoutOrder,
//           exercises: [],
//         });
//       }

//       circuitsMap.get(exercise.circuitId).exercises.push({
//         id: exercise.id,
//         exerciseId: exercise.exerciseId,
//         exerciseGift: exercise.exerciseGift,
//         exerciseName: exercise.exerciseName,
//         sets: exercise.sets,
//         text: exercise.text,
//         restSecs: exercise.restSecs,
//       });
//     } else {
//       // Otherwise, add the exercise object to the output array directly
//       // const { workoutId, ...rest } = exercise;
//       const { circuitId, supertestId, Circuit, Supertest, ...rest } = exercise;
//       output.push({ ...rest });
//     }
//   });

//   // Convert the supertestsMap values to an array and add them to the output array
//   const supertests = Array.from(supertestsMap.values()).sort((a, b) => a.workoutOrder - b.workoutOrder);
//   output.push(...supertests);

//   // Convert the circuitsMap values to an array and add them to the output array
//   const circuits = Array.from(circuitsMap.values()).sort((a, b) => a.workoutOrder - b.workoutOrder);
//   output.push(...circuits);

//   // Print the transformed output
//   // console.log(output);

//   return output;
// }

async function getListOfWorkouts() {
  const workouts = await workoutRepository.getListOfWorkouts();

  return workouts;
}

const workoutService = {
  postWorkout,
  getWorkoutById,
  getListOfWorkouts,
};

export default workoutService;

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
