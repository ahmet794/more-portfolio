import React from 'react';
import './PortfolioDashboard.css';

function PortfolioDashboard() {
  return (
    <div className="dashboard-container">

      <div className="dashboard-box">
        <h1>Portfolio Overview</h1>
        <p>Selected Portfolio: XYZ Portfolio</p>
        <p>Total Value: $1,200,000</p>
      </div>

      <div className="options-container">
        <button className="option-btn">Enhance Portfolio</button>
        <button className="option-btn">View Performance</button>
        <button className="option-btn">Add New Assets</button>
      </div>
    </div>
  );
}

export default PortfolioDashboard;