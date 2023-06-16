import { prisma } from '@/config';

async function createSuperset(workoutId: number, exercise: { supertests: any[] }, index: number) {
  const rounds = exercise.supertests[0].supersetOf;
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
  const rounds = exercise.circuits[0].circuitOf;
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

async function getWorkoutId() {
  const { id } = await prisma.workout.create({
    data: {
      name: 'testeName',
      description: 'teste descrip',
    },
  });
  return id;
}

async function createWorkoutData(workoutData: any) {
  const workoutId = await getWorkoutId();
  workoutData.map(
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
};

export default workoutRepository;
