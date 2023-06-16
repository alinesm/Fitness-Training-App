// const workout = [
//   {
//     name: "3/4 Sit-Up",
//     imagem: "https://www.mundoboaforma.com.br/wp-content/uploads/2016/03/abdominal-crunches.jpg",
//     sets: 3,
//     target: "15x",
//     rest: 45,
//   },
//   {
//     name: "3/4 Sit-Up",
//     imagem: "https://www.mundoboaforma.com.br/wp-content/uploads/2016/03/abdominal-crunches.jpg",
//     sets: 2,
//     target: "20x",
//     rest: 45,
//   },
//   {
//     name: "rest",
//     rest: 90,
//   },
//   {
//     name: "All Fours Squad",
//     imagem: "https://www.mundoboaforma.com.br/wp-content/uploads/2016/03/abdominal-crunches.jpg",
//     sets: null,
//     target: "10x",
//     rest: 0,
//     superSet: 1,
//     rounds: 1,
//   },
//   {
//     name: "Alternate Heel Touchers",
//     imagem: "https://www.mundoboaforma.com.br/wp-content/uploads/2016/03/abdominal-crunches.jpg",
//     sets: null,
//     target: "12x",
//     rest: 0,
//     superSet: 1,
//     rounds: 1,
//   },
//   {
//     name: "Alternate Leg Raises",
//     imagem: "https://www.mundoboaforma.com.br/wp-content/uploads/2016/03/abdominal-crunches.jpg",
//     sets: null,
//     target: "15x",
//     rest: 0,
//     superSet: 1,
//     rounds: 1,
//   },
//   {
//     name: "rest",
//     rest: 90,
//   },
//   {
//     name: "45 Degree Leg Press",
//     imagem: "https://www.mundoboaforma.com.br/wp-content/uploads/2016/03/abdominal-crunches.jpg",
//     sets: 1,
//     target: "15x 30kg",
//     rest: 45,
//   },
//   {
//     name: "Archer Pull-Ups",
//     imagem: "https://www.mundoboaforma.com.br/wp-content/uploads/2016/03/abdominal-crunches.jpg",
//     sets: 2,
//     target: "15x",
//     rest: 60,
//   },
//   {
//     circuitSet: 1,
//     rounds: 2,
//     exercises: [
//     {
//       name: "45 Degree Leg Press",
//       imagem: "https://www.mundoboaforma.com.br/wp-content/uploads/2016/03/abdominal-crunches.jpg",
//       sets: null,
//       target: "10x",
//       rest: 0,
//     },
//     {
//       name: "Push-Ups With Feet Elevated",
//       imagem: "https://www.mundoboaforma.com.br/wp-content/uploads/2016/03/abdominal-crunches.jpg",
//       sets: null,
//       target: "20x",
//       rest: 0,
//     }]
//   }
// ]
// // console.log(workout.length)

// const workoutTest = {
//   id: 1,
//   name: "My Workout",
//   description: "Description of my workout",
// };

// workout.map((exercise, index) =>
//   exercise.supertests ? (
//     createSuperset(exercise, index)

//   ) : exercise.circuits ? (
//     createCircuits(exercise, index)
//   ) : exercise.rest ? (
//     createRests(exercise, index)

//   ) : (console.log("exercise",exercise))
// )

// function createSuperset(exercise, index){

//   console.log("supertest",exercise, index+1)
//   const supersetOf = exercise.supertests[0].supersetOf

//   exercise.supertests.slice(1).map((item, index) => {
//     console.log("supertest",item, index+1)

//     const supertest = {
//       supersetOf : supersetOf,
//       supertestOrder: index+1,
//       workoutId: workoutTest.id
//     }
//     console.log("supertest",supertest)
//   }
//   )
// }

// function createCircuits(exercise, indexMaster){

//   console.log("circuits",exercise, indexMaster+1)
//   const circuitOf = exercise.circuits[0].circuitOf

//   exercise.circuits.slice(1).map((item, index) => {
//     console.log("circuits",item, index+1)

//     const circuits = {
//       id: 1,
//       circuitOf : circuitOf,
//       // circuitOrder: indexMaster+1,
//       // workoutId: workoutTest.id
//     }
//     const exercise = {
//       exerciseId: item.exerciseId,
//       exerciseGift: item.exerciseGift,
//       exerciseName: item.exerciseName,
//       sets: item.sets,
//       text: item.text,
//       restSecs: item.restSecs,
//       order: index+1,
//       workoutId: workoutTest.id,
//       circuitId: circuits.id,
//     }
//     console.log("exercise",exercise)

//     console.log("circuits",circuits)
//   }
//   )
// }

// function createRests(exercise, index){

//   console.log("rests",exercise, index+1)

//     const rests = {
//       rest: exercise.rest,
//       restOrder: index+1,
//       workoutId: workoutTest.id
//     }
//     console.log("rests",rests)
//   }

const teste = {
  result: [
    {
      workoutId: 27,
    },
    {
      id: 103,
      exerciseId: '0001',
      exerciseGift: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
      exerciseName: '3/4 sit-up',
      sets: '3',
      text: '15 reps',
      restSecs: '45',
      workoutOrder: 1,
      workoutId: 27,
    },
    {
      id: 102,
      exerciseId: '0002',
      exerciseGift: 'http://d205bpvrqc9yn1.cloudfront.net/0002.gif',
      exerciseName: '45° side bend',
      sets: '3',
      text: '12 reps',
      restSecs: '45',
      workoutOrder: 2,
      workoutId: 27,
    },
    {
      id: 104,
      exerciseId: null,
      exerciseGift: '',
      exerciseName: 'restTime',
      sets: '',
      text: '',
      restSecs: '90',
      workoutOrder: 3,
      workoutId: 27,
    },
    {
      id: 105,
      exerciseId: null,
      exerciseGift: '',
      exerciseName: 'restTime',
      sets: '',
      text: '',
      restSecs: '90',
      workoutOrder: 5,
      workoutId: 27,
    },
    {
      supertestId: 31,
      rounds: '3',
      workoutOrder: 4,
      exercises: [
        {
          id: 108,
          exerciseId: '0006',
          exerciseGift: 'http://d205bpvrqc9yn1.cloudfront.net/0006.gif',
          exerciseName: 'alternate heel touchers',
          sets: '',
          text: '12',
          restSecs: '45',
        },
        {
          id: 110,
          exerciseId: '0007',
          exerciseGift: 'http://d205bpvrqc9yn1.cloudfront.net/0007.gif',
          exerciseName: 'alternate lateral pulldown',
          sets: '',
          text: '12',
          restSecs: '45',
        },
        {
          id: 109,
          exerciseId: '1368',
          exerciseGift: 'http://d205bpvrqc9yn1.cloudfront.net/1368.gif',
          exerciseName: 'ankle circles',
          sets: '',
          text: '12',
          restSecs: '45',
        },
      ],
    },
    {
      circuitId: 18,
      rounds: '2',
      workoutOrder: 6,
      exercises: [
        {
          id: 106,
          exerciseId: '0002',
          exerciseGift: 'http://d205bpvrqc9yn1.cloudfront.net/0002.gif',
          exerciseName: '45° side bend',
          sets: '',
          text: '',
          restSecs: '',
        },
        {
          id: 107,
          exerciseId: '0001',
          exerciseGift: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
          exerciseName: '3/4 sit-up',
          sets: '',
          text: '',
          restSecs: '',
        },
      ],
    },
  ],
};

const { result } = teste;
console.log(result);
let i = 0;

result.map((exercise, index) => {
  if (exercise.supertestId) {
    i = i + exercise.exercises.length;
  } else if (exercise.circuitId) {
    i = i + exercise.exercises.length;
  } else if (exercise.exerciseId) {
    i = i + 1;
  }
});

console.log(i);
