import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import {
  getExerciseDetails,
  getYoutubeVideoByExercise,
} from '../services/externalApi';

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();

  async function singleExerciseData() {
    // const exerciseDetailData = await getExerciseDetails(id);
    const exerciseDetailData = {
      bodyPart: 'waist',
      equipment: 'body weight',
      gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
      id: '0001',
      name: '3/4 sit-up',
      target: 'abs',
    };

    setExerciseDetail(exerciseDetailData);

    // const exerciseVideosData = await getYoutubeVideoByExercise(
    //   exerciseDetailData.name,
    // );
    const exerciseVideosData = {
      contents: [
        {
          video: {
            channelId: 'UC65cPngDx5FG3qFZLexFwcA',
            channelName: 'Gym visual',
            description: '3/4 Sit-up',
            lengthText: '0:07',
            publishedTimeText: '6 years ago',
            thumbnails: [
              {
                height: 270,
                url: 'https://i.ytimg.com/vi/FXalPpHfkZk/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDncKcdvqg67Yt-lgpnWvzh_FONSw',
                width: 480,
              },
            ],
            title: '3/4 Sit-up',
            videoId: 'FXalPpHfkZk',
            viewCountText: '4,313 views',
          },
        },
      ],
    };

    setExerciseVideos(exerciseVideosData.contents);
  }
  useEffect(() => {
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    singleExerciseData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <div>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
    </div>
  );
}

export default ExerciseDetail;
