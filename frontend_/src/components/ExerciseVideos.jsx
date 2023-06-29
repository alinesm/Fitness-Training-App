import React from 'react';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <div>
      <p>{name}</p>

      <div>
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div>
              <p>{item.video.title}</p>
              <p>{item.video.channelName}</p>
            </div>
            <div></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
