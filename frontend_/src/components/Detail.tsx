import React, { useState } from 'react';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      name: bodyPart,
    },
    {
      name: target,
    },
    {
      name: equipment,
    },
  ];

  return (
    <div>
      <img src={gifUrl} alt={name} loading='lazy' />
      <div>
        <p> {name}</p>
        {extraDetail?.map((item) => (
          <p> {item.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Detail;
