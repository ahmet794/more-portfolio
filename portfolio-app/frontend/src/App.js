import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import './App.css'; // Main CSS
import PortfolioDashboard from './components/PortfolioDashboard';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <div className="main-content">
                    <div className="about-section">
                        <div>
                            <h1>Welcome to More-Portfolio</h1>
                            <p>
                                More-Portfolio offers cutting-edge portfolio management strategies that combine the latest in financial theory with the power of modern applications. Manage your investments, track performance, and make data-driven decisions all in one place.
                            </p>
                        </div>
                    </div>
                    <div className="login-section">
                        <Routes>
                            <Route path="/" element={<Login />} />  {/* Login Page */}
                            <Route path="/dashboard" element={<PortfolioDashboard />} />  {/* Dashboard Page */}
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
