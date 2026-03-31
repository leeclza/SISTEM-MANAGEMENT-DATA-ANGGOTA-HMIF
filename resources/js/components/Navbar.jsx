import React from "react";
export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between">
            <h1 className="font-bold">HMIF</h1>
            <ul className="flex gap-4">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/anggota">Contact</a></li>
            </ul>
        </nav>
    );
}