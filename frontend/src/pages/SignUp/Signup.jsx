import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    phone: '',
    password: '',
    farmingTypes: [],
  });

  const farmingOptions = ['Paddy', 'Tea', 'Vegetables', 'Fruits', 'Spices'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      farmingTypes: checked
        ? [...prev.farmingTypes, value]
        : prev.farmingTypes.filter((type) => type !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can send this data to your backend here
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className=" p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Farmer Signup
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full border rounded-lg px-4 py-2"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="w-full border rounded-lg px-4 py-2"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full border rounded-lg px-4 py-2"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-2"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div>
            <p className="mb-2 font-medium">Farming Type:</p>
            <div className="flex flex-wrap gap-3">
              {farmingOptions.map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={type}
                    onChange={handleCheckboxChange}
                    checked={formData.farmingTypes.includes(type)}
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
