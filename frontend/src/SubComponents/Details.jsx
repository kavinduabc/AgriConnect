import React from 'react'

const Details = ({headin,total,time}) => {
  return (
    <div className=" p-6 shadow-md rounded-xl border border-green-200 hover:shadow-[0_6px_20px_rgba(34,197,94,0.3)] transition duration-300 flex flex-col items-start space-y-3 w-full max-w-[350px]">
  <div className=" text-green-700 p-2 rounded-md text-[28px]">
    {headin}
  </div>
  <div className='px-2'>
    <h4 className="text-lg font-semibold text-green-800">{total}</h4>
    <p className="text-sm text-gray-600">{time}</p>
  </div>
</div>
  )
}

export default Details