import React from 'react'
import { ArrowRight } from 'lucide-react';

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full flex justify-between flex-col p-8'>
      <h2 className='bg-white text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>{props.id + 1}</h2>
      <div>
        <div>
          <p className='text-xl leading-relaxed text-white mb-10'>{props.intro}</p>
        </div>
        <div className='flex justify-between'>
          <button style={{backgroundColor: props.color}} className='text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
          <button style={{backgroundColor: props.color}} className=' text-white font-medium px-3 py-2 rounded-full'><ArrowRight /></button>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent;
