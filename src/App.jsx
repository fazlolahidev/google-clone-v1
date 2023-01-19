import React from "react";

//* Pages *//
import Home from "./pages/Home";
import Results from "./pages/Results";

//* Router *//
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        {/* HOME */}
        <Route path='/' element={<Home />} />

        {/* RESULTS */}
        <Route path='/search' element={<Results />} />
      </Routes>
    </div>
  );
};

export default App;
