import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [opened, { toggle }] = useDisclosure();

  return (
    <nav className="bg-blue-900 p-4 border-b-2 border-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Navbar</div>
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className="text-white">
            Home
          </NavLink>
          <NavLink to="/about" className="text-white">
            About
          </NavLink>
          <NavLink to="/sign-in" className="text-white">
            Sighn-In
          </NavLink>
          <NavLink to="/sign-up" className="text-white">
            Sighn-Up
          </NavLink>
        </div>
        <div className="md:hidden">
          <Burger
            lineSize={5}
            size="lg"
            color="white"
            opened={opened}
            onClick={() => {
              setIsOpen(!isOpen);
              toggle();
            }}
            aria-label="Toggle navigation"
          />
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-blue-900 grid grid-cols-none place-items-center p-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block text-white w-full h-full text-center"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `h-full rounded-lg p-2 w-full block ${isActive ? "border" : ""}`
              }
            >
              Home
            </NavLink>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="block text-white w-full h-full text-center"
          >
            <NavLink
              className={({ isActive }) =>
                `h-full p-2 w-full block ${isActive ? "border" : ""}`
              }
              to="/about"
            >
              About
            </NavLink>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="block text-white w-full h-full text-center"
          >
            <NavLink
              className={({ isActive }) =>
                `h-full p-2 w-full block ${isActive ? "border" : ""}`
              }
              to="/sign-in"
            >
              Sign In
            </NavLink>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className="block text-white w-full h-full text-center"
          >
            <NavLink
              className={({ isActive }) =>
                `h-full p-2 w-full block ${isActive ? "border" : "border-none"}`
              }
              to="/sign-up"
            >
              Sign Up
            </NavLink>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
