import api from './api';

// export async function saveBooking(body, token) {
//   const response = await api.post('/booking', body, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return response.data;
// }

export async function saveWorkout(body) {
  const response = await api.post('/workouts', body);

  return response.data;
}

export async function getWorkoutById(workoutId) {
  const response = await api.get(`/workouts/${workoutId}`);

  return response.data;
}

export async function getListOfWorkouts() {
  const response = await api.get('/workouts/');

  return response.data;
}
