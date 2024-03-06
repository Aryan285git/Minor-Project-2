// App.js

import React from 'react';
import './App.css'; // Import CSS file for styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Car Rental</h1>
      </header>
      <main>
        <h2>Available Cars</h2>
        <div className="car-list">
          <div className="car">
            <h3>Car 1</h3>
            <p>Description of Car 1</p>
            <button>Rent</button>
          </div>
          <div className="car">
            <h3>Car 2</h3>
            <p>Description of Car 2</p>
            <button>Rent</button>
          </div>
          {/* Add more cars as needed */}
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Car Rental Web Application</p>
      </footer>
    </div>
  );
}

export default App;
