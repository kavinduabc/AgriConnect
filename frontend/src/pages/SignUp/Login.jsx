import React from 'react'

const Login = () => {
  return (
   <div className="flex justify-center items-center min-h-screen">
  <div className="p-8 rounded-2xl shadow-2xl w-full max-w-md">
    <h1 className="text-2xl font-bold text-green-700 mb-6 text-center">
      Farmer Login
    </h1>
    <form  className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        className="w-full border border-green-400 rounded-lg px-4 py-2"
       
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full border border-green-400 rounded-lg px-4 py-2"
        
        required
      />
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
      >
        Log In
      </button>
    </form>
  </div>
</div>

  )
}

export default Login