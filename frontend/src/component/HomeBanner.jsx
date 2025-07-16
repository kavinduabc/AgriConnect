import React from 'react'
import { Link } from 'react-router-dom'

const HomeBanner = () => {
  return (
    <div className="bg-green-50 min-h-[85vh] flex flex-col items-center justify-center text-center px-4">
     
      <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-3">
        Empowering Sri Lankan Farmers
      </h1>

     
      <p className="text-green-700 text-xl mb-4">
        ගොවීන්ගේ ජීවිතය වෙනස් කරන ඩිජිටල් වේදිකාව
      </p>

      
      <p className="text-gray-700 max-w-2xl text-lg mb-6">
        Connect directly with buyers, get real-time market prices, and access farming guidance.
        Supporting tea, paddy, vegetables, and all Sri Lankan agriculture.
      </p>

      
      <div className="flex gap-4">
        <Link to="/signupfarmer" className='mr-4'>
        <button className="bg-green-700 text-white px-6 py-2 text-lg rounded hover:bg-green-800 transition">
          Start as Farmer
        </button></Link>
        <button className="border border-green-700 text-green-700 px-6 py-2 text-lg rounded hover:bg-green-100 transition">
          Join as Buyer
        </button>
      </div>
    </div>
  )
}

export default HomeBanner
