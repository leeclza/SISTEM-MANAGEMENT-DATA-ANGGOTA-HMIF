import React from "react";
export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between">
            <h1 className="font-bold">HMIF</h1>
            <ul className="flex gap-4 items-center">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li>
                    <a 
                        href="/login"
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
                    >
                        Login
                    </a>
                </li>
            </ul>
        </nav>
    );
}