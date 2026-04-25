import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between">
            <h1 className="font-bold">HMIF</h1>
            <ul className="flex gap-4 items-center">
                <li><Link to="/">Home</Link></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li>
                    <Link
                        to="/login"
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
                    >
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
}