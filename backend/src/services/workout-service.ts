import workoutRepository from '@/repositories/workout-repository';

async function postWorkout(workout: any) {
  const workoutDataId = await workoutRepository.createWorkoutData(workout);
  console.log('workoutDataId', workoutDataId);
  return workoutDataId;
}

async function getWorkoutById(workoutId: number) {
  const workout = await workoutRepository.getWorkoutById(workoutId);

  const output = [{ workoutId: workout.id }];
  const sortedExercises = workout.exercises.sort((a, b) => a.workoutOrder - b.workoutOrder);

  const supertestsMap = new Map();
  const circuitsMap = new Map();

  // Iterate over the sorted exercises and transform each exercise object
  sortedExercises.forEach((exercise) => {
    if (exercise.supertestId) {
      if (!supertestsMap.has(exercise.supertestId)) {
        supertestsMap.set(exercise.supertestId, {
          supertestId: exercise.Supertest.id,
          rounds: exercise.Supertest.rounds,
          workoutOrder: exercise.workoutOrder,
          exercises: [],
        });
      }

      supertestsMap.get(exercise.supertestId).exercises.push({
        id: exercise.id,
        exerciseId: exercise.exerciseId,
        exerciseGift: exercise.exerciseGift,
        exerciseName: exercise.exerciseName,
        sets: exercise.sets,
        text: exercise.text,
        restSecs: exercise.restSecs,
      });
    } else if (exercise.circuitId) {
      if (!circuitsMap.has(exercise.circuitId)) {
        circuitsMap.set(exercise.circuitId, {
          circuitId: exercise.Circuit.id,
          rounds: exercise.Circuit.rounds,
          workoutOrder: exercise.workoutOrder,
          exercises: [],
        });
      }

      circuitsMap.get(exercise.circuitId).exercises.push({
        id: exercise.id,
        exerciseId: exercise.exerciseId,
        exerciseGift: exercise.exerciseGift,
        exerciseName: exercise.exerciseName,
        sets: exercise.sets,
        text: exercise.text,
        restSecs: exercise.restSecs,
      });
    } else {
      // Otherwise, add the exercise object to the output array directly
      // const { workoutId, ...rest } = exercise;
      const { circuitId, supertestId, Circuit, Supertest, ...rest } = exercise;
      output.push({ ...rest });
    }
  });

  // Convert the supertestsMap values to an array and add them to the output array
  const supertests = Array.from(supertestsMap.values());
  output.push(...supertests);

  // Convert the circuitsMap values to an array and add them to the output array
  const circuits = Array.from(circuitsMap.values());
  output.push(...circuits);

  // Print the transformed output
  console.log(output);

  return output;
}

const workoutService = {
  postWorkout,
  getWorkoutById,
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
