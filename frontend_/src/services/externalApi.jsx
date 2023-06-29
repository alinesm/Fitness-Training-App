import axios from 'axios';

const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '63bc5d964dmshcbf5a258f189f60p16e4cajsn6745479fe1fe',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

export async function getAllExercises() {
  try {
    const response = await axios.get(
      'https://exercisedb.p.rapidapi.com/exercises',
      exerciseOptions,
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getBodyParts() {
  try {
    const response = await axios.get(
      'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
      exerciseOptions,
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getExercisesByBodyPart(bodyPart) {
  try {
    const response = await axios.get(
      `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
      exerciseOptions,
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getExerciseDetails(id) {
  try {
    const response = await axios.get(
      `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
      exerciseOptions,
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getYoutubeVideoByExercise(exerciseName) {
  try {
    const response = await axios.get(
      `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseName} exercise`,
      youtubeOptions,
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
