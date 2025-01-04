import React from 'react';

const EducationBox = ({
  period,
  school,
  major,
  advisor,
  location,
  description,
}) => (
  <div className='flex bg-white justify-between mx-auto px-5 py-2.5 text-plus'>
    <span className='flex flex-col px-7 py-5 justify-between'>
      <div>
        <div
          className='text-lg font-bold pb-3'
          style={{ color: 'rgb(0, 0, 255)' }}
        >
          {period}
        </div>
        <div className='pb-3'>{school}</div>
        <div className=''>{major}</div>
        <div className='text-sm pb-5'>{advisor}</div>
        <div className='text-sm pb-1'>{location}</div>
      </div>
    </span>
    <span className='text-lg px-7 pt-12 pb-5 max-w-[60%] break-words overflow-hidden'>
      {description}
    </span>
  </div>
);

export default EducationBox;
