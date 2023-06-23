import { prisma } from '@/config';

async function createSuperset(workoutId: number, exercise: { supertests: any[] }, index: number) {
  const rounds = Number(exercise.supertests[0].supersetOf);
  const superset = await prisma.supertest.create({
    data: {
      rounds: rounds,
    },
  });
  exercise.supertests
    .slice(1)
    .map(
      async (item: { exerciseId: any; exerciseGift: any; exerciseName: any; sets: any; text: any; restSecs: any }) => {
        await prisma.exercise.create({
          data: {
            exerciseId: item.exerciseId,
            exerciseGift: item.exerciseGift,
            exerciseName: item.exerciseName,
            sets: item.sets,
            text: item.text,
            restSecs: item.restSecs,
            workoutOrder: index + 1,
            workoutId: workoutId,
            supertestId: superset.id,
          },
        });
      },
    );
}

async function createCircuits(
  workoutId: number,
  exercise: { supertests?: any; circuits?: any; rest?: any },
  index: number,
) {
  const rounds = Number(exercise.circuits[0].circuitOf);
  const circuit = await prisma.circuit.create({
    data: {
      rounds: rounds,
    },
  });
  exercise.circuits
    .slice(1)
    .map(
      async (item: { exerciseId: any; exerciseGift: any; exerciseName: any; sets: any; text: any; restSecs: any }) => {
        await prisma.exercise.create({
          data: {
            exerciseId: item.exerciseId,
            exerciseGift: item.exerciseGift,
            exerciseName: item.exerciseName,
            sets: item.sets,
            text: item.text,
            restSecs: item.restSecs,
            workoutOrder: index + 1,
            workoutId: workoutId,
            circuitId: circuit.id,
          },
        });
      },
    );
}

async function createRests(
  workoutId: number,
  exercise: {
    supertests?: any;
    circuits?: any;
    rest?: any;
    exerciseId?: any;
    exerciseGift?: any;
    exerciseName?: any;
    sets?: any;
    text?: any;
    restSecs?: any;
  },
  index: number,
) {
  await prisma.exercise.create({
    data: {
      exerciseId: null,
      exerciseGift: '',
      exerciseName: 'restTime',
      sets: '',
      text: '',
      restSecs: exercise.rest,
      workoutOrder: index + 1,
      workoutId: workoutId,
    },
  });
}

async function createExercise(
  workoutId: number,
  exercise: {
    supertests?: any;
    circuits?: any;
    rest?: any;
    exerciseId?: any;
    exerciseGift?: any;
    exerciseName?: any;
    sets?: any;
    text?: any;
    restSecs?: any;
  },
  index: number,
) {
  await prisma.exercise.create({
    data: {
      exerciseId: exercise.exerciseId,
      exerciseGift: exercise.exerciseGift,
      exerciseName: exercise.exerciseName,
      sets: exercise.sets,
      text: exercise.text,
      restSecs: exercise.restSecs,
      workoutOrder: index + 1,
      workoutId: workoutId,
    },
  });
}

async function createWorkoutInitialInfo(clientId: number, initialInfo: any) {
  const { id } = await prisma.workout.create({
    data: {
      clientId: clientId,
      name: initialInfo.workoutName,
      description: initialInfo.description,
      goal: initialInfo.goal,
      frequency: initialInfo.frequency,
    },
  });
  return id;
}

async function createWorkoutData(workoutData: any, clientId: number) {
  const initialInfo = workoutData[0].workOutItialInfo;
  const workoutId = await createWorkoutInitialInfo(clientId, initialInfo);
  workoutData[1].map(
    (
      exercise: {
        supertests: any;
        circuits?: any;
        rest?: any;
        exerciseId?: any;
        exerciseGift?: any;
        exerciseName?: any;
        sets?: any;
        text?: any;
        restSecs?: any;
      },
      index: never,
    ) =>
      exercise.supertests
        ? createSuperset(Number(workoutId), exercise, index)
        : exercise.circuits
        ? createCircuits(Number(workoutId), exercise, index)
        : exercise.rest
        ? createRests(Number(workoutId), exercise, index)
        : createExercise(Number(workoutId), exercise, index),
  );

  console.log('workout', workoutId);
}

function getWorkoutById(workoutId: number) {
  return prisma.workout.findUnique({
    where: {
      id: workoutId,
    },
    include: {
      exercises: {
        include: {
          Supertest: true,
          Circuit: true,
        },
      },
    },
  });
}

async function geListOfWorkoutsByClientId(clientId: number) {
  const result = await prisma.workout.findMany({
    where: {
      clientId: clientId,
    },
    include: {
      exercises: {
        include: {
          Supertest: true,
          Circuit: true,
        },
      },
    },
  });

  return result;
}

async function deleteWorkoutById(workoutId: number) {
  await prisma.exercise.deleteMany({
    where: {
      workoutId: workoutId,
    },
  });
  const deleteWorkoutById = await prisma.workout.delete({
    where: {
      id: workoutId,
    },
  });

  return deleteWorkoutById;
}

async function updateWorkoutById(workoutId: number, workout: any) {
  const clientId = workout[0].workOutItialInfo.clientId;

  await prisma.exercise.deleteMany({
    where: {
      workoutId: workoutId,
    },
  });
  await prisma.workout.delete({
    where: {
      id: workoutId,
    },
  });

  createWorkoutData(workout, clientId);
}

async function getListOfWorkouts() {
  const result = await prisma.workout.findMany({
    select: {
      id: true,
      name: true,
      description: true,
    },
  });

  return result;
}

const workoutRepository = {
  createWorkoutData,
  getWorkoutById,
  getListOfWorkouts,
  geListOfWorkoutsByClientId,
  deleteWorkoutById,
  updateWorkoutById,
  createWorkoutInitialInfo,
};

export default workoutRepository;
