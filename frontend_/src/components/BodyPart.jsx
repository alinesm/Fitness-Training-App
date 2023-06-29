import React from 'react';

function BodyPart({ item, setBodyPart }) {
  return (
    <div
      onClick={() => {
        setBodyPart(item);
      }}
    >
      {/* <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} /> */}
      <p>{item}</p>
    </div>
  );
}

export default BodyPart;
