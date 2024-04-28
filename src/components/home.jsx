import { Link } from "react-router-dom"

export const Home = ()=>{
  
    return(
      <div className="flex flex-col min-h-screen bg-gray-100">
            <nav className="bg-gray-800 p-4 fixed top-0 left-0 h-screen w-64">
                <ul className="flex flex-col justify-start">
                    <li><a href="/" className="text-white p-2">Home</a></li>
                    <li><a href="user-dashboard" className="text-white p-2">Events</a></li>
                    <li><a href="user-dashboard" className="text-white p-2">Dashboard</a></li>
                    <li><a href="/contact" className="text-white p-2">Contact</a></li>
                    <li><a href="/logout" className="text-white p-2">Logout</a></li>
                </ul>
            </nav>
            <header className="flex items-center justify-center bg-white p-4">
                <input
                    type="text"
                    placeholder="Search events..."
                    className="rounded-lg p-2 border-2 border-gray-300"
                />
            </header>
            <main className="flex-grow flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to the Event Management Platform</h1>
                <p className="text-lg text-gray-700">Manage your events efficiently with our platform.</p>
                <div className="mt-8">
                <Link to="/events" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Get Started
                    </Link>
                </div>
            </main>
        </div>
      
    )
}