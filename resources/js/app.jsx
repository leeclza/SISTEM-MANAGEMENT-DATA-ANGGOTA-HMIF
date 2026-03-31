import './bootstrap';
import "../css/app.css";
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
            <h1 className='bg-red-500'>Home Page</h1>
    );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);