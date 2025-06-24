// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './01_welcome/App.jsx'; // Import the App component from the welcome page
import './index.css';

// import App from './ASS1/App.jsx'; // Import the App component from the online shop
// import App from './Assignment-01/App.jsx'; // Import the App component from the assignment
// import App from './Assignment-02/App.jsx';
// import App from './FormHandling/App.jsx'; // Import the App component from the FormHandling folder
import App from './Assignment-03/App.jsx'; // Import the App component from the Assignment-03 folder
// import App from './Assignment-04/App.jsx'; // Import the App component from the Assignment-04 folder
// import App from "./React Assignment-01/App.jsx"; // Import the App component from the React Assignment-01 folder
// import App from "./React Assignment-02/App.jsx"; // Import the App component from the React Assignment-02 folder
// import App from "./React Assignment-03/App.jsx"; // Import the App component from the React Assignment-03 folder
// import App from "./React Assignment-04/App.jsx"; // Import the App component from the React Assignment-04 folder


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
);