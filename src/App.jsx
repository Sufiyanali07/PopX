import React, { useState } from "react";
import { FaHome, FaArrowLeft, FaArrowRight, FaCamera } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import img from "./assets/Images/sufiyan.png";
const forms = [
  {
    id: 1,
    content: (
      <div className="mt-100">
        <h2 className="text-3xl font-bold">Welcome to PopX</h2>
        <p className="text-gray-600 text-lg mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="mt-4 w-full py-2 bg-purple-600  hover:bg-purple-700 transition text-white rounded-xl shadow-lg">
          Create Account
        </button>
        <button className="mt-2 w-full py-2 bg-purple-300 text-black rounded-xl shadow-lg">
          Already Registered? Login
        </button>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="mb-100 mt-15">
        <h2 className="text-3xl font-bold"> Sing in to Your PopX account</h2>
        <p className="text-gray-600 mt-5 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Email */}
        <div className="relative mt-6">
          <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600 font-semibold">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full rounded-xl p-3 pt-5 border border-gray-300 shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Password */}
        <div className="relative mt-6">
          <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600 font-semibold">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full rounded-xl p-3 pt-5 border border-gray-300 shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Button */}
        <button className="mt-6 w-full py-3 bg-gray-400 text-white rounded-xl shadow-lg hover:bg-purple-600 transition">
          Login
        </button>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className=" p-6 bg-white shadow-md rounded-lg w-96 mx-auto">
        <h2 className="text-3xl font-bold">Create your PopX account</h2>

        {/* Full Name */}
        <div className="relative mt-6">
          <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600 font-semibold">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl p-3 pt-5 border border-gray-300 shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Phone Number */}
        <div className="relative mt-6">
          <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600 font-semibold">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="Phone number"
            className="w-full rounded-xl p-3 pt-5 border border-gray-300 shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Email Address */}
        <div className="relative mt-6">
          <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600 font-semibold">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-xl p-3 pt-5 border border-gray-300 shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Password */}
        <div className="relative mt-6">
          <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600 font-semibold">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl p-3 pt-5 border border-gray-300 shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Company Name */}
        <div className="relative mt-6">
          <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600 font-semibold">
            Company Name
          </label>
          <input
            type="text"
            placeholder="Company name"
            className="w-full rounded-xl p-3 pt-5 border border-gray-300 shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Are you an Agency? */}
        <div className="mt-6">
          <label className="block text-purple-600 font-semibold">
            Are you an Agency?
          </label>
          <div className="flex items-center mt-2">
            <label className="inline-flex items-center">
              <input type="radio" name="agency" className="text-blue-600" />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input type="radio" name="agency" className="text-blue-600" />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        {/* Button */}
        <button className="mt-15 w-full py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 transition">
          Create Account
        </button>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className="mb-100">
        <h2 className="text-3xl font-bold">Account Settings</h2>

        {/* Profile Section */}
        <div className="flex items-center mt-4 bg-gray-100 p-4 relative">
          {/* Profile Image */}
          <div className="relative">
            <img
              src={img}
              alt="User"
              className="rounded-full w-20 h-20 mr-4 shadow-lg border-4 border-gray-300 object-cover"
            />
            {/* Camera Icon */}
            <div className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full shadow-md cursor-pointer border-2 border-white hover:bg-blue-600">
              <FaCamera className="w-4 h-4" />
            </div>
          </div>

          {/* User Info */}
          <div>
            <h3 className="font-bold">Marry Doe</h3>
            <p className="text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="text-gray-600 bg-gray-100 px-5 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>

        <div className="border-b-2 border-dotted border-gray-300 w-full mt-5"></div>
      </div>
    ),
  },
];

export default function FormNavigator() {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-96 h-[700px] p-6 rounded-xl shadow-2xl bg-white flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            {forms[index].content}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center items-center w-96 mt-10 gap-4">
        <button
          className="p-2 bg-gray-200 rounded-full shadow-lg"
          onClick={() => setIndex(0)}
        >
          <FaHome />
        </button>
        <button
          className="p-2 bg-gray-200 rounded-full shadow-lg"
          onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
        >
          <FaArrowLeft />
        </button>
        <p>
          {index + 1} of {forms.length}
        </p>
        <button
          className="p-2 bg-gray-200 rounded-full shadow-lg"
          onClick={() =>
            setIndex((prev) => Math.min(prev + 1, forms.length - 1))
          }
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
