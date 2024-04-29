import React, { useState } from 'react';

const SignUp = () => {
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
 });

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
   
    fetch('http://localhost:3000/api/user/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if(!response.ok){
        throw Error('no response')
      }
      return response.json()
    })
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    });
 };

 return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
          <div className="rounded-lg shadow-md">
                   <a href="/Home" className="block w-full text-center rounded-lg border border-transparent px-4 py-3 text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700">
                      Sign Up
                   </a>
                   
                  </div>
                  <a href="login" className="block  text-center rounded-lg border border-transparent px-4 py-3 text-base font-medium text-white bg-cyan-100 hover:bg-cyan-700">
                      Login here
                   </a>
          </div>
        </form>
      </div>
    </div>
 );
};

export default SignUp;
