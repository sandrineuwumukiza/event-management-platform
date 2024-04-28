import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
 const [formData, setFormData] = useState({
    email: '',
    password: '',
 });

 const navigate = useNavigate() 

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch('http://localhost:3000/api/user/create/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Login failed');
        }
        const data = await response.json();
        console.log('Login successful:', data);
        
        navigate('/'); 
    } catch (error) {
        console.error('Error during login:', error);
       
    }
 };

 return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
            <button type="submit" className="block w-full text-center rounded-lg border border-transparent px-4 py-3 text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
 );
};

export default Login;
