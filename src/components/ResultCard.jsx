import React from 'react'

const ResultCard = ({item}) => {
  return (
    <div className='w-[17vw] relative  h-80 bg-white rounded'>
<div className='h-[70%]'>

    {item.type == 'photo'? <img className='h-full w-full object-center  object-cover' src={item.src} alt="" />:''}
{item.type == 'video'? <video className='h-full w-full  object-center object-cover' autoPlay loop muted src={item.src}></video> :''}
</div>
<div id='bottom' className=' capitalize w-full p-4 absolute bottom-0 text-white'>{item.title}</div>
    </div>
  )
}

export default ResultCard