import './bootstrap';
import "../css/app.css";
import React from "react";
import ReactDOM from "react-dom/client";
import MainLayout from "./layout/MainLayout";

function App() {
    return (
        <MainLayout>
            <h1 className="bg-red-500 text-white p-4">
                home page berhasil
            </h1>
        </MainLayout>
    );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);