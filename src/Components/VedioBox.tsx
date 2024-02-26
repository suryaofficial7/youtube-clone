import React from 'react'

const VedioBox = (props) => {
  return (
 <div className='w-[380px] m-5 rounded-2xl'>
    <img className='rounded-2xl'  src={props.link} alt="" />
 {/* <hr /> */}
 <p>
{props.title}
</p>
<p className='text-gray-400'>{props.name}</p>
<p className='text-gray-400'><span>{props.view} views</span> <span className='ml-1'>{props.date}</span></p>
 </div>
  )
}

export default VedioBox