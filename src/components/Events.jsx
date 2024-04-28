import React from "react";
import { Link } from 'react-router-dom';

const Events = () => {
  const events = [
    {
      id: 1,
      url: "../assets/birthday.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url:( "../assets/birthday.jpg"),
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "../assets/camping.jpg",
      title: "Camping Trip Planning",
    },
    {
      id: 4,
      url: "../assets/gamenight.jpg",
      title: "Game Night Planning",
    },
    {
      id: 5,
      url: "../assets/party.jpg",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "../assets/wedding.jpg",
      title: "Wedding Planning",
    },
  ];
  return (
    <div className="flex">
      <nav className="bg-gray-800 p-4 w-64 ml-10 ">
        <ul className="flex flex-col justify-start">
          <li><a href="/" className="text-white p-2">Home</a></li>
          <li><a href="user-dashboard" className="text-white p-2">Events</a></li>
          <li><a href="user-dashboard" className="text-white p-2">Dashboard</a></li>
          <li><a href="/contact" className="text-white p-2">Contact</a></li>
          <li><a href="/logout" className="text-white p-2">Logout</a></li>
        </ul>
      </nav>
      <div className="flex-grow p-4">
        <h2 className="text-3xl font-bold mb-8">All Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((element) => (
            <Link to={`/eventDetails/${element.id}`} key={element.id}>
              <div className="bg-white shadow-lg rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">{element.title}</h3>
                <img src={element.url} alt={element.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
