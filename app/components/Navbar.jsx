"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import React from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-primaryWhiteColor font-mulish-600 shadow-custom mx-[20px] sticky top-0 z-50 mt-[20px] py-3 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex for nav */}
        <div className="md:block flex items-center justify-between ">
          <div className="flex items-center justify-between">
            {/* Box 1 */}
            <div className="">
              <Link href="/">
                <Image
                  src="/images/codePlay72_logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
            {/* Box 2 */}
            <div className="hidden md:block text-primaryGreenColor">
              {/* Are in a div */}
              <div className=" flex items-baseline space-x-4">
                <Link
                  className=" hover:bg-primaryGreenColor hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className=" hover:bg-primaryGreenColor hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/about"
                >
                  About Us
                </Link>

                {/* Link with drop down  */}
                <div className="relative inline-block text-left">
                  <button
                    type="button"
                    className="text-primaryGreenColor hover:bg-primaryGreenColor hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                    onClick={toggleMenu}
                  >
                    Our Programs
                    <svg
                      className="ml-1 h-5 w-5 text-primaryGreenColor hover:text-white inline-block"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                      <div className="py-1">
                        <Link
                          href="/services/service1"
                          className="block px-4 py-2 text-sm text-primaryGreenColor hover:bg-gray-100"
                        >
                          Private Playground
                        </Link>
                        <Link
                          href="/services/service2"
                          className="block px-4 py-2 text-sm text-primaryGreenColor hover:bg-gray-100"
                        >
                          Home Playground
                        </Link>
                        <Link
                          href="/services/service2"
                          className="block px-4 py-2 text-sm text-primaryGreenColor hover:bg-gray-100"
                        >
                          Digital School Playground
                        </Link>
                        <Link
                          href="/services/service2"
                          className="block px-4 py-2 text-sm text-primaryGreenColor hover:bg-gray-100"
                        >
                          Digital Club
                        </Link>
                        {/* Add more dropdown items as needed */}
                      </div>
                    </div>
                  )}
                </div>
                <Link
                  className="text-primaryGreenColor hover:bg-primaryGreenColor hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/services"
                >
                  Create
                </Link>
                {/* Add more menu items as needed */}
              </div>
            </div>

            <div className="md:flex justify-between gap-10 hidden ">
              <button className="bg-primaryYellowColor py-2 px-5 font-mulish-600 hover:font-bold rounded-[8px]">
                <Link href="/login" className=" hover:font-xl">
                  Login
                </Link>
              </button>
              <button className=" hover:font-bold">
                <Link href="/signup" className="  hover:font-xl ">
                  Sign Up
                </Link>
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-primaryGreen bg-primaryGreenColor focus:text-white"
            >
              {/* Menu icon */}
              {isOpen ? (
                <svg
                  className={`h-6 w-6 ${isOpen ? "transform rotate-180" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Responsive menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                className="text-primaryGreenColor hover:bg-primaryGreenColor hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-primaryGreenColor hover:bg-primaryGreenColor hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Link>
              <div className="relative inline-block text-left">
                <button
                  type="button"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                  onClick={toggleMenu}
                >
                  Services
                  <svg
                    className={`ml-1 h-5 w-5 text-gray-400 inline-block ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <div className="py-1">
                      <Link
                        href="/services/service1"
                        className="block px-4 py-2 text-sm text-primaryGreenColor hover:bg-gray-100"
                      >
                        Service 1
                      </Link>
                      <Link
                        href="/services/service2"
                        className="block px-4 py-2 text-sm text-primaryGreenColor hover:bg-gray-100"
                      >
                        Service 2
                      </Link>
                      {/* Add more dropdown items as needed */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
