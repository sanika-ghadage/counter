"use client";

import { useState, useEffect } from "react";


export default function Counter() {
  const [count, setCount] = useState(0);


  useEffect(() => {
   
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      const savedCounter = localStorage.getItem("Counter");

      // If there's a value in localStorage, parse it; otherwise, default to 0
      if (savedCounter) {
        const parsedCounter = parseInt(savedCounter, 10);
        if (!isNaN(parsedCounter)) {
          setCount(parsedCounter);
        }
      }
    }
  }, []); 

  useEffect(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      localStorage.setItem("Counter", count);
    }
  }, [count]);
  


  const [darkMode, setDarkMode] = useState(false);

  const increment = () => setCount(count + 1);

  // Prevent decrementing below 0
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);}}

      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col justify-between transition-all duration-300">
  {/* Header */}
  <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 sm:p-8 md:p-10 text-white shadow-lg dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-gray-700 rounded-full">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center drop-shadow-lg dark:text-white">
      Welcome to the Counter App
    </h1>
  </header>

  {/* Main Content */}
  <main className="flex flex-col justify-center items-center flex-grow">
    <div className="bg-white dark:bg-gray-800 p-8 mt-1 sm:p-8 pt-8 rounded-3xl items-center shadow-xl w-11/12 sm:w-96 md:w-1/2 lg:w-1/3 xl:w-1/4 text-center space-y-8 transition-all duration-300">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
        Counter
      </h1>

      <div className="text-7xl font-semibold text-gray-900 dark:text-gray-400 mb-6 animate-pulse-slow">
        {count}
      </div>

      <div className="flex justify-center space-x-6 mb-6">
        {/* Increment Button */}
        <button
          onClick={increment}
          className="px-8 py-4 bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>

        {/* Decrement Button */}
        <button
          onClick={decrement}
          className="px-8 py-4 bg-gradient-to-r from-red-400 to-yellow-500 hover:from-red-500 hover:to-yellow-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
        > 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15"
            />
          </svg> 
        </button>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-full shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mt-6"
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  </main>

  {/* Footer */}
  <footer className="bg-white dark:bg-gray-800 p-4 shadow-inner flex justify-center items-center">
    <p className="text-gray-700 dark:text-gray-300 text-sm">
    2024 Counter_App.Built with ❤️ using Next.js and Tailwind
    </p>
  </footer>
</div>


  );
}