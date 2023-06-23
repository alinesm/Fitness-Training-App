import api from './api';

// export async function saveBooking(body, token) {
//   const response = await api.post('/booking', body, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return response.data;
// }

export async function saveWorkout(body, clientId) {
  const response = await api.post(`/workouts/${clientId}`, body);

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

export async function getListOfWorkoutsByClientId(clientId) {
  const response = await api.get(`/workouts/clients/${clientId}`);

  return response.data;
}

export async function deleteWorkout(workoutId) {
  const response = await api.delete(`/workouts/${workoutId}`);

  return response.data;
}

export async function editWorkout(workoutId) {
  const response = await api.put(`/workouts/${workoutId}`);

  return response.data;
}
