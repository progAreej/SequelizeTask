import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todo from './components/todo';
const App = () => {
  

  
return(
  <>
  <Router>
      <div>
        <Routes>
          <Route path="/" element={<Todo/>} />
         
        </Routes>
      </div>
    </Router>
  </>
)
};

export default App;
