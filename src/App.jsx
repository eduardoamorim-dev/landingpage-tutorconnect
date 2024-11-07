// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import NotFound from "./components/NotFound/NotFound";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/notfound" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
