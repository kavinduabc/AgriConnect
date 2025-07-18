import React, { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';

const farmingOptions = ["Paddy", "Tea", "Vegetables", "Fruits", "Spices"];

const SignUp = () => {
  const [name, setName] = useState("");
  const[email,setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [farmingTypes, setFarmingTypes] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setFarmingTypes(prev =>
      e.target.checked
        ? [...prev, value]
        : prev.filter(item => item !== value)
    );
  };

  const addUser = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/api/v1/adduser", {
      name,
      email,
      location,
      phone,
      password,
      farming:farmingTypes.join(",")
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      // console.log("User added successfully", res.data);
      toast.success("User added successfully");
    }).catch((err) => {
      toast.error("User add failed: " + err.message);
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Farmer Signup
        </h1>
        <form onSubmit={addUser} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-green-400 rounded-lg px-4 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="email"
            className="w-full border border-green-400 rounded-lg px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full border border-green-400 rounded-lg px-4 py-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-green-400 rounded-lg px-4 py-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-green-400 rounded-lg px-4 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div>
            <p className="mb-2 font-medium">Farming Types:</p>
            <div className="flex flex-wrap gap-3">
              {farmingOptions.map((type) => (
                <label key={type} className="flex  items-center space-x-2">
                  <input
                    type="checkbox"
                    value={type}
                    checked={farmingTypes.includes(type)}
                    onChange={handleCheckboxChange}
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
