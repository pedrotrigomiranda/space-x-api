import React from 'react';

export default function MissionKey() {
  return (
    <div className='my-3' style={{ display: 'flex', columnGap: '2rem' }}>
      <p>
        <span className='px-3 mr-2 bg-success'></span>Success
      </p>
      <p>
        <span className='px-3 mr-2 bg-danger'></span>Fail
      </p>
    </div>
  );
}
