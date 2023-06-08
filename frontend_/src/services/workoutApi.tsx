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
  const response = await api.post('/workout', body);

  return response.data;
}
