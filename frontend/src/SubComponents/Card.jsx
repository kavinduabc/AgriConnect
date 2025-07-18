import React from 'react'

const Card = ({icon,title,body}) => {
  return (
   <div className="bg-white p-6 shadow-[0_4px_12px_rgba(34,197,94,0.2)] rounded-xl border border-green-200 hover:shadow-[0_6px_20px_rgba(34,197,94,0.3)] transition duration-300 flex flex-col items-start space-y-3 w-full max-w-[350px]">
  <div className="bg-green-100 text-green-700 p-2 rounded-md text-[28px]">
    {icon}
  </div>
  <div>
    <h4 className="text-lg font-semibold text-green-800">{title}</h4>
    <p className="text-sm text-gray-600">{body}</p>
  </div>
</div>


  )
}

export default Card