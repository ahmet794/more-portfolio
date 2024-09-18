import React from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import './App.css'; // Main CSS

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="main-content">
                <div className="about-section">
                    <h1>Welcome to More-Portfolio</h1>
                    <p>
                        More-Portfolio offers cutting-edge portfolio management strategies that combine the latest in financial theory with the power of modern applications. Manage your investments, track performance, and make data-driven decisions all in one place.
                    </p>
                </div>
                <Login />
            </div>
        </div>
    );
}

export default App;
