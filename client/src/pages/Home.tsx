import React from "react";
import { NavLink } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <section className="min-h-screen h-screen p-4 flex flex-col justify-center place-items-start gap-9 bg-gradient-to-r from-gray-800 to-blue-950 text-white">
      <div>
        <h1 className="text-2xl">WELCOME TO MY FIRST MERN STACK PAGE 🚀.</h1>
        <p className="text-lg mt-4">
          This is a simple MERN stack application with user authentication. It
          allows users to register, log in, and access protected routes Built
          with MongoDB, Express, React, and Node.js for a full-stack experience.
        </p>
      </div>
      <button>
        <NavLink
          to="/sign-in"
          className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4"
        >
          Get Started
        </NavLink>
      </button>
    </section>
  );
};

export default Home;
