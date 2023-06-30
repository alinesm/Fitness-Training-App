// "scripts": {
//   "build": "npx tsc && tsc-alias dist/ -p tsconfig.build.json",
//   "start": "npm run prisma:migrate:deploy && node dist/server.js",
//   "dev": "nodemon src/server.ts",
//   "test": "dotenv -e .env.test npm run prisma:migrate:deploy & dotenv -e .env.test jest -- -i",
//   "prisma:migrate:dev": "prisma migrate dev",
//   "prisma:migrate:deploy": "prisma migrate deploy"
// },
// "_moduleAliases": {
//   "@": "dist"
// },

// "scripts": {
//   "prebuild": "rm -rf dist",
//   "build": "ttsc -p tsconfig.build.json",
//   "prepare": "husky install",
//   "start": "node dist/server.js",
//   "migration:run": "prisma migrate deploy",
//   "migration:generate": "npm run dev:load-envs prisma migrate dev",
//   "lint": "eslint .",
//   "lint:staged": "lint-staged",
//   "test": "cross-env NODE_ENV=test jest --passWithNoTests --runInBand",
//   "test:coverage": "cross-env NODE_ENV=test jest --passWithNoTests --runInBand --coverage --collectCoverageFrom='./src/**'",
//   "test:migration:run": "npm run test:load-envs prisma migrate deploy",
//   "test:migration:generate": "npm run test:load-envs prisma migrate dev",
//   "test:watch": "cross-env NODE_ENV=test jest --watch --passWithNoTests --runInBand",
//   "test:load-envs": "dotenv -e .env.test",
//   "test:seed": "npm run test:load-envs prisma db seed",
//   "dev:load-envs": "dotenv -e .env.development",
//   "dev:migration:run": "npm run dev:load-envs prisma migrate deploy",
//   "dev:migration:generate": "npm run dev:load-envs prisma migrate dev",
//   "dev:seed": "npm run dev:load-envs prisma db seed",
//   "dev": "cross-env NODE_ENV=development nodemon --watch 'src/' --exec 'ts-node -r tsconfig-paths/register ./src/server.ts' -e ts"
// },

// // const workout = [
// //   {
// //     "circuits": [
// //         {
// //             "circuitOf": "3"
// //         },
// //         {
// //             "exerciseId": "0006",
// //             "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0006.gif",
// //             "exerciseName": "alternate heel touchers",
// //             "sets": "",
// //             "text": "2",
// //             "restSecs": "45"
// //         },
// //         {
// //             "exerciseId": "0007",
// //             "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
// //             "exerciseName": "alternate lateral pulldown",
// //             "sets": "",
// //             "text": "3",
// //             "restSecs": "90"
// //         }
// //     ]
// // },
// //   {
// //       "exerciseId": "0001",
// //       "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
// //       "exerciseName": "3/4 sit-up",
// //       "sets": "1",
// //       "text": "1",
// //       "restSecs": "45"
// //   },
// //   {
// //       "exerciseId": "0002",
// //       "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
// //       "exerciseName": "45° side bend",
// //       "sets": "2",
// //       "text": "2",
// //       "restSecs": "45"
// //   },
// //   {
// //       "supertests": [
// //           {
// //               "supersetOf": "3"
// //           },
// //           {
// //               "exerciseId": "1512",
// //               "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/1512.gif",
// //               "exerciseName": "all fours squad stretch",
// //               "sets": "",
// //               "text": "1",
// //               "restSecs": "45"
// //           },
// //           {
// //               "exerciseId": "0006",
// //               "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0006.gif",
// //               "exerciseName": "alternate heel touchers",
// //               "sets": "",
// //               "text": "2",
// //               "restSecs": "90"
// //           }
// //       ]
// //   },
// //   {
// //       "rest": "90"
// //   },
// //   {
// //       "exerciseId": "1512",
// //       "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/1512.gif",
// //       "exerciseName": "all fours squad stretch",
// //       "sets": "3",
// //       "text": "3",
// //       "restSecs": "45"
// //   },
// //   {
// //       "exerciseId": "0006",
// //       "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0006.gif",
// //       "exerciseName": "alternate heel touchers",
// //       "sets": "4",
// //       "text": "4",
// //       "restSecs": "90"
// //   },
// //   {
// //       "circuits": [
// //           {
// //               "circuitOf": "4"
// //           },
// //           {
// //               "exerciseId": "1512",
// //               "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/1512.gif",
// //               "exerciseName": "all fours squad stretch",
// //               "sets": "",
// //               "text": "1",
// //               "restSecs": "45"
// //           },
// //           {
// //               "exerciseId": "0006",
// //               "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0006.gif",
// //               "exerciseName": "alternate heel touchers",
// //               "sets": "",
// //               "text": "2",
// //               "restSecs": "45"
// //           },
// //           {
// //               "exerciseId": "0007",
// //               "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
// //               "exerciseName": "alternate lateral pulldown",
// //               "sets": "",
// //               "text": "3",
// //               "restSecs": "90"
// //           }
// //       ]
// //   },
// //   {
// //       "rest": "90"
// //   },
// //   {
// //       "exerciseId": "1368",
// //       "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/1368.gif",
// //       "exerciseName": "ankle circles",
// //       "sets": "5",
// //       "text": "5",
// //       "restSecs": "90"
// //   },
// //   {
// //       "exerciseId": "3293",
// //       "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
// //       "exerciseName": "archer pull up",
// //       "sets": "6",
// //       "text": "6",
// //       "restSecs": "45"
// //   },
// //   {
// //     "supertests": [
// //         {
// //             "supersetOf": "2"
// //         },
// //         {
// //             "exerciseId": "1512",
// //             "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/1512.gif",
// //             "exerciseName": "all fours squad stretch",
// //             "sets": "",
// //             "text": "1",
// //             "restSecs": "45"
// //         },
// //         {
// //             "exerciseId": "0006",
// //             "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0006.gif",
// //             "exerciseName": "alternate heel touchers",
// //             "sets": "",
// //             "text": "2",
// //             "restSecs": "90"
// //         }
// //     ]
// // },
// // ]
// // // console.log(workout.length)
// // const workoutTest = {
// //   id: 1,
// //   name: "My Workout",
// //   description: "Description of my workout",
// // };

// // workout.map((exercise, index) =>
// //   exercise.supertests ? (
// //     createSuperset(exercise, index)

// //   ) : exercise.circuits ? (
// //     createCircuits(exercise, index)

// //   ) : exercise.rest ? (
// //     createRests(exercise, index)

// //   ) : ( createExercise(exercise, index)
// // )
// // );

// // function createExercise(exercise, index){
// //   const exercise = {
// //     exerciseId: exercise.exerciseId,
// //     exerciseGift: exercise.exerciseGift,
// //     exerciseName: exercise.exerciseName,
// //     sets: exercise.sets,
// //     text: exercise.text,
// //     restSecs: exercise.restSecs,
// //     workoutOrder: index+1,
// //     workoutId: workoutTest.id,
// //   }
// //   console.log("exercise",exercise)
// // }

// // function createSuperset(exercise, index){
// //   const rounds = exercise.supertests[0].supersetOf

// //   exercise.supertests.slice(1).map((item) => {
// //     const superset = {
// //       id:1,
// //       rounds : rounds,
// //     }
// //     const exercise = {
// //       exerciseId: item.exerciseId,
// //       exerciseGift: item.exerciseGift,
// //       exerciseName: item.exerciseName,
// //       sets: item.sets,
// //       text: item.text,
// //       restSecs: item.restSecs,
// //       workoutOrder: index+1,
// //       workoutId: workoutTest.id,
// //       supersetId: superset.id,
// //     }
// //     console.log("exercise",exercise)
// //   }
// //   )
// // }

// // function createCircuits(exercise, index){
// //   const rounds = exercise.circuits[0].circuitOf

// //   exercise.circuits.slice(1).map((item) => {
// //     const circuits = {
// //       id: 1,
// //       rounds:rounds,
// //     }
// //     const exercise = {
// //       exerciseId: item.exerciseId,
// //       exerciseGift: item.exerciseGift,
// //       exerciseName: item.exerciseName,
// //       sets: item.sets,
// //       text: item.text,
// //       restSecs: item.restSecs,
// //       workoutOrder: index+1,
// //       workoutId: workoutTest.id,
// //       circuitId: circuits.id,
// //     }
// //     console.log("exercise",exercise)
// //   }
// //   )
// // }

// // function createRests(exercise, index){
// //     const rests = {
// //       exerciseId: "",
// //       exerciseGift: "",
// //       exerciseName: "restTime",
// //       sets: "",
// //       text: "",
// //       restSecs: exercise.rest,
// //       workoutOrder: index+1,
// //     }
// //     console.log("rests",rests)
// //   }

// const workoutTest2 = {
//   result: {
//     id: 25,
//     name: 'testeName',
//     description: 'teste descrip',
//     exercises: [
//       {
//         id: 91,
//         exerciseId: '0001',
//         exerciseGift: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
//         exerciseName: '3/4 sit-up',
//         sets: '',
//         text: '',
//         restSecs: '',
//         workoutOrder: 1,
//         workoutId: 25,
//         circuitId: null,
//         supertestId: null,
//         Supertest: null,
//         Circuit: null,
//       },
//       {
//         id: 92,
//         exerciseId: null,
//         exerciseGift: '',
//         exerciseName: 'restTime',
//         sets: '',
//         text: '',
//         restSecs: '90',
//         workoutOrder: 3,
//         workoutId: 25,
//         circuitId: null,
//         supertestId: null,
//         Supertest: null,
//         Circuit: null,
//       },
//       {
//         id: 93,
//         exerciseId: '1512',
//         exerciseGift: 'http://d205bpvrqc9yn1.cloudfront.net/1512.gif',
//         exerciseName: 'all fours squad stretch',
//         sets: '',
//         text: '',
//         restSecs: '',
//         workoutOrder: 4,
//         workoutId: 25,
//         circuitId: null,
//         supertestId: 29,
//         Supertest: {
//           id: 29,
//           rounds: '2',
//         },
//         Circuit: null,
//       },
//       {
//         id: 94,
//         exerciseId: '0002',
//         exerciseGift: 'http://d205bpvrqc9yn1.cloudfront.net/0002.gif',
//         exerciseName: '45° side bend',
//         sets: '',
//         text: '',
//         restSecs: '',
//         workoutOrder: 2,
//         workoutId: 25,
//         circuitId: null,
//         supertestId: null,
//         Supertest: null,
//         Circuit: null,
//       },
//       {
//         id: 95,
//         exerciseId: '0006',
//         exerciseGift: 'http://d205bpvrqc9yn1.cloudfront.net/0006.gif',
//         exerciseName: 'alternate heel touchers',
//         sets: '',
//         text: '',
//         restSecs: '',
//         workoutOrder: 4,
//         workoutId: 25,
//         circuitId: null,
//         supertestId: 29,
//         Supertest: {
//           id: 29,
//           rounds: '2',
//         },
//         Circuit: null,
//       },
//       {
//         id: 95,
//         exerciseId: '0006',
//         exerciseGift: 'http://d205bpvrqc9yn1.cloudfront.net/0006.gif',
//         exerciseName: 'alternate heel touchers',
//         sets: '',
//         text: '',
//         restSecs: '',
//         workoutOrder: 5,
//         workoutId: 25,
//         circuitId: null,
//         supertestId: 30,
//         Supertest: {
//           id: 30,
//           rounds: '3',
//         },
//         Circuit: null,
//       },
//       {
//         id: 95,
//         exerciseId: '0006',
//         exerciseGift: 'http://d205bpvrqc9yn1.cloudfront.net/0006.gif',
//         exerciseName: 'alternate heel touchers',
//         sets: '',
//         text: '',
//         restSecs: '',
//         workoutOrder: 5,
//         workoutId: 25,
//         circuitId: null,
//         supertestId: 30,
//         Supertest: {
//           id: 30,
//           rounds: '3',
//         },
//         Circuit: null,
//       },
//       {
//         id: 95,
//         exerciseId: '0006',
//         exerciseGift: 'http://d205bpvrqc9yn1.cloudfront.net/0006.gif',
//         exerciseName: 'alternate heel touchers',
//         sets: '',
//         text: '',
//         restSecs: '',
//         workoutOrder: 5,
//         workoutId: 25,
//         circuitId: null,
//         supertestId: 30,
//         Supertest: {
//           id: 30,
//           rounds: '3',
//         },
//         Circuit: null,
//       },
//       {
//         id: 78,
//         exerciseId: '0001',
//         exerciseGift: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
//         exerciseName: '3/4 sit-up',
//         sets: '',
//         text: '',
//         restSecs: '',
//         workoutOrder: 6,
//         workoutId: 25,
//         circuitId: 16,
//         supertestId: null,
//         Supertest: null,
//         Circuit: {
//           id: 16,
//           rounds: '3',
//         },
//       },
//       {
//         id: 78,
//         exerciseId: '0001',
//         exerciseGift: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
//         exerciseName: '3/4 sit-up',
//         sets: '',
//         text: '',
//         restSecs: '',
//         workoutOrder: 6,
//         workoutId: 25,
//         circuitId: 16,
//         supertestId: null,
//         Supertest: null,
//         Circuit: {
//           id: 16,
//           rounds: '3',
//         },
//       },
//       {
//         id: 78,
//         exerciseId: '0001',
//         exerciseGift: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
//         exerciseName: '3/4 sit-up',
//         sets: '',
//         text: '',
//         restSecs: '',
//         workoutOrder: 7,
//         workoutId: 25,
//         circuitId: 17,
//         supertestId: null,
//         Supertest: null,
//         Circuit: {
//           id: 17,
//           rounds: '3',
//         },
//       },
//       {
//         id: 78,
//         exerciseId: '0001',
//         exerciseGift: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
//         exerciseName: '3/4 sit-up',
//         sets: '',
//         text: '',
//         restSecs: '',
//         workoutOrder: 7,
//         workoutId: 25,
//         circuitId: 17,
//         supertestId: null,
//         Supertest: null,
//         Circuit: {
//           id: 17,
//           rounds: '3',
//         },
//       },
//     ],
//   },
// };
// // {
// //   "result": {
// //     "id": 22,
// //     "name": "testeName",
// //     "description": "teste descrip",
// //     "exercises": [
// //       {
// //         "id": 71,
// //         "exerciseId": "0001",
// //         "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
// //         "exerciseName": "3/4 sit-up",
// //         "sets": "",
// //         "text": "",
// //         "restSecs": "",
// //         "workoutOrder": 1,
// //         "workoutId": 22,
// //         "circuitId": null,
// //         "supertestId": null,
// //         "Supertest": null,
// //         "Circuit": null
// //       },
// //       {
// //         "id": 72,
// //         "exerciseId": "0002",
// //         "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
// //         "exerciseName": "45° side bend",
// //         "sets": "",
// //         "text": "",
// //         "restSecs": "",
// //         "workoutOrder": 2,
// //         "workoutId": 22,
// //         "circuitId": null,
// //         "supertestId": null,
// //         "Supertest": null,
// //         "Circuit": null
// //       },
// //       {
// //         "id": 73,
// //         "exerciseId": null,
// //         "exerciseGift": "",
// //         "exerciseName": "restTime",
// //         "sets": "",
// //         "text": "",
// //         "restSecs": "90",
// //         "workoutOrder": 4,
// //         "workoutId": 22,
// //         "circuitId": null,
// //         "supertestId": null,
// //         "Supertest": null,
// //         "Circuit": null
// //       },
// //       {
// //         "id": 74,
// //         "exerciseId": "0002",
// //         "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
// //         "exerciseName": "45° side bend",
// //         "sets": "",
// //         "text": "",
// //         "restSecs": "",
// //         "workoutOrder": 3,
// //         "workoutId": 22,
// //         "circuitId": null,
// //         "supertestId": 25,
// //         "Supertest": {
// //           "id": 25,
// //           "rounds": "2"
// //         },
// //         "Circuit": null
// //       },
// //       {
// //         "id": 75,
// //         "exerciseId": "0001",
// //         "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
// //         "exerciseName": "3/4 sit-up",
// //         "sets": "",
// //         "text": "",
// //         "restSecs": "",
// //         "workoutOrder": 3,
// //         "workoutId": 22,
// //         "circuitId": null,
// //         "supertestId": 25,
// //         "Supertest": {
// //           "id": 25,
// //           "rounds": "2"
// //         },
// //         "Circuit": null
// //       },
// //       {
// //         "id": 76,
// //         "exerciseId": "0001",
// //         "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
// //         "exerciseName": "3/4 sit-up",
// //         "sets": "",
// //         "text": "",
// //         "restSecs": "",
// //         "workoutOrder": 7,
// //         "workoutId": 22,
// //         "circuitId": null,
// //         "supertestId": 24,
// //         "Supertest": {
// //           "id": 24,
// //           "rounds": "4"
// //         },
// //         "Circuit": null
// //       },
// //       {
// //         "id": 77,
// //         "exerciseId": "0002",
// //         "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
// //         "exerciseName": "45° side bend",
// //         "sets": "",
// //         "text": "",
// //         "restSecs": "",
// //         "workoutOrder": 7,
// //         "workoutId": 22,
// //         "circuitId": null,
// //         "supertestId": 24,
// //         "Supertest": {
// //           "id": 24,
// //           "rounds": "4"
// //         },
// //         "Circuit": null
// //       },
// //       {
// //         "id": 78,
// //         "exerciseId": "0001",
// //         "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
// //         "exerciseName": "3/4 sit-up",
// //         "sets": "",
// //         "text": "",
// //         "restSecs": "",
// //         "workoutOrder": 5,
// //         "workoutId": 22,
// //         "circuitId": 16,
// //         "supertestId": null,
// //         "Supertest": null,
// //         "Circuit": {
// //           "id": 16,
// //           "rounds": "3"
// //         }
// //       },
// //       {
// //         "id": 79,
// //         "exerciseId": "0002",
// //         "exerciseGift": "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
// //         "exerciseName": "45° side bend",
// //         "sets": "",
// //         "text": "",
// //         "restSecs": "",
// //         "workoutOrder": 7,
// //         "workoutId": 22,
// //         "circuitId": null,
// //         "supertestId": 24,
// //         "Supertest": {
// //           "id": 24,
// //           "rounds": "4"
// //         },
// //         "Circuit": null
// //       }
// //     ]
// //   }
// // }

// const { result } = workoutTest2;

// const exercises = workoutTest2.result.exercises;
// const ordenado = exercises.sort((a, b) => a.workoutOrder - b.workoutOrder);

// const output = [{ workoutId: workoutTest2.result.id }];
// const supertestsMap = new Map();
// const circuitsMap = new Map();

// // Iterate over the sorted exercises and transform each exercise object
// ordenado.forEach((exercise) => {
//   if (exercise.supertestId) {
//     if (!supertestsMap.has(exercise.supertestId)) {
//       supertestsMap.set(exercise.supertestId, {
//         supertestId: exercise.Supertest.id,
//         rounds: exercise.Supertest.rounds,
//         workoutOrder: exercise.workoutOrder,
//         exercises: [],
//       });
//     }

//     supertestsMap.get(exercise.supertestId).exercises.push({
//       exerciseId: exercise.exerciseId,
//       exerciseGift: exercise.exerciseGift,
//       exerciseName: exercise.exerciseName,
//       sets: exercise.sets,
//       text: exercise.text,
//       restSecs: exercise.restSecs,
//     });
//   } else if (exercise.circuitId) {
//     if (!circuitsMap.has(exercise.circuitId)) {
//       circuitsMap.set(exercise.circuitId, {
//         circuitId: exercise.Circuit.id,
//         rounds: exercise.Circuit.rounds,
//         workoutOrder: exercise.workoutOrder,
//         exercises: [],
//       });
//     }

//     circuitsMap.get(exercise.circuitId).exercises.push({
//       exerciseId: exercise.exerciseId,
//       exerciseGift: exercise.exerciseGift,
//       exerciseName: exercise.exerciseName,
//       sets: exercise.sets,
//       text: exercise.text,
//       restSecs: exercise.restSecs,
//     });
//   } else {
//     // Otherwise, add the exercise object to the output array directly
//     output.push({ ...exercise });
//     // output.push({
//     //   id: exercise.id,
//     //   exerciseId: exercise.exerciseId,
//     //   exerciseGift: exercise.exerciseGift,
//     //   exerciseName: exercise.exerciseName,
//     //   sets: exercise.sets,
//     //   text: exercise.text,
//     //   restSecs: exercise.restSecs,
//     //   workoutOrder: exercise.workoutOrder
//     // });
//   }
// });

// // Convert the supertestsMap values to an array and add them to the output array
// const supertests = Array.from(supertestsMap.values());
// output.push(...supertests);

// // Convert the circuitsMap values to an array and add them to the output array
// const circuits = Array.from(circuitsMap.values());
// output.push(...circuits);

// // Print the transformed output
// console.log(output);
