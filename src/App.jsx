import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Homescreen";
import ThankYou from "./Pages/Home/ThankYou";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route
          path="*"
          element={<img src="404error.png" alt="404 not found" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
